import { IsString, IsNotEmpty, IsOptional, MaxLength, MinLength } from 'class-validator';

export class CreateProjectDto {
    @IsString()
    @IsNotEmpty({ message: 'Project name is required' })
    @MinLength(2, { message: 'Project name must be at least 2 characters' })
    @MaxLength(100, { message: 'Project name must be at most 100 characters' })
    name: string;

    @IsOptional()
    @IsString()
    @MaxLength(500, { message: 'Description must be at most 500 characters' })
    description?: string;

    @IsOptional()
    @IsString()
    clientOrgId?: string;
}

export class UpdateProjectDto {
    @IsOptional()
    @IsString()
    @MinLength(2, { message: 'Project name must be at least 2 characters' })
    @MaxLength(100, { message: 'Project name must be at most 100 characters' })
    name?: string;

    @IsOptional()
    @IsString()
    @MaxLength(500, { message: 'Description must be at most 500 characters' })
    description?: string;

    @IsOptional()
    @IsString()
    clientOrgId?: string;
}
