
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.1.0
 * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
 */
Prisma.prismaVersion = {
  client: "6.1.0",
  engine: "11f085a2012c0f4778414c8db2651556ee0ef959"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.OrganizationScalarFieldEnum = {
  id: 'id',
  clerkOrgId: 'clerkOrgId',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrganizationMemberScalarFieldEnum = {
  id: 'id',
  clerkUserId: 'clerkUserId',
  organizationId: 'organizationId',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.ProjectScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  organizationId: 'organizationId',
  clientOrgId: 'clientOrgId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  creatorName: 'creatorName'
};

exports.Prisma.ProjectMemberScalarFieldEnum = {
  id: 'id',
  projectId: 'projectId',
  clerkUserId: 'clerkUserId',
  name: 'name',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.AppScalarFieldEnum = {
  id: 'id',
  name: 'name',
  type: 'type',
  icon: 'icon',
  projectId: 'projectId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  creatorName: 'creatorName'
};

exports.Prisma.ModuleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  appId: 'appId',
  order: 'order',
  taskCounter: 'taskCounter',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.TaskScalarFieldEnum = {
  id: 'id',
  taskCode: 'taskCode',
  title: 'title',
  description: 'description',
  type: 'type',
  priority: 'priority',
  status: 'status',
  assignedTo: 'assignedTo',
  remarks: 'remarks',
  startDate: 'startDate',
  endDate: 'endDate',
  parentId: 'parentId',
  moduleId: 'moduleId',
  order: 'order',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  creatorName: 'creatorName',
  reporterId: 'reporterId',
  reporterName: 'reporterName'
};

exports.Prisma.TaskHistoryScalarFieldEnum = {
  id: 'id',
  taskId: 'taskId',
  actorId: 'actorId',
  actorName: 'actorName',
  field: 'field',
  oldValue: 'oldValue',
  newValue: 'newValue',
  createdAt: 'createdAt'
};

exports.Prisma.BugSheetScalarFieldEnum = {
  id: 'id',
  module: 'module',
  description: 'description',
  status: 'status',
  priority: 'priority',
  assignedTo: 'assignedTo',
  remarks: 'remarks',
  appId: 'appId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  createdBy: 'createdBy',
  creatorName: 'creatorName'
};

exports.Prisma.CommentScalarFieldEnum = {
  id: 'id',
  content: 'content',
  authorId: 'authorId',
  authorName: 'authorName',
  taskId: 'taskId',
  bugSheetId: 'bugSheetId',
  createdAt: 'createdAt'
};

exports.Prisma.ActivityLogScalarFieldEnum = {
  id: 'id',
  action: 'action',
  field: 'field',
  oldValue: 'oldValue',
  newValue: 'newValue',
  userId: 'userId',
  userName: 'userName',
  entityType: 'entityType',
  entityId: 'entityId',
  entityTitle: 'entityTitle',
  projectId: 'projectId',
  createdAt: 'createdAt'
};

exports.Prisma.UserVisitScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  projectId: 'projectId',
  projectName: 'projectName',
  appId: 'appId',
  appName: 'appName',
  viewType: 'viewType',
  visitedAt: 'visitedAt'
};

exports.Prisma.UserStarredScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  projectId: 'projectId',
  projectName: 'projectName',
  appId: 'appId',
  appName: 'appName',
  createdAt: 'createdAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  message: 'message',
  read: 'read',
  projectId: 'projectId',
  taskId: 'taskId',
  commentId: 'commentId',
  actorId: 'actorId',
  actorName: 'actorName',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  VIEWER: 'VIEWER'
};

exports.AppType = exports.$Enums.AppType = {
  WEBSITE: 'WEBSITE',
  MOBILE: 'MOBILE',
  API: 'API',
  BUG_TRACKING: 'BUG_TRACKING',
  CUSTOM: 'CUSTOM'
};

exports.TaskType = exports.$Enums.TaskType = {
  FEATURE: 'FEATURE',
  BUG: 'BUG',
  IMPROVEMENT: 'IMPROVEMENT'
};

exports.Priority = exports.$Enums.Priority = {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

exports.Status = exports.$Enums.Status = {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_REVIEW: 'IN_REVIEW',
  DONE: 'DONE'
};

exports.ActivityAction = exports.$Enums.ActivityAction = {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  DELETED: 'DELETED',
  STATUS_CHANGED: 'STATUS_CHANGED',
  ASSIGNED: 'ASSIGNED',
  UNASSIGNED: 'UNASSIGNED',
  COMMENTED: 'COMMENTED',
  PRIORITY_CHANGED: 'PRIORITY_CHANGED'
};

exports.EntityType = exports.$Enums.EntityType = {
  TASK: 'TASK',
  BUGSHEET: 'BUGSHEET',
  PROJECT: 'PROJECT',
  MODULE: 'MODULE'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  MENTION: 'MENTION',
  ASSIGNMENT: 'ASSIGNMENT',
  STATUS_CHANGE: 'STATUS_CHANGE',
  COMMENT: 'COMMENT'
};

exports.Prisma.ModelName = {
  Organization: 'Organization',
  OrganizationMember: 'OrganizationMember',
  Project: 'Project',
  ProjectMember: 'ProjectMember',
  App: 'App',
  Module: 'Module',
  Task: 'Task',
  TaskHistory: 'TaskHistory',
  BugSheet: 'BugSheet',
  Comment: 'Comment',
  ActivityLog: 'ActivityLog',
  UserVisit: 'UserVisit',
  UserStarred: 'UserStarred',
  Notification: 'Notification'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\lenovo\\Desktop\\preparations\\product\\planner\\backend\\src\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "moduleFormat": "cjs",
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      },
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x"
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\lenovo\\Desktop\\preparations\\product\\planner\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.1.0",
  "engineVersion": "11f085a2012c0f4778414c8db2651556ee0ef959",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../src/generated/prisma\"\n  moduleFormat    = \"cjs\" // Required for NestJS (CommonJS)\n  binaryTargets   = [\"native\", \"debian-openssl-3.0.x\"]\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// ============= ORGANIZATION & USERS =============\n\nmodel Organization {\n  id         String               @id @default(cuid())\n  clerkOrgId String               @unique // Clerk Organization ID\n  name       String\n  createdAt  DateTime             @default(now())\n  updatedAt  DateTime             @updatedAt\n  projects   Project[]\n  members    OrganizationMember[]\n}\n\nmodel OrganizationMember {\n  id             String       @id @default(cuid())\n  clerkUserId    String\n  organizationId String\n  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)\n  role           Role         @default(MEMBER)\n  createdAt      DateTime     @default(now())\n\n  @@unique([clerkUserId, organizationId])\n}\n\nenum Role {\n  ADMIN\n  MEMBER\n  VIEWER\n}\n\n// ============= PROJECTS =============\n\nmodel Project {\n  id             String       @id @default(cuid())\n  name           String\n  description    String?\n  organizationId String\n  organization   Organization @relation(fields: [organizationId], references: [id], onDelete: Cascade)\n  clientOrgId    String? // Client's Clerk Org ID for read-only access\n  createdAt      DateTime     @default(now())\n  updatedAt      DateTime     @updatedAt\n\n  createdBy   String? // Clerk User ID\n  creatorName String?\n\n  apps         App[]\n  members      ProjectMember[]\n  activityLogs ActivityLog[]\n  userVisits   UserVisit[]\n  userStarred  UserStarred[]\n}\n\nmodel ProjectMember {\n  id          String   @id @default(cuid())\n  projectId   String\n  project     Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  clerkUserId String\n  name        String\n  role        Role     @default(MEMBER)\n  createdAt   DateTime @default(now())\n\n  @@unique([projectId, clerkUserId])\n}\n\n// ============= APPS =============\n\nmodel App {\n  id        String   @id @default(cuid())\n  name      String\n  type      AppType\n  icon      String? // Custom icon name\n  projectId String\n  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  createdBy   String?\n  creatorName String?\n\n  modules   Module[]\n  bugSheets BugSheet[]\n}\n\nenum AppType {\n  WEBSITE\n  MOBILE\n  API\n  BUG_TRACKING\n  CUSTOM\n}\n\n// ============= MODULES/PAGES =============\n\nmodel Module {\n  id          String   @id @default(cuid())\n  name        String\n  appId       String\n  app         App      @relation(fields: [appId], references: [id], onDelete: Cascade)\n  order       Int      @default(0)\n  taskCounter Int      @default(0) // Tracks the next task number for generating taskCodes\n  createdAt   DateTime @default(now())\n  updatedAt   DateTime @updatedAt\n  tasks       Task[]\n}\n\n// ============= TASKS =============\n\nmodel Task {\n  id          String   @id @default(cuid())\n  taskCode    String? // Persistent task code like \"HOM-1\" or \"HOM-1.1\"\n  title       String\n  description String?\n  type        TaskType @default(FEATURE)\n  priority    Priority @default(MEDIUM)\n  status      Status   @default(TODO)\n\n  // Assignment\n  assignedTo String?\n  remarks    String?\n\n  // Dates\n  startDate DateTime?\n  endDate   DateTime?\n\n  // Parent-child relation for subtasks\n  parentId String?\n  parent   Task?   @relation(\"Subtasks\", fields: [parentId], references: [id], onDelete: Cascade)\n  subtasks Task[]  @relation(\"Subtasks\")\n\n  // Relations\n  moduleId String\n  module   Module    @relation(fields: [moduleId], references: [id], onDelete: Cascade)\n  comments Comment[]\n\n  order     Int      @default(0)\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  // Auditing\n  createdBy   String? // Clerk User ID\n  creatorName String?\n\n  reporterId   String? // Clerk User ID (Reporter)\n  reporterName String?\n\n  history TaskHistory[]\n}\n\nmodel TaskHistory {\n  id        String   @id @default(cuid())\n  taskId    String\n  task      Task     @relation(fields: [taskId], references: [id], onDelete: Cascade)\n  actorId   String // Who made the change (Clerk User ID)\n  actorName String\n  field     String // e.g., \"status\", \"assignee\", \"priority\"\n  oldValue  String?\n  newValue  String?\n  createdAt DateTime @default(now())\n}\n\nmodel BugSheet {\n  id          String   @id @default(cuid())\n  module      String\n  description String\n  status      Status   @default(TODO)\n  priority    Priority @default(MEDIUM)\n  assignedTo  String?\n  remarks     String?\n\n  appId String\n  app   App    @relation(fields: [appId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime  @default(now())\n  updatedAt DateTime  @updatedAt\n  comments  Comment[]\n\n  // Auditing\n  createdBy   String?\n  creatorName String?\n}\n\nenum TaskType {\n  FEATURE\n  BUG\n  IMPROVEMENT\n}\n\nenum Priority {\n  LOW\n  MEDIUM\n  HIGH\n  URGENT\n}\n\nenum Status {\n  TODO\n  IN_PROGRESS\n  IN_REVIEW\n  DONE\n}\n\n// ============= COMMENTS =============\n\nmodel Comment {\n  id         String @id @default(cuid())\n  content    String\n  authorId   String // Clerk User ID\n  authorName String\n\n  // Polymorphic relation - Task OR BugSheet\n  taskId     String?\n  task       Task?     @relation(fields: [taskId], references: [id], onDelete: Cascade)\n  bugSheetId String?\n  bugSheet   BugSheet? @relation(fields: [bugSheetId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n}\n\n// ============= ACTIVITY LOG =============\n\nmodel ActivityLog {\n  id String @id @default(cuid())\n\n  // What happened\n  action   ActivityAction\n  field    String? // Field that was changed (e.g., \"status\", \"assignee\")\n  oldValue String? // Previous value\n  newValue String? // New value\n\n  // Who did it\n  userId   String // Clerk User ID\n  userName String // User display name\n\n  // What entity was affected\n  entityType  EntityType\n  entityId    String // Task ID or BugSheet ID\n  entityTitle String // Task/Bug title for display\n\n  // Context\n  projectId String\n  project   Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n\n  createdAt DateTime @default(now())\n\n  @@index([projectId, createdAt])\n  @@index([entityType, entityId])\n  @@index([userId])\n}\n\nenum ActivityAction {\n  CREATED\n  UPDATED\n  DELETED\n  STATUS_CHANGED\n  ASSIGNED\n  UNASSIGNED\n  COMMENTED\n  PRIORITY_CHANGED\n}\n\nenum EntityType {\n  TASK\n  BUGSHEET\n  PROJECT\n  MODULE\n}\n\n// ============= USER VISITS =============\n\nmodel UserVisit {\n  id     String @id @default(cuid())\n  userId String // Clerk User ID\n\n  // What was visited\n  projectId   String\n  project     Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  projectName String // Denormalized for quick display\n  appId       String?\n  appName     String? // Denormalized for quick display\n  viewType    String? // 'list', 'board', 'summary', 'bugsheet'\n\n  visitedAt DateTime @default(now())\n\n  @@index([userId, visitedAt])\n  @@index([projectId])\n}\n\n// ============= USER STARRED =============\n\nmodel UserStarred {\n  id     String @id @default(cuid())\n  userId String // Clerk User ID\n\n  projectId   String\n  project     Project @relation(fields: [projectId], references: [id], onDelete: Cascade)\n  projectName String // Denormalized\n  appId       String?\n  appName     String? // Denormalized\n\n  createdAt DateTime @default(now())\n\n  @@unique([userId, projectId, appId])\n  @@index([userId])\n}\n\n// ============= NOTIFICATIONS =============\n\nenum NotificationType {\n  MENTION\n  ASSIGNMENT\n  STATUS_CHANGE\n  COMMENT\n}\n\nmodel Notification {\n  id      String           @id @default(cuid())\n  userId  String // Recipient Clerk User ID\n  type    NotificationType\n  title   String\n  message String\n  read    Boolean          @default(false)\n\n  // Context\n  projectId String?\n  taskId    String?\n  commentId String?\n  actorId   String // Who triggered the notification\n  actorName String\n\n  createdAt DateTime @default(now())\n\n  @@index([userId, read])\n  @@index([userId, createdAt])\n}\n",
  "inlineSchemaHash": "fbae8090607a85fe22d4b7bcee3678c4bfd432151f6f57b160a35a59a17f4e10",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Organization\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"clerkOrgId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"projects\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"OrganizationToProject\"},{\"name\":\"members\",\"kind\":\"object\",\"type\":\"OrganizationMember\",\"relationName\":\"OrganizationToOrganizationMember\"}],\"dbName\":null},\"OrganizationMember\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"clerkUserId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"OrganizationToOrganizationMember\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Project\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organizationId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"organization\",\"kind\":\"object\",\"type\":\"Organization\",\"relationName\":\"OrganizationToProject\"},{\"name\":\"clientOrgId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creatorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"apps\",\"kind\":\"object\",\"type\":\"App\",\"relationName\":\"AppToProject\"},{\"name\":\"members\",\"kind\":\"object\",\"type\":\"ProjectMember\",\"relationName\":\"ProjectToProjectMember\"},{\"name\":\"activityLogs\",\"kind\":\"object\",\"type\":\"ActivityLog\",\"relationName\":\"ActivityLogToProject\"},{\"name\":\"userVisits\",\"kind\":\"object\",\"type\":\"UserVisit\",\"relationName\":\"ProjectToUserVisit\"},{\"name\":\"userStarred\",\"kind\":\"object\",\"type\":\"UserStarred\",\"relationName\":\"ProjectToUserStarred\"}],\"dbName\":null},\"ProjectMember\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToProjectMember\"},{\"name\":\"clerkUserId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"App\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"AppType\"},{\"name\":\"icon\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"AppToProject\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creatorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"modules\",\"kind\":\"object\",\"type\":\"Module\",\"relationName\":\"AppToModule\"},{\"name\":\"bugSheets\",\"kind\":\"object\",\"type\":\"BugSheet\",\"relationName\":\"AppToBugSheet\"}],\"dbName\":null},\"Module\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"app\",\"kind\":\"object\",\"type\":\"App\",\"relationName\":\"AppToModule\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"taskCounter\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"tasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"ModuleToTask\"}],\"dbName\":null},\"Task\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"taskCode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"TaskType\"},{\"name\":\"priority\",\"kind\":\"enum\",\"type\":\"Priority\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"assignedTo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"remarks\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"startDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"endDate\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"parentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"parent\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"Subtasks\"},{\"name\":\"subtasks\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"Subtasks\"},{\"name\":\"moduleId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"module\",\"kind\":\"object\",\"type\":\"Module\",\"relationName\":\"ModuleToTask\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"Comment\",\"relationName\":\"CommentToTask\"},{\"name\":\"order\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creatorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"reporterId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"reporterName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"history\",\"kind\":\"object\",\"type\":\"TaskHistory\",\"relationName\":\"TaskToTaskHistory\"}],\"dbName\":null},\"TaskHistory\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"taskId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"task\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"TaskToTaskHistory\"},{\"name\":\"actorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"actorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"field\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"oldValue\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"newValue\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"BugSheet\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"module\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"Status\"},{\"name\":\"priority\",\"kind\":\"enum\",\"type\":\"Priority\"},{\"name\":\"assignedTo\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"remarks\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"app\",\"kind\":\"object\",\"type\":\"App\",\"relationName\":\"AppToBugSheet\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"comments\",\"kind\":\"object\",\"type\":\"Comment\",\"relationName\":\"BugSheetToComment\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"creatorName\",\"kind\":\"scalar\",\"type\":\"String\"}],\"dbName\":null},\"Comment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"content\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"authorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"authorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"taskId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"task\",\"kind\":\"object\",\"type\":\"Task\",\"relationName\":\"CommentToTask\"},{\"name\":\"bugSheetId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"bugSheet\",\"kind\":\"object\",\"type\":\"BugSheet\",\"relationName\":\"BugSheetToComment\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"ActivityLog\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"action\",\"kind\":\"enum\",\"type\":\"ActivityAction\"},{\"name\":\"field\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"oldValue\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"newValue\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"entityType\",\"kind\":\"enum\",\"type\":\"EntityType\"},{\"name\":\"entityId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"entityTitle\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ActivityLogToProject\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"UserVisit\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToUserVisit\"},{\"name\":\"projectName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"viewType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"visitedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"UserStarred\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"project\",\"kind\":\"object\",\"type\":\"Project\",\"relationName\":\"ProjectToUserStarred\"},{\"name\":\"projectName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"appName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Notification\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"NotificationType\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"read\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"projectId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"taskId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"commentId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"actorId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"actorName\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

