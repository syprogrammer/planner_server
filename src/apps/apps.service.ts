import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AppType } from '@prisma/client';

import { CreateAppDto, UpdateAppDto } from './dto/app.dto';

@Injectable()
export class AppsService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateAppDto) {
        // Check for duplicates
        const existingApp = await this.prisma.app.findFirst({
            where: {
                projectId: dto.projectId,
                name: dto.name,
            },
        });

        if (existingApp) {
            throw new ConflictException('App with this name already exists in the project');
        }

        return this.prisma.app.create({
            data: {
                name: dto.name,
                type: dto.type,
                icon: dto.icon,
                projectId: dto.projectId,
            },
            include: {
                modules: true,
            },
        });
    }

    async findByProject(projectId: string) {
        return this.prisma.app.findMany({
            where: { projectId },
            include: {
                modules: {
                    include: {
                        tasks: {
                            orderBy: { order: 'asc' },
                        },
                    },
                    orderBy: { order: 'asc' },
                },
                _count: {
                    select: { modules: true },
                },
            },
        });
    }

    async findOne(id: string) {
        return this.prisma.app.findUnique({
            where: { id },
            include: {
                modules: {
                    include: {
                        tasks: {
                            include: {
                                comments: {
                                    orderBy: { createdAt: 'asc' },
                                },
                            },
                            orderBy: { order: 'asc' },
                        },
                    },
                    orderBy: { order: 'asc' },
                },
            },
        });
    }

    async update(id: string, dto: UpdateAppDto) {
        return this.prisma.app.update({
            where: { id },
            data: dto,
        });
    }

    async delete(id: string) {
        return this.prisma.app.delete({
            where: { id },
        });
    }
}
