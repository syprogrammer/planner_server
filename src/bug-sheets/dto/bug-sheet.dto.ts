import { IsString, IsEnum, IsOptional, IsNotEmpty } from 'class-validator';
import { Priority, Status } from '@prisma/client';

export class CreateBugSheetDto {
    @IsString()
    @IsNotEmpty()
    module: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsString()
    @IsNotEmpty()
    appId: string;

    @IsEnum(Priority)
    @IsOptional()
    priority?: Priority;

    @IsString()
    @IsOptional()
    assignedTo?: string;

    @IsString()
    @IsOptional()
    remarks?: string;
}

export class UpdateBugSheetDto {
    @IsString()
    @IsOptional()
    module?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(Status)
    @IsOptional()
    status?: Status;

    @IsEnum(Priority)
    @IsOptional()
    priority?: Priority;

    @IsString()
    @IsOptional()
    assignedTo?: string;

    @IsString()
    @IsOptional()
    remarks?: string;
}
