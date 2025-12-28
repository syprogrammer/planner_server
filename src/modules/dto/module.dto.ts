import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateModuleDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    appId: string;
}

export class UpdateModuleDto {
    @IsString()
    @IsOptional()
    name?: string;
}
