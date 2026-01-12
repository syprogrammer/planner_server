import { IsString, IsNotEmpty, IsOptional, IsHexColor } from 'class-validator';

export class CreateLabelDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsHexColor()
    @IsOptional()
    color?: string;

    @IsString()
    @IsNotEmpty()
    projectId: string;
}

export class UpdateLabelDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsHexColor()
    @IsOptional()
    color?: string;
}

export class AddLabelToTaskDto {
    @IsString()
    @IsNotEmpty()
    taskId: string;

    @IsString()
    @IsNotEmpty()
    labelId: string;
}
