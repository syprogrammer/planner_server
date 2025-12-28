import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import { CreateModuleDto, UpdateModuleDto } from './dto/module.dto';

@Injectable()
export class ModulesService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateModuleDto) {
        // Get max order for this app
        const maxOrder = await this.prisma.module.aggregate({
            where: { appId: dto.appId },
            _max: { order: true },
        });

        return this.prisma.module.create({
            data: {
                name: dto.name,
                appId: dto.appId,
                order: (maxOrder._max.order ?? -1) + 1,
            },
            include: {
                tasks: true,
            },
        });
    }

    async findByApp(appId: string) {
        return this.prisma.module.findMany({
            where: { appId },
            include: {
                tasks: {
                    orderBy: { order: 'asc' },
                },
                _count: {
                    select: { tasks: true },
                },
            },
            orderBy: { order: 'asc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.module.findUnique({
            where: { id },
            include: {
                app: {
                    include: {
                        project: true,
                    },
                },
                tasks: {
                    include: {
                        comments: {
                            orderBy: { createdAt: 'asc' },
                        },
                    },
                    orderBy: { order: 'asc' },
                },
            },
        });
    }

    async update(id: string, dto: UpdateModuleDto) {
        return this.prisma.module.update({
            where: { id },
            data: dto,
            include: {
                tasks: true,
            },
        });
    }

    async reorder(appId: string, moduleIds: string[]) {
        const updates = moduleIds.map((id, index) =>
            this.prisma.module.update({
                where: { id },
                data: { order: index },
            }),
        );

        return this.prisma.$transaction(updates);
    }

    async delete(id: string) {
        return this.prisma.module.delete({
            where: { id },
        });
    }
}
