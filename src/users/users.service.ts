import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClerkClient } from '@clerk/backend';

@Injectable()
export class UsersService {
    private readonly logger = new Logger(UsersService.name);
    private clerkClient;

    constructor(private configService: ConfigService) {
        const secretKey = this.configService.get<string>('CLERK_SECRET_KEY');
        if (secretKey) {
            this.clerkClient = createClerkClient({ secretKey });
        } else {
            this.logger.error('CLERK_SECRET_KEY not found in configuration');
        }
    }

    async searchUsers(query: string) {
        if (!query || query.length < 2) return [];

        try {
            // Search users in Clerk
            // We search by email or name using the 'query' parameter
            const users = await this.clerkClient.users.getUserList({
                query,
                limit: 10,
            });

            // Transform to a simplified format
            return users.data.map(user => {
                const primaryEmail = user.emailAddresses.find(e => e.id === user.primaryEmailAddressId) || user.emailAddresses[0];
                return {
                    id: user.id,
                    name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Unknown',
                    email: primaryEmail?.emailAddress || 'No Email',
                    avatarUrl: user.imageUrl,
                };
            });
        } catch (error) {
            this.logger.error(`Failed to search users in Clerk: ${error.message}`);
            return [];
        }
    }
    async ensureDefaultOrgMembership(userId: string) {
        const defaultOrgId = this.configService.get<string>('CLERK_ORG_ID');
        if (!defaultOrgId) {
            this.logger.warn('CLERK_ORG_ID not configured, skipping auto-join');
            return;
        }

        try {
            // Check if user is already a member
            // We can try to list memberships or just try to add and catch "already exists" error
            // Listing is safer to avoid 400s in logs
            const memberships = await this.clerkClient.organizations.getOrganizationMembershipList({
                organizationId: defaultOrgId,
                limit: 100, // naive check, but fine for now or we can use generic search if available
            });

            // Clerk backend SDK for verify membership specifically for a user is a bit tricky, 
            // easier to fetch user's memberships
            const userMemberships = await this.clerkClient.users.getOrganizationMembershipList({
                userId,
                limit: 100,
            });

            const isMember = userMemberships.data.some(m => m.organization.id === defaultOrgId);

            if (!isMember) {
                this.logger.log(`Adding user ${userId} to default org ${defaultOrgId}`);
                await this.clerkClient.organizations.createOrganizationMembership({
                    organizationId: defaultOrgId,
                    userId,
                    role: 'org:member', // 'basic_member' or 'org:member' depending on API version, usually 'org:member' for Clerk
                });
                return { joined: true, orgId: defaultOrgId };
            }

            return { joined: false, alreadyMember: true, orgId: defaultOrgId };

        } catch (error) {
            // If error is "already exists" ignore, otherwise log
            if (error.errors?.[0]?.code === 'membership_exists') {
                return { joined: false, alreadyMember: true, orgId: defaultOrgId };
            }
            this.logger.error(`Failed to ensure default org membership: ${error.message}`);
            throw error;
        }
    }
}
