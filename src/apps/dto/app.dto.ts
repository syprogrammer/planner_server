import { IsString, IsEnum, IsOptional, IsNotEmpty, IsUUID } from 'class-validator';
import { AppType } from '@prisma/client';

export class CreateAppDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEnum(AppType)
    @IsNotEmpty()
    type: AppType;

    @IsString()
    @IsOptional()
    icon?: string;

    @IsString()
    @IsNotEmpty()
    projectId: string;
}

export class UpdateAppDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsEnum(AppType)
    @IsOptional()
    type?: AppType;

    @IsString()
    @IsOptional()
    icon?: string;
}
