import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import { PrismaService } from './../src/prisma/prisma.service';

/**
 * E2E Tests for Planner API
 * 
 * These tests verify that all API endpoints are working correctly.
 * They test the full request/response cycle through HTTP.
 * 
 * Prerequisites:
 * - Database must be running and migrated
 * - Test user must be created (or use test JWT)
 * 
 * Run with: pnpm test:e2e
 */

describe('Planner API (e2e)', () => {
    let app: INestApplication<App>;
    let prisma: PrismaService;

    // Test data IDs - populated during tests
    let testProjectId: string;
    let testAppId: string;
    let testModuleId: string;
    let testTaskId: string;
    let testCommentId: string;

    // Mock JWT token for authentication (configure for your auth setup)
    const mockAuthToken = 'Bearer test-jwt-token';
    const testUserId = 'test-user-id';
    const testUserName = 'Test User';

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();

        // Apply same pipes as main.ts
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
                transform: true,
                forbidNonWhitelisted: true,
            }),
        );

        await app.init();

        prisma = app.get(PrismaService);
    });

    afterAll(async () => {
        // Cleanup test data
        if (testProjectId) {
            try {
                await prisma.project.delete({ where: { id: testProjectId } });
            } catch (e) {
                // Ignore if already deleted
            }
        }
        await app.close();
    });

    // ==========================================
    // HEALTH CHECK
    // ==========================================
    describe('Health Check', () => {
        it('GET / - should return Hello World', () => {
            return request(app.getHttpServer())
                .get('/')
                .expect(200)
                .expect('Hello World!');
        });
    });

    // ==========================================
    // PROJECTS API
    // ==========================================
    describe('Projects API', () => {
        it('POST /projects - should create a new project', async () => {
            const response = await request(app.getHttpServer())
                .post('/projects')
                .set('Authorization', mockAuthToken)
                .send({
                    name: 'Test Project',
                    description: 'A test project for E2E testing',
                })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe('Test Project');
            testProjectId = response.body.id;
        });

        it('GET /projects - should return list of projects', async () => {
            const response = await request(app.getHttpServer())
                .get('/projects')
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });

        it('GET /projects/:id - should return a single project', async () => {
            const response = await request(app.getHttpServer())
                .get(`/projects/${testProjectId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(response.body.id).toBe(testProjectId);
            expect(response.body.name).toBe('Test Project');
        });

        it('GET /projects/:id/stats - should return project stats', async () => {
            const response = await request(app.getHttpServer())
                .get(`/projects/${testProjectId}/stats`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(response.body).toHaveProperty('overallProgress');
            expect(response.body).toHaveProperty('apps');
        });

        it('PUT /projects/:id - should update a project', async () => {
            const response = await request(app.getHttpServer())
                .put(`/projects/${testProjectId}`)
                .set('Authorization', mockAuthToken)
                .send({
                    name: 'Updated Test Project',
                    description: 'Updated description',
                })
                .expect(200);

            expect(response.body.name).toBe('Updated Test Project');
        });
    });

    // ==========================================
    // APPS API
    // ==========================================
    describe('Apps API', () => {
        it('POST /apps - should create a new app', async () => {
            const response = await request(app.getHttpServer())
                .post('/apps')
                .set('Authorization', mockAuthToken)
                .send({
                    name: 'Test App',
                    type: 'WEBSITE',
                    projectId: testProjectId,
                })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe('Test App');
            expect(response.body.type).toBe('WEBSITE');
            testAppId = response.body.id;
        });

        it('GET /apps - should return list of apps for a project', async () => {
            const response = await request(app.getHttpServer())
                .get('/apps')
                .query({ projectId: testProjectId })
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
        });

        it('GET /apps/:id - should return a single app', async () => {
            const response = await request(app.getHttpServer())
                .get(`/apps/${testAppId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(response.body.id).toBe(testAppId);
        });

        it('PUT /apps/:id - should update an app', async () => {
            const response = await request(app.getHttpServer())
                .put(`/apps/${testAppId}`)
                .set('Authorization', mockAuthToken)
                .send({
                    name: 'Updated Test App',
                })
                .expect(200);

            expect(response.body.name).toBe('Updated Test App');
        });
    });

    // ==========================================
    // MODULES API
    // ==========================================
    describe('Modules API', () => {
        it('POST /modules - should create a new module', async () => {
            const response = await request(app.getHttpServer())
                .post('/modules')
                .set('Authorization', mockAuthToken)
                .send({
                    name: 'Test Module',
                    appId: testAppId,
                })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.name).toBe('Test Module');
            testModuleId = response.body.id;
        });

        it('GET /modules - should return list of modules for an app', async () => {
            const response = await request(app.getHttpServer())
                .get('/modules')
                .query({ appId: testAppId })
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });

        it('GET /modules/:id - should return a single module', async () => {
            const response = await request(app.getHttpServer())
                .get(`/modules/${testModuleId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(response.body.id).toBe(testModuleId);
        });

        it('PUT /modules/:id - should update a module', async () => {
            const response = await request(app.getHttpServer())
                .put(`/modules/${testModuleId}`)
                .set('Authorization', mockAuthToken)
                .send({
                    name: 'Updated Test Module',
                })
                .expect(200);

            expect(response.body.name).toBe('Updated Test Module');
        });
    });

    // ==========================================
    // TASKS API
    // ==========================================
    describe('Tasks API', () => {
        it('POST /tasks - should create a new task', async () => {
            const response = await request(app.getHttpServer())
                .post('/tasks')
                .set('Authorization', mockAuthToken)
                .set('x-user-id', testUserId)
                .set('x-user-name', testUserName)
                .send({
                    title: 'Test Task',
                    description: 'Test task description',
                    type: 'FEATURE',
                    priority: 'MEDIUM',
                    moduleId: testModuleId,
                })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.title).toBe('Test Task');
            expect(response.body.type).toBe('FEATURE');
            testTaskId = response.body.id;
        });

        it('POST /tasks - should create a BUG type task', async () => {
            const response = await request(app.getHttpServer())
                .post('/tasks')
                .set('Authorization', mockAuthToken)
                .set('x-user-id', testUserId)
                .set('x-user-name', testUserName)
                .send({
                    title: 'Test Bug',
                    description: 'This is a bug report',
                    type: 'BUG',
                    priority: 'HIGH',
                    moduleId: testModuleId,
                })
                .expect(201);

            expect(response.body.type).toBe('BUG');
        });

        it('GET /tasks - should return list of tasks for a module', async () => {
            const response = await request(app.getHttpServer())
                .get('/tasks')
                .query({ moduleId: testModuleId })
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThanOrEqual(2);
        });

        it('GET /tasks/:id - should return a single task', async () => {
            const response = await request(app.getHttpServer())
                .get(`/tasks/${testTaskId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(response.body.id).toBe(testTaskId);
        });

        it('GET /tasks/:id/history - should return task history', async () => {
            const response = await request(app.getHttpServer())
                .get(`/tasks/${testTaskId}/history`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });

        it('PUT /tasks/:id - should update a task', async () => {
            const response = await request(app.getHttpServer())
                .put(`/tasks/${testTaskId}`)
                .set('Authorization', mockAuthToken)
                .set('x-user-id', testUserId)
                .set('x-user-name', testUserName)
                .send({
                    title: 'Updated Test Task',
                    priority: 'HIGH',
                })
                .expect(200);

            expect(response.body.title).toBe('Updated Test Task');
            expect(response.body.priority).toBe('HIGH');
        });

        it('PATCH /tasks/:id/status - should update task status', async () => {
            const response = await request(app.getHttpServer())
                .patch(`/tasks/${testTaskId}/status`)
                .set('Authorization', mockAuthToken)
                .set('x-user-id', testUserId)
                .set('x-user-name', testUserName)
                .send({
                    status: 'IN_PROGRESS',
                })
                .expect(200);

            expect(response.body.status).toBe('IN_PROGRESS');
        });

        it('POST /tasks/reorder - should reorder tasks', async () => {
            const response = await request(app.getHttpServer())
                .post('/tasks/reorder')
                .set('Authorization', mockAuthToken)
                .send({
                    moduleId: testModuleId,
                    taskIds: [testTaskId],
                })
                .expect(201);

            expect(response.body).toHaveProperty('count');
        });
    });

    // ==========================================
    // COMMENTS API
    // ==========================================
    describe('Comments API', () => {
        it('POST /comments - should create a new comment', async () => {
            const response = await request(app.getHttpServer())
                .post('/comments')
                .set('Authorization', mockAuthToken)
                .send({
                    content: 'This is a test comment',
                    authorId: testUserId,
                    authorName: testUserName,
                    taskId: testTaskId,
                })
                .expect(201);

            expect(response.body).toHaveProperty('id');
            expect(response.body.content).toBe('This is a test comment');
            testCommentId = response.body.id;
        });

        it('GET /comments/task/:taskId - should return comments for a task', async () => {
            const response = await request(app.getHttpServer())
                .get(`/comments/task/${testTaskId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
            expect(response.body.length).toBeGreaterThan(0);
        });

        it('DELETE /comments/:id - should delete a comment', async () => {
            await request(app.getHttpServer())
                .delete(`/comments/${testCommentId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);
        });
    });

    // ==========================================
    // ACTIVITY API
    // ==========================================
    describe('Activity API', () => {
        it('GET /projects/:projectId/activity - should return project activity', async () => {
            const response = await request(app.getHttpServer())
                .get(`/projects/${testProjectId}/activity`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });

        it('GET /tasks/:taskId/activity - should return task activity', async () => {
            const response = await request(app.getHttpServer())
                .get(`/tasks/${testTaskId}/activity`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });

        it('GET /users/:userId/activity - should return user activity', async () => {
            const response = await request(app.getHttpServer())
                .get(`/users/${testUserId}/activity`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    // ==========================================
    // PROJECT MEMBERS API
    // ==========================================
    describe('Project Members API', () => {
        it('GET /project-members/:projectId - should return project members', async () => {
            const response = await request(app.getHttpServer())
                .get(`/project-members/${testProjectId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    // ==========================================
    // USERS API
    // ==========================================
    describe('Users API', () => {
        it('GET /users/search - should search for users', async () => {
            const response = await request(app.getHttpServer())
                .get('/users/search')
                .query({ q: 'test' })
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    // ==========================================
    // USER VISITS API
    // ==========================================
    describe('User Visits API', () => {
        it('POST /user-visits/record - should record a visit', async () => {
            const response = await request(app.getHttpServer())
                .post('/user-visits/record')
                .set('Authorization', mockAuthToken)
                .send({
                    projectId: testProjectId,
                    projectName: 'Test Project',
                    viewType: 'list',
                })
                .expect(201);

            expect(response.body).toHaveProperty('id');
        });

        it('GET /user-visits/recent - should return recent visits', async () => {
            const response = await request(app.getHttpServer())
                .get('/user-visits/recent')
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });
    });

    // ==========================================
    // USER STARRED API
    // ==========================================
    describe('User Starred API', () => {
        it('POST /user-starred/toggle - should toggle star on a project', async () => {
            const response = await request(app.getHttpServer())
                .post('/user-starred/toggle')
                .set('Authorization', mockAuthToken)
                .send({
                    projectId: testProjectId,
                    projectName: 'Test Project',
                })
                .expect(201);

            expect(response.body).toHaveProperty('starred');
        });

        it('GET /user-starred - should return starred projects', async () => {
            const response = await request(app.getHttpServer())
                .get('/user-starred')
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });

        it('GET /user-starred/is-starred/:projectId - should check if project is starred', async () => {
            const response = await request(app.getHttpServer())
                .get(`/user-starred/is-starred/${testProjectId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(typeof response.body.isStarred).toBe('boolean');
        });
    });

    // ==========================================
    // NOTIFICATIONS API
    // ==========================================
    describe('Notifications API', () => {
        it('GET /notifications - should return user notifications', async () => {
            const response = await request(app.getHttpServer())
                .get('/notifications')
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(Array.isArray(response.body)).toBe(true);
        });

        it('GET /notifications/unread-count - should return unread count', async () => {
            const response = await request(app.getHttpServer())
                .get('/notifications/unread-count')
                .set('Authorization', mockAuthToken)
                .expect(200);

            expect(response.body).toHaveProperty('count');
            expect(typeof response.body.count).toBe('number');
        });
    });

    // ==========================================
    // CLEANUP - Delete test data
    // ==========================================
    describe('Cleanup', () => {
        it('DELETE /tasks/:id - should delete a task', async () => {
            await request(app.getHttpServer())
                .delete(`/tasks/${testTaskId}`)
                .set('Authorization', mockAuthToken)
                .set('x-user-id', testUserId)
                .set('x-user-name', testUserName)
                .expect(200);
        });

        it('DELETE /modules/:id - should delete a module', async () => {
            await request(app.getHttpServer())
                .delete(`/modules/${testModuleId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);
        });

        it('DELETE /apps/:id - should delete an app', async () => {
            await request(app.getHttpServer())
                .delete(`/apps/${testAppId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);
        });

        it('DELETE /projects/:id - should delete a project', async () => {
            await request(app.getHttpServer())
                .delete(`/projects/${testProjectId}`)
                .set('Authorization', mockAuthToken)
                .expect(200);

            // Clear the ID so afterAll doesn't try to delete again
            testProjectId = '';
        });
    });

    // ==========================================
    // ERROR HANDLING TESTS
    // ==========================================
    describe('Error Handling', () => {
        it('GET /projects/:id - should return 404 for non-existent project', async () => {
            await request(app.getHttpServer())
                .get('/projects/non-existent-id')
                .set('Authorization', mockAuthToken)
                .expect(404);
        });

        it('POST /projects - should return 400 for invalid data', async () => {
            await request(app.getHttpServer())
                .post('/projects')
                .set('Authorization', mockAuthToken)
                .send({})
                .expect(400);
        });

        it('POST /tasks - should return 400 for missing required fields', async () => {
            await request(app.getHttpServer())
                .post('/tasks')
                .set('Authorization', mockAuthToken)
                .send({
                    title: 'Task without moduleId',
                })
                .expect(400);
        });
    });
});
