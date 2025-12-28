import { IsString, IsEnum, IsOptional, IsNotEmpty, IsDateString } from 'class-validator';
import { TaskType, Priority, Status } from '@prisma/client';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(TaskType)
    @IsOptional()
    type?: TaskType;

    @IsEnum(Priority)
    @IsOptional()
    priority?: Priority;

    @IsString()
    @IsNotEmpty()
    moduleId: string;

    @IsString()
    @IsOptional()
    assignedTo?: string;

    @IsString()
    @IsOptional()
    parentId?: string;

    // Audit fields
    @IsString()
    @IsOptional()
    createdBy?: string;

    @IsString()
    @IsOptional()
    creatorName?: string;

    @IsString()
    @IsOptional()
    reporterId?: string;

    @IsString()
    @IsOptional()
    reporterName?: string;
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(TaskType)
    @IsOptional()
    type?: TaskType;

    @IsEnum(Priority)
    @IsOptional()
    priority?: Priority;

    @IsEnum(Status)
    @IsOptional()
    status?: Status;

    @IsString()
    @IsOptional()
    assignedTo?: string;

    @IsString()
    @IsOptional()
    remarks?: string;

    @IsDateString()
    @IsOptional()
    startDate?: Date;

    @IsDateString()
    @IsOptional()
    endDate?: Date;

    @IsString()
    @IsOptional()
    parentId?: string;

    @IsString()
    @IsOptional()
    reporterId?: string;

    @IsString()
    @IsOptional()
    reporterName?: string;
}
