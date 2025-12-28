import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
import { Role } from '@prisma/client';

export class AddMemberDto {
    @IsString()
    @IsNotEmpty()
    clerkUserId: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(Role)
    role: Role;

    @IsString()
    @IsNotEmpty()
    projectId: string;
}

export class UpdateMemberRoleDto {
    @IsEnum(Role)
    role: Role;
}
