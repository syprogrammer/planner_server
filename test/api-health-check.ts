/**
 * Simple API Health Check Script
 * 
 * Run this script to quickly verify all API endpoints are responding.
 * This is a lightweight alternative to full E2E tests.
 * 
 * Usage: npx ts-node test/api-health-check.ts
 * 
 * Requirements:
 * - Backend server must be running on http://localhost:3001
 * - You need to have a valid JWT token (update AUTH_TOKEN below)
 */

const API_BASE_URL = process.env.API_URL || 'http://localhost:3001';

// Replace with a valid JWT token for your test user
const AUTH_TOKEN = 'Bearer YOUR_JWT_TOKEN_HERE';

interface TestResult {
    endpoint: string;
    method: string;
    status: 'PASS' | 'FAIL' | 'SKIP';
    statusCode?: number;
    message?: string;
}

const results: TestResult[] = [];

async function testEndpoint(
    method: string,
    endpoint: string,
    options: {
        body?: object;
        expectedStatus?: number;
        skipAuth?: boolean;
    } = {}
): Promise<TestResult> {
    const { body, expectedStatus = 200, skipAuth = false } = options;

    try {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (!skipAuth) {
            headers['Authorization'] = AUTH_TOKEN;
        }

        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            method,
            headers,
            body: body ? JSON.stringify(body) : undefined,
        });

        const isExpectedStatus = response.status === expectedStatus ||
            (expectedStatus === 200 && response.status === 201);

        return {
            endpoint,
            method,
            status: isExpectedStatus ? 'PASS' : 'FAIL',
            statusCode: response.status,
            message: isExpectedStatus ? undefined : `Expected ${expectedStatus}, got ${response.status}`,
        };
    } catch (error) {
        return {
            endpoint,
            method,
            status: 'FAIL',
            message: error instanceof Error ? error.message : 'Unknown error',
        };
    }
}

async function runHealthCheck() {
    console.log('🏥 API Health Check');
    console.log('==================');
    console.log(`Base URL: ${API_BASE_URL}`);
    console.log('');

    // Health Check
    console.log('📍 Health Check...');
    results.push(await testEndpoint('GET', '/', { skipAuth: true }));

    // Projects
    console.log('📁 Testing Projects API...');
    results.push(await testEndpoint('GET', '/projects'));

    // Apps (requires a project ID, so we'll check if endpoint responds)
    console.log('📱 Testing Apps API...');
    results.push(await testEndpoint('GET', '/apps?projectId=test'));

    // Modules
    console.log('📦 Testing Modules API...');
    results.push(await testEndpoint('GET', '/modules?appId=test'));

    // Tasks
    console.log('✅ Testing Tasks API...');
    results.push(await testEndpoint('GET', '/tasks?moduleId=test'));

    // Comments
    console.log('💬 Testing Comments API...');
    results.push(await testEndpoint('GET', '/comments/task/test'));

    // Notifications
    console.log('🔔 Testing Notifications API...');
    results.push(await testEndpoint('GET', '/notifications'));
    results.push(await testEndpoint('GET', '/notifications/unread-count'));

    // User Visits
    console.log('👁️ Testing User Visits API...');
    results.push(await testEndpoint('GET', '/user-visits/recent'));

    // User Starred
    console.log('⭐ Testing User Starred API...');
    results.push(await testEndpoint('GET', '/user-starred'));

    // Users
    console.log('👤 Testing Users API...');
    results.push(await testEndpoint('GET', '/users/search?q=test'));

    // Print Results
    console.log('');
    console.log('📊 Results');
    console.log('==========');

    let passed = 0;
    let failed = 0;
    let skipped = 0;

    results.forEach((result) => {
        const icon = result.status === 'PASS' ? '✅' : result.status === 'FAIL' ? '❌' : '⏭️';
        const statusStr = result.statusCode ? `[${result.statusCode}]` : '';
        console.log(`${icon} ${result.method} ${result.endpoint} ${statusStr} ${result.message || ''}`);

        if (result.status === 'PASS') passed++;
        else if (result.status === 'FAIL') failed++;
        else skipped++;
    });

    console.log('');
    console.log(`Summary: ${passed} passed, ${failed} failed, ${skipped} skipped`);
    console.log('');

    if (failed > 0) {
        console.log('⚠️  Some tests failed. Check the output above for details.');
        process.exit(1);
    } else {
        console.log('🎉 All API endpoints are responding!');
    }
}

// Run the health check
runHealthCheck().catch(console.error);
