import { IsString, IsNotEmpty, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

class ProjectMemberDto {
    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    name: string;
}

export class CreateCommentDto {
    @IsString()
    @IsNotEmpty()
    content: string;

    @IsString()
    @IsNotEmpty()
    authorId: string;

    @IsString()
    @IsNotEmpty()
    authorName: string;

    @IsString()
    @IsOptional()
    taskId?: string;

    @IsString()
    @IsOptional()
    parentId?: string;

    // Optional: project members for @mention resolution
    @IsArray()
    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => ProjectMemberDto)
    projectMembers?: ProjectMemberDto[];
}
