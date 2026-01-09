import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { AddMemberDto, UpdateMemberRoleDto } from './dto/project-member.dto';

@Injectable()
export class ProjectMembersService {
    constructor(private prisma: PrismaService) { }

    async addMember(projectId: string, dto: AddMemberDto) {
        // Check if already a member
        const existing = await this.prisma.projectMember.findUnique({
            where: {
                projectId_userId: {
                    projectId,
                    userId: dto.userId,
                },
            },
        });

        if (existing) {
            throw new ConflictException('User is already a member of this project');
        }

        return this.prisma.projectMember.create({
            data: {
                projectId,
                userId: dto.userId,
                name: dto.name,
                role: dto.role,
            },
        });
    }

    async findAll(projectId: string) {
        return this.prisma.projectMember.findMany({
            where: { projectId },
            orderBy: { createdAt: 'desc' },
        });
    }

    async updateRole(projectId: string, userId: string, dto: UpdateMemberRoleDto) {
        // Ensure member exists
        const member = await this.prisma.projectMember.findUnique({
            where: {
                projectId_userId: {
                    projectId,
                    userId,
                },
            },
        });

        if (!member) {
            throw new NotFoundException('Project member not found');
        }

        return this.prisma.projectMember.update({
            where: {
                projectId_userId: {
                    projectId,
                    userId,
                },
            },
            data: { role: dto.role },
        });
    }

    async removeMember(projectId: string, userId: string) {
        // Ensure member exists
        const member = await this.prisma.projectMember.findUnique({
            where: {
                projectId_userId: {
                    projectId,
                    userId,
                },
            },
        });

        if (!member) {
            throw new NotFoundException('Project member not found');
        }

        return this.prisma.projectMember.delete({
            where: {
                projectId_userId: {
                    projectId,
                    userId,
                },
            },
        });
    }
}
