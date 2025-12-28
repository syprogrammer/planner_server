import { SetMetadata } from '@nestjs/common';

export const RESOURCE_KEY = 'resource_type';
export const Resource = (type: 'project' | 'app' | 'module' | 'task' | 'bugSheet') => SetMetadata(RESOURCE_KEY, type);
