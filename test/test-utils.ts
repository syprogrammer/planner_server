import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

/**
 * Test Utilities for E2E Tests
 */

// Test user data
export const TEST_USER = {
    userId: 'test-user-id-12345',
    email: 'test@example.com',
    userName: 'Test User',
};

// Headers for authenticated requests
export const getAuthHeaders = (userId?: string, userName?: string) => ({
    'x-user-id': userId || TEST_USER.userId,
    'x-user-name': userName || TEST_USER.userName,
});

/**
 * Creates a mock JWT token for testing
 * Note: For actual testing, you may need to:
 * 1. Create a real test user in the database
 * 2. Use actual JWT signing with your secret
 */
export const createMockJwtToken = (jwtService: JwtService, userId: string = TEST_USER.userId) => {
    const payload = {
        sub: userId,
        email: TEST_USER.email,
    };

    return jwtService.sign(payload);
};

/**
 * Creates a test project for use in tests
 */
export const createTestProject = () => ({
    name: `Test Project ${Date.now()}`,
    description: 'Auto-generated test project',
});

/**
 * Creates a test app for use in tests
 */
export const createTestApp = (projectId: string) => ({
    name: `Test App ${Date.now()}`,
    type: 'WEBSITE' as const,
    projectId,
});

/**
 * Creates a test module for use in tests
 */
export const createTestModule = (appId: string) => ({
    name: `Test Module ${Date.now()}`,
    appId,
});

/**
 * Creates a test task for use in tests
 */
export const createTestTask = (moduleId: string, type: 'FEATURE' | 'BUG' | 'IMPROVEMENT' = 'FEATURE') => ({
    title: `Test Task ${Date.now()}`,
    description: 'Auto-generated test task',
    type,
    priority: 'MEDIUM' as const,
    moduleId,
});

/**
 * Creates a test comment for use in tests
 */
export const createTestComment = (taskId: string) => ({
    content: `Test Comment ${Date.now()}`,
    authorId: TEST_USER.userId,
    authorName: TEST_USER.userName,
    taskId,
});

/**
 * Wait utility for async operations
 */
export const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Response validators
 */
export const expectValidProject = (project: any) => {
    expect(project).toHaveProperty('id');
    expect(project).toHaveProperty('name');
    expect(project).toHaveProperty('createdAt');
};

export const expectValidApp = (app: any) => {
    expect(app).toHaveProperty('id');
    expect(app).toHaveProperty('name');
    expect(app).toHaveProperty('type');
    expect(app).toHaveProperty('projectId');
};

export const expectValidModule = (module: any) => {
    expect(module).toHaveProperty('id');
    expect(module).toHaveProperty('name');
    expect(module).toHaveProperty('appId');
};

export const expectValidTask = (task: any) => {
    expect(task).toHaveProperty('id');
    expect(task).toHaveProperty('title');
    expect(task).toHaveProperty('type');
    expect(task).toHaveProperty('status');
    expect(task).toHaveProperty('priority');
    expect(task).toHaveProperty('moduleId');
};

export const expectValidComment = (comment: any) => {
    expect(comment).toHaveProperty('id');
    expect(comment).toHaveProperty('content');
    expect(comment).toHaveProperty('authorId');
    expect(comment).toHaveProperty('authorName');
};
