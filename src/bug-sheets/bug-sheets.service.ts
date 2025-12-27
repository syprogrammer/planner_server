import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Priority, Status } from '@prisma/client';

export class CreateBugSheetDto {
    module: string;
    description: string;
    appId: string;
    priority?: Priority;
    assignedTo?: string;
    remarks?: string;
}

export class UpdateBugSheetDto {
    module?: string;
    description?: string;
    status?: Status;
    priority?: Priority;
    assignedTo?: string;
    remarks?: string;
}

@Injectable()
export class BugSheetsService {
    constructor(private prisma: PrismaService) { }

    async create(dto: CreateBugSheetDto) {
        return this.prisma.bugSheet.create({
            data: {
                module: dto.module,
                description: dto.description,
                appId: dto.appId,
                priority: dto.priority || 'MEDIUM',
                assignedTo: dto.assignedTo,
                remarks: dto.remarks,
            },
            include: {
                comments: true,
            },
        });
    }

    async findByApp(appId: string) {
        return this.prisma.bugSheet.findMany({
            where: { appId },
            include: {
                comments: {
                    orderBy: { createdAt: 'asc' },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        return this.prisma.bugSheet.findUnique({
            where: { id },
            include: {
                app: {
                    include: {
                        project: true,
                    },
                },
                comments: {
                    orderBy: { createdAt: 'asc' },
                },
            },
        });
    }

    async update(id: string, dto: UpdateBugSheetDto) {
        return this.prisma.bugSheet.update({
            where: { id },
            data: dto,
            include: {
                comments: true,
            },
        });
    }

    async updateStatus(id: string, field: 'devStatus' | 'qaStatus', status: Status) {
        return this.prisma.bugSheet.update({
            where: { id },
            data: { [field]: status },
        });
    }

    async delete(id: string) {
        return this.prisma.bugSheet.delete({
            where: { id },
        });
    }
}
