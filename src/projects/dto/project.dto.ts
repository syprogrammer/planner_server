export class CreateProjectDto {
    name: string;
    description?: string;
    clientOrgId?: string;
}

export class UpdateProjectDto {
    name?: string;
    description?: string;
    clientOrgId?: string;
}
