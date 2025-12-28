
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
