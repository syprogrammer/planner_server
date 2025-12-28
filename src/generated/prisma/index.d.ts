
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model OrganizationMember
 * 
 */
export type OrganizationMember = $Result.DefaultSelection<Prisma.$OrganizationMemberPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model ProjectMember
 * 
 */
export type ProjectMember = $Result.DefaultSelection<Prisma.$ProjectMemberPayload>
/**
 * Model App
 * 
 */
export type App = $Result.DefaultSelection<Prisma.$AppPayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskHistory
 * 
 */
export type TaskHistory = $Result.DefaultSelection<Prisma.$TaskHistoryPayload>
/**
 * Model BugSheet
 * 
 */
export type BugSheet = $Result.DefaultSelection<Prisma.$BugSheetPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model UserVisit
 * 
 */
export type UserVisit = $Result.DefaultSelection<Prisma.$UserVisitPayload>
/**
 * Model UserStarred
 * 
 */
export type UserStarred = $Result.DefaultSelection<Prisma.$UserStarredPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER',
  VIEWER: 'VIEWER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AppType: {
  WEBSITE: 'WEBSITE',
  MOBILE: 'MOBILE',
  API: 'API',
  BUG_TRACKING: 'BUG_TRACKING',
  CUSTOM: 'CUSTOM'
};

export type AppType = (typeof AppType)[keyof typeof AppType]


export const TaskType: {
  FEATURE: 'FEATURE',
  BUG: 'BUG',
  IMPROVEMENT: 'IMPROVEMENT'
};

export type TaskType = (typeof TaskType)[keyof typeof TaskType]


export const Priority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  URGENT: 'URGENT'
};

export type Priority = (typeof Priority)[keyof typeof Priority]


export const Status: {
  TODO: 'TODO',
  IN_PROGRESS: 'IN_PROGRESS',
  IN_REVIEW: 'IN_REVIEW',
  DONE: 'DONE'
};

export type Status = (typeof Status)[keyof typeof Status]


export const ActivityAction: {
  CREATED: 'CREATED',
  UPDATED: 'UPDATED',
  DELETED: 'DELETED',
  STATUS_CHANGED: 'STATUS_CHANGED',
  ASSIGNED: 'ASSIGNED',
  UNASSIGNED: 'UNASSIGNED',
  COMMENTED: 'COMMENTED',
  PRIORITY_CHANGED: 'PRIORITY_CHANGED'
};

export type ActivityAction = (typeof ActivityAction)[keyof typeof ActivityAction]


export const EntityType: {
  TASK: 'TASK',
  BUGSHEET: 'BUGSHEET',
  PROJECT: 'PROJECT',
  MODULE: 'MODULE'
};

export type EntityType = (typeof EntityType)[keyof typeof EntityType]


export const NotificationType: {
  MENTION: 'MENTION',
  ASSIGNMENT: 'ASSIGNMENT',
  STATUS_CHANGE: 'STATUS_CHANGE',
  COMMENT: 'COMMENT'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AppType = $Enums.AppType

export const AppType: typeof $Enums.AppType

export type TaskType = $Enums.TaskType

export const TaskType: typeof $Enums.TaskType

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type ActivityAction = $Enums.ActivityAction

export const ActivityAction: typeof $Enums.ActivityAction

export type EntityType = $Enums.EntityType

export const EntityType: typeof $Enums.EntityType

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs>;

  /**
   * `prisma.organizationMember`: Exposes CRUD operations for the **OrganizationMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrganizationMembers
    * const organizationMembers = await prisma.organizationMember.findMany()
    * ```
    */
  get organizationMember(): Prisma.OrganizationMemberDelegate<ExtArgs>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs>;

  /**
   * `prisma.projectMember`: Exposes CRUD operations for the **ProjectMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProjectMembers
    * const projectMembers = await prisma.projectMember.findMany()
    * ```
    */
  get projectMember(): Prisma.ProjectMemberDelegate<ExtArgs>;

  /**
   * `prisma.app`: Exposes CRUD operations for the **App** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apps
    * const apps = await prisma.app.findMany()
    * ```
    */
  get app(): Prisma.AppDelegate<ExtArgs>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.taskHistory`: Exposes CRUD operations for the **TaskHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskHistories
    * const taskHistories = await prisma.taskHistory.findMany()
    * ```
    */
  get taskHistory(): Prisma.TaskHistoryDelegate<ExtArgs>;

  /**
   * `prisma.bugSheet`: Exposes CRUD operations for the **BugSheet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BugSheets
    * const bugSheets = await prisma.bugSheet.findMany()
    * ```
    */
  get bugSheet(): Prisma.BugSheetDelegate<ExtArgs>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs>;

  /**
   * `prisma.userVisit`: Exposes CRUD operations for the **UserVisit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserVisits
    * const userVisits = await prisma.userVisit.findMany()
    * ```
    */
  get userVisit(): Prisma.UserVisitDelegate<ExtArgs>;

  /**
   * `prisma.userStarred`: Exposes CRUD operations for the **UserStarred** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserStarreds
    * const userStarreds = await prisma.userStarred.findMany()
    * ```
    */
  get userStarred(): Prisma.UserStarredDelegate<ExtArgs>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "organization" | "organizationMember" | "project" | "projectMember" | "app" | "module" | "task" | "taskHistory" | "bugSheet" | "comment" | "activityLog" | "userVisit" | "userStarred" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      OrganizationMember: {
        payload: Prisma.$OrganizationMemberPayload<ExtArgs>
        fields: Prisma.OrganizationMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findFirst: {
            args: Prisma.OrganizationMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          findMany: {
            args: Prisma.OrganizationMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          create: {
            args: Prisma.OrganizationMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          createMany: {
            args: Prisma.OrganizationMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>[]
          }
          delete: {
            args: Prisma.OrganizationMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          update: {
            args: Prisma.OrganizationMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationMemberPayload>
          }
          aggregate: {
            args: Prisma.OrganizationMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganizationMember>
          }
          groupBy: {
            args: Prisma.OrganizationMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationMemberCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationMemberCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      ProjectMember: {
        payload: Prisma.$ProjectMemberPayload<ExtArgs>
        fields: Prisma.ProjectMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findFirst: {
            args: Prisma.ProjectMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          findMany: {
            args: Prisma.ProjectMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          create: {
            args: Prisma.ProjectMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          createMany: {
            args: Prisma.ProjectMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>[]
          }
          delete: {
            args: Prisma.ProjectMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          update: {
            args: Prisma.ProjectMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          deleteMany: {
            args: Prisma.ProjectMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProjectMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectMemberPayload>
          }
          aggregate: {
            args: Prisma.ProjectMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjectMember>
          }
          groupBy: {
            args: Prisma.ProjectMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectMemberCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectMemberCountAggregateOutputType> | number
          }
        }
      }
      App: {
        payload: Prisma.$AppPayload<ExtArgs>
        fields: Prisma.AppFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          findFirst: {
            args: Prisma.AppFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          findMany: {
            args: Prisma.AppFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>[]
          }
          create: {
            args: Prisma.AppCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          createMany: {
            args: Prisma.AppCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>[]
          }
          delete: {
            args: Prisma.AppDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          update: {
            args: Prisma.AppUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          deleteMany: {
            args: Prisma.AppDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppPayload>
          }
          aggregate: {
            args: Prisma.AppAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApp>
          }
          groupBy: {
            args: Prisma.AppGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppCountArgs<ExtArgs>
            result: $Utils.Optional<AppCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskHistory: {
        payload: Prisma.$TaskHistoryPayload<ExtArgs>
        fields: Prisma.TaskHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findFirst: {
            args: Prisma.TaskHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findMany: {
            args: Prisma.TaskHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          create: {
            args: Prisma.TaskHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          createMany: {
            args: Prisma.TaskHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          delete: {
            args: Prisma.TaskHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          update: {
            args: Prisma.TaskHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TaskHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TaskHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          aggregate: {
            args: Prisma.TaskHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskHistory>
          }
          groupBy: {
            args: Prisma.TaskHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryCountAggregateOutputType> | number
          }
        }
      }
      BugSheet: {
        payload: Prisma.$BugSheetPayload<ExtArgs>
        fields: Prisma.BugSheetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BugSheetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BugSheetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>
          }
          findFirst: {
            args: Prisma.BugSheetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BugSheetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>
          }
          findMany: {
            args: Prisma.BugSheetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>[]
          }
          create: {
            args: Prisma.BugSheetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>
          }
          createMany: {
            args: Prisma.BugSheetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BugSheetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>[]
          }
          delete: {
            args: Prisma.BugSheetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>
          }
          update: {
            args: Prisma.BugSheetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>
          }
          deleteMany: {
            args: Prisma.BugSheetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BugSheetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BugSheetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BugSheetPayload>
          }
          aggregate: {
            args: Prisma.BugSheetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBugSheet>
          }
          groupBy: {
            args: Prisma.BugSheetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BugSheetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BugSheetCountArgs<ExtArgs>
            result: $Utils.Optional<BugSheetCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      UserVisit: {
        payload: Prisma.$UserVisitPayload<ExtArgs>
        fields: Prisma.UserVisitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserVisitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserVisitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>
          }
          findFirst: {
            args: Prisma.UserVisitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserVisitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>
          }
          findMany: {
            args: Prisma.UserVisitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>[]
          }
          create: {
            args: Prisma.UserVisitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>
          }
          createMany: {
            args: Prisma.UserVisitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserVisitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>[]
          }
          delete: {
            args: Prisma.UserVisitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>
          }
          update: {
            args: Prisma.UserVisitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>
          }
          deleteMany: {
            args: Prisma.UserVisitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserVisitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserVisitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserVisitPayload>
          }
          aggregate: {
            args: Prisma.UserVisitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserVisit>
          }
          groupBy: {
            args: Prisma.UserVisitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserVisitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserVisitCountArgs<ExtArgs>
            result: $Utils.Optional<UserVisitCountAggregateOutputType> | number
          }
        }
      }
      UserStarred: {
        payload: Prisma.$UserStarredPayload<ExtArgs>
        fields: Prisma.UserStarredFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserStarredFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserStarredFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>
          }
          findFirst: {
            args: Prisma.UserStarredFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserStarredFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>
          }
          findMany: {
            args: Prisma.UserStarredFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>[]
          }
          create: {
            args: Prisma.UserStarredCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>
          }
          createMany: {
            args: Prisma.UserStarredCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserStarredCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>[]
          }
          delete: {
            args: Prisma.UserStarredDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>
          }
          update: {
            args: Prisma.UserStarredUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>
          }
          deleteMany: {
            args: Prisma.UserStarredDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserStarredUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserStarredUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserStarredPayload>
          }
          aggregate: {
            args: Prisma.UserStarredAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserStarred>
          }
          groupBy: {
            args: Prisma.UserStarredGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserStarredGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserStarredCountArgs<ExtArgs>
            result: $Utils.Optional<UserStarredCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    projects: number
    members: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | OrganizationCountOutputTypeCountProjectsArgs
    members?: boolean | OrganizationCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    apps: number
    members: number
    activityLogs: number
    userVisits: number
    userStarred: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apps?: boolean | ProjectCountOutputTypeCountAppsArgs
    members?: boolean | ProjectCountOutputTypeCountMembersArgs
    activityLogs?: boolean | ProjectCountOutputTypeCountActivityLogsArgs
    userVisits?: boolean | ProjectCountOutputTypeCountUserVisitsArgs
    userStarred?: boolean | ProjectCountOutputTypeCountUserStarredArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountAppsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountActivityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUserVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVisitWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUserStarredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStarredWhereInput
  }


  /**
   * Count Type AppCountOutputType
   */

  export type AppCountOutputType = {
    modules: number
    bugSheets: number
  }

  export type AppCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | AppCountOutputTypeCountModulesArgs
    bugSheets?: boolean | AppCountOutputTypeCountBugSheetsArgs
  }

  // Custom InputTypes
  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppCountOutputType
     */
    select?: AppCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * AppCountOutputType without action
   */
  export type AppCountOutputTypeCountBugSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BugSheetWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    tasks: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | ModuleCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    subtasks: number
    comments: number
    history: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subtasks?: boolean | TaskCountOutputTypeCountSubtasksArgs
    comments?: boolean | TaskCountOutputTypeCountCommentsArgs
    history?: boolean | TaskCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountSubtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
  }


  /**
   * Count Type BugSheetCountOutputType
   */

  export type BugSheetCountOutputType = {
    comments: number
  }

  export type BugSheetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | BugSheetCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * BugSheetCountOutputType without action
   */
  export type BugSheetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheetCountOutputType
     */
    select?: BugSheetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BugSheetCountOutputType without action
   */
  export type BugSheetCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    clerkOrgId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    clerkOrgId: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    clerkOrgId: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    clerkOrgId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    clerkOrgId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    clerkOrgId?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    clerkOrgId: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkOrgId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projects?: boolean | Organization$projectsArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkOrgId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    clerkOrgId?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | Organization$projectsArgs<ExtArgs>
    members?: boolean | Organization$membersArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      members: Prisma.$OrganizationMemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkOrgId: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends Organization$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany"> | Null>
    members<T extends Organization$membersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */ 
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly clerkOrgId: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
  }

  /**
   * Organization.projects
   */
  export type Organization$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Organization.members
   */
  export type Organization$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    cursor?: OrganizationMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model OrganizationMember
   */

  export type AggregateOrganizationMember = {
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  export type OrganizationMemberMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    organizationId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type OrganizationMemberMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    organizationId: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type OrganizationMemberCountAggregateOutputType = {
    id: number
    clerkUserId: number
    organizationId: number
    role: number
    createdAt: number
    _all: number
  }


  export type OrganizationMemberMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    organizationId?: true
    role?: true
    createdAt?: true
  }

  export type OrganizationMemberMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    organizationId?: true
    role?: true
    createdAt?: true
  }

  export type OrganizationMemberCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    organizationId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type OrganizationMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMember to aggregate.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrganizationMembers
    **/
    _count?: true | OrganizationMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type GetOrganizationMemberAggregateType<T extends OrganizationMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganizationMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganizationMember[P]>
      : GetScalarType<T[P], AggregateOrganizationMember[P]>
  }




  export type OrganizationMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationMemberWhereInput
    orderBy?: OrganizationMemberOrderByWithAggregationInput | OrganizationMemberOrderByWithAggregationInput[]
    by: OrganizationMemberScalarFieldEnum[] | OrganizationMemberScalarFieldEnum
    having?: OrganizationMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationMemberCountAggregateInputType | true
    _min?: OrganizationMemberMinAggregateInputType
    _max?: OrganizationMemberMaxAggregateInputType
  }

  export type OrganizationMemberGroupByOutputType = {
    id: string
    clerkUserId: string
    organizationId: string
    role: $Enums.Role
    createdAt: Date
    _count: OrganizationMemberCountAggregateOutputType | null
    _min: OrganizationMemberMinAggregateOutputType | null
    _max: OrganizationMemberMaxAggregateOutputType | null
  }

  type GetOrganizationMemberGroupByPayload<T extends OrganizationMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationMemberGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organizationMember"]>

  export type OrganizationMemberSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    organizationId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type OrganizationMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OrganizationMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OrganizationMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrganizationMember"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      organizationId: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["organizationMember"]>
    composites: {}
  }

  type OrganizationMemberGetPayload<S extends boolean | null | undefined | OrganizationMemberDefaultArgs> = $Result.GetResult<Prisma.$OrganizationMemberPayload, S>

  type OrganizationMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrganizationMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrganizationMemberCountAggregateInputType | true
    }

  export interface OrganizationMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrganizationMember'], meta: { name: 'OrganizationMember' } }
    /**
     * Find zero or one OrganizationMember that matches the filter.
     * @param {OrganizationMemberFindUniqueArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationMemberFindUniqueArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OrganizationMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OrganizationMemberFindUniqueOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OrganizationMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationMemberFindFirstArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OrganizationMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindFirstOrThrowArgs} args - Arguments to find a OrganizationMember
     * @example
     * // Get one OrganizationMember
     * const organizationMember = await prisma.organizationMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OrganizationMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany()
     * 
     * // Get first 10 OrganizationMembers
     * const organizationMembers = await prisma.organizationMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationMemberFindManyArgs>(args?: SelectSubset<T, OrganizationMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OrganizationMember.
     * @param {OrganizationMemberCreateArgs} args - Arguments to create a OrganizationMember.
     * @example
     * // Create one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.create({
     *   data: {
     *     // ... data to create a OrganizationMember
     *   }
     * })
     * 
     */
    create<T extends OrganizationMemberCreateArgs>(args: SelectSubset<T, OrganizationMemberCreateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OrganizationMembers.
     * @param {OrganizationMemberCreateManyArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationMemberCreateManyArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrganizationMembers and returns the data saved in the database.
     * @param {OrganizationMemberCreateManyAndReturnArgs} args - Arguments to create many OrganizationMembers.
     * @example
     * // Create many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrganizationMembers and only return the `id`
     * const organizationMemberWithIdOnly = await prisma.organizationMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OrganizationMember.
     * @param {OrganizationMemberDeleteArgs} args - Arguments to delete one OrganizationMember.
     * @example
     * // Delete one OrganizationMember
     * const OrganizationMember = await prisma.organizationMember.delete({
     *   where: {
     *     // ... filter to delete one OrganizationMember
     *   }
     * })
     * 
     */
    delete<T extends OrganizationMemberDeleteArgs>(args: SelectSubset<T, OrganizationMemberDeleteArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OrganizationMember.
     * @param {OrganizationMemberUpdateArgs} args - Arguments to update one OrganizationMember.
     * @example
     * // Update one OrganizationMember
     * const organizationMember = await prisma.organizationMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationMemberUpdateArgs>(args: SelectSubset<T, OrganizationMemberUpdateArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OrganizationMembers.
     * @param {OrganizationMemberDeleteManyArgs} args - Arguments to filter OrganizationMembers to delete.
     * @example
     * // Delete a few OrganizationMembers
     * const { count } = await prisma.organizationMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationMemberDeleteManyArgs>(args?: SelectSubset<T, OrganizationMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrganizationMembers
     * const organizationMember = await prisma.organizationMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationMemberUpdateManyArgs>(args: SelectSubset<T, OrganizationMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrganizationMember.
     * @param {OrganizationMemberUpsertArgs} args - Arguments to update or create a OrganizationMember.
     * @example
     * // Update or create a OrganizationMember
     * const organizationMember = await prisma.organizationMember.upsert({
     *   create: {
     *     // ... data to create a OrganizationMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrganizationMember we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationMemberUpsertArgs>(args: SelectSubset<T, OrganizationMemberUpsertArgs<ExtArgs>>): Prisma__OrganizationMemberClient<$Result.GetResult<Prisma.$OrganizationMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OrganizationMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberCountArgs} args - Arguments to filter OrganizationMembers to count.
     * @example
     * // Count the number of OrganizationMembers
     * const count = await prisma.organizationMember.count({
     *   where: {
     *     // ... the filter for the OrganizationMembers we want to count
     *   }
     * })
    **/
    count<T extends OrganizationMemberCountArgs>(
      args?: Subset<T, OrganizationMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationMemberAggregateArgs>(args: Subset<T, OrganizationMemberAggregateArgs>): Prisma.PrismaPromise<GetOrganizationMemberAggregateType<T>>

    /**
     * Group by OrganizationMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationMemberGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrganizationMember model
   */
  readonly fields: OrganizationMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrganizationMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrganizationMember model
   */ 
  interface OrganizationMemberFieldRefs {
    readonly id: FieldRef<"OrganizationMember", 'String'>
    readonly clerkUserId: FieldRef<"OrganizationMember", 'String'>
    readonly organizationId: FieldRef<"OrganizationMember", 'String'>
    readonly role: FieldRef<"OrganizationMember", 'Role'>
    readonly createdAt: FieldRef<"OrganizationMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrganizationMember findUnique
   */
  export type OrganizationMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findUniqueOrThrow
   */
  export type OrganizationMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember findFirst
   */
  export type OrganizationMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findFirstOrThrow
   */
  export type OrganizationMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMember to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrganizationMembers.
     */
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember findMany
   */
  export type OrganizationMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter, which OrganizationMembers to fetch.
     */
    where?: OrganizationMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrganizationMembers to fetch.
     */
    orderBy?: OrganizationMemberOrderByWithRelationInput | OrganizationMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrganizationMembers.
     */
    cursor?: OrganizationMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrganizationMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrganizationMembers.
     */
    skip?: number
    distinct?: OrganizationMemberScalarFieldEnum | OrganizationMemberScalarFieldEnum[]
  }

  /**
   * OrganizationMember create
   */
  export type OrganizationMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a OrganizationMember.
     */
    data: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
  }

  /**
   * OrganizationMember createMany
   */
  export type OrganizationMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrganizationMember createManyAndReturn
   */
  export type OrganizationMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OrganizationMembers.
     */
    data: OrganizationMemberCreateManyInput | OrganizationMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrganizationMember update
   */
  export type OrganizationMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a OrganizationMember.
     */
    data: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
    /**
     * Choose, which OrganizationMember to update.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember updateMany
   */
  export type OrganizationMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrganizationMembers.
     */
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyInput>
    /**
     * Filter which OrganizationMembers to update
     */
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationMember upsert
   */
  export type OrganizationMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the OrganizationMember to update in case it exists.
     */
    where: OrganizationMemberWhereUniqueInput
    /**
     * In case the OrganizationMember found by the `where` argument doesn't exist, create a new OrganizationMember with this data.
     */
    create: XOR<OrganizationMemberCreateInput, OrganizationMemberUncheckedCreateInput>
    /**
     * In case the OrganizationMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationMemberUpdateInput, OrganizationMemberUncheckedUpdateInput>
  }

  /**
   * OrganizationMember delete
   */
  export type OrganizationMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
    /**
     * Filter which OrganizationMember to delete.
     */
    where: OrganizationMemberWhereUniqueInput
  }

  /**
   * OrganizationMember deleteMany
   */
  export type OrganizationMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrganizationMembers to delete
     */
    where?: OrganizationMemberWhereInput
  }

  /**
   * OrganizationMember without action
   */
  export type OrganizationMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationMember
     */
    select?: OrganizationMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationMemberInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    organizationId: string | null
    clientOrgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    organizationId: string | null
    clientOrgId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    organizationId: number
    clientOrgId: number
    createdAt: number
    updatedAt: number
    createdBy: number
    creatorName: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    clientOrgId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    clientOrgId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    organizationId?: true
    clientOrgId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string | null
    organizationId: string
    clientOrgId: string | null
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    creatorName: string | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    clientOrgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    apps?: boolean | Project$appsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    activityLogs?: boolean | Project$activityLogsArgs<ExtArgs>
    userVisits?: boolean | Project$userVisitsArgs<ExtArgs>
    userStarred?: boolean | Project$userStarredArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    clientOrgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    organizationId?: boolean
    clientOrgId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
  }

  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    apps?: boolean | Project$appsArgs<ExtArgs>
    members?: boolean | Project$membersArgs<ExtArgs>
    activityLogs?: boolean | Project$activityLogsArgs<ExtArgs>
    userVisits?: boolean | Project$userVisitsArgs<ExtArgs>
    userStarred?: boolean | Project$userStarredArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      apps: Prisma.$AppPayload<ExtArgs>[]
      members: Prisma.$ProjectMemberPayload<ExtArgs>[]
      activityLogs: Prisma.$ActivityLogPayload<ExtArgs>[]
      userVisits: Prisma.$UserVisitPayload<ExtArgs>[]
      userStarred: Prisma.$UserStarredPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      organizationId: string
      clientOrgId: string | null
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      creatorName: string | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    apps<T extends Project$appsArgs<ExtArgs> = {}>(args?: Subset<T, Project$appsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findMany"> | Null>
    members<T extends Project$membersArgs<ExtArgs> = {}>(args?: Subset<T, Project$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany"> | Null>
    activityLogs<T extends Project$activityLogsArgs<ExtArgs> = {}>(args?: Subset<T, Project$activityLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany"> | Null>
    userVisits<T extends Project$userVisitsArgs<ExtArgs> = {}>(args?: Subset<T, Project$userVisitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "findMany"> | Null>
    userStarred<T extends Project$userStarredArgs<ExtArgs> = {}>(args?: Subset<T, Project$userStarredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly organizationId: FieldRef<"Project", 'String'>
    readonly clientOrgId: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly createdBy: FieldRef<"Project", 'String'>
    readonly creatorName: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
  }

  /**
   * Project.apps
   */
  export type Project$appsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    where?: AppWhereInput
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    cursor?: AppWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * Project.members
   */
  export type Project$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    cursor?: ProjectMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * Project.activityLogs
   */
  export type Project$activityLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Project.userVisits
   */
  export type Project$userVisitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    where?: UserVisitWhereInput
    orderBy?: UserVisitOrderByWithRelationInput | UserVisitOrderByWithRelationInput[]
    cursor?: UserVisitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserVisitScalarFieldEnum | UserVisitScalarFieldEnum[]
  }

  /**
   * Project.userStarred
   */
  export type Project$userStarredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    where?: UserStarredWhereInput
    orderBy?: UserStarredOrderByWithRelationInput | UserStarredOrderByWithRelationInput[]
    cursor?: UserStarredWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserStarredScalarFieldEnum | UserStarredScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model ProjectMember
   */

  export type AggregateProjectMember = {
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  export type ProjectMemberMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    clerkUserId: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type ProjectMemberMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    clerkUserId: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type ProjectMemberCountAggregateOutputType = {
    id: number
    projectId: number
    clerkUserId: number
    name: number
    role: number
    createdAt: number
    _all: number
  }


  export type ProjectMemberMinAggregateInputType = {
    id?: true
    projectId?: true
    clerkUserId?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type ProjectMemberMaxAggregateInputType = {
    id?: true
    projectId?: true
    clerkUserId?: true
    name?: true
    role?: true
    createdAt?: true
  }

  export type ProjectMemberCountAggregateInputType = {
    id?: true
    projectId?: true
    clerkUserId?: true
    name?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type ProjectMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMember to aggregate.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProjectMembers
    **/
    _count?: true | ProjectMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type GetProjectMemberAggregateType<T extends ProjectMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateProjectMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjectMember[P]>
      : GetScalarType<T[P], AggregateProjectMember[P]>
  }




  export type ProjectMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectMemberWhereInput
    orderBy?: ProjectMemberOrderByWithAggregationInput | ProjectMemberOrderByWithAggregationInput[]
    by: ProjectMemberScalarFieldEnum[] | ProjectMemberScalarFieldEnum
    having?: ProjectMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectMemberCountAggregateInputType | true
    _min?: ProjectMemberMinAggregateInputType
    _max?: ProjectMemberMaxAggregateInputType
  }

  export type ProjectMemberGroupByOutputType = {
    id: string
    projectId: string
    clerkUserId: string
    name: string
    role: $Enums.Role
    createdAt: Date
    _count: ProjectMemberCountAggregateOutputType | null
    _min: ProjectMemberMinAggregateOutputType | null
    _max: ProjectMemberMaxAggregateOutputType | null
  }

  type GetProjectMemberGroupByPayload<T extends ProjectMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectMemberGroupByOutputType[P]>
        }
      >
    >


  export type ProjectMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    clerkUserId?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    clerkUserId?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["projectMember"]>

  export type ProjectMemberSelectScalar = {
    id?: boolean
    projectId?: boolean
    clerkUserId?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type ProjectMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ProjectMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ProjectMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProjectMember"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      clerkUserId: string
      name: string
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["projectMember"]>
    composites: {}
  }

  type ProjectMemberGetPayload<S extends boolean | null | undefined | ProjectMemberDefaultArgs> = $Result.GetResult<Prisma.$ProjectMemberPayload, S>

  type ProjectMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProjectMemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProjectMemberCountAggregateInputType | true
    }

  export interface ProjectMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProjectMember'], meta: { name: 'ProjectMember' } }
    /**
     * Find zero or one ProjectMember that matches the filter.
     * @param {ProjectMemberFindUniqueArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectMemberFindUniqueArgs>(args: SelectSubset<T, ProjectMemberFindUniqueArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProjectMember that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProjectMemberFindUniqueOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProjectMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectMemberFindFirstArgs>(args?: SelectSubset<T, ProjectMemberFindFirstArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProjectMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindFirstOrThrowArgs} args - Arguments to find a ProjectMember
     * @example
     * // Get one ProjectMember
     * const projectMember = await prisma.projectMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProjectMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany()
     * 
     * // Get first 10 ProjectMembers
     * const projectMembers = await prisma.projectMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectMemberFindManyArgs>(args?: SelectSubset<T, ProjectMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProjectMember.
     * @param {ProjectMemberCreateArgs} args - Arguments to create a ProjectMember.
     * @example
     * // Create one ProjectMember
     * const ProjectMember = await prisma.projectMember.create({
     *   data: {
     *     // ... data to create a ProjectMember
     *   }
     * })
     * 
     */
    create<T extends ProjectMemberCreateArgs>(args: SelectSubset<T, ProjectMemberCreateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProjectMembers.
     * @param {ProjectMemberCreateManyArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectMemberCreateManyArgs>(args?: SelectSubset<T, ProjectMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProjectMembers and returns the data saved in the database.
     * @param {ProjectMemberCreateManyAndReturnArgs} args - Arguments to create many ProjectMembers.
     * @example
     * // Create many ProjectMembers
     * const projectMember = await prisma.projectMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProjectMembers and only return the `id`
     * const projectMemberWithIdOnly = await prisma.projectMember.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ProjectMember.
     * @param {ProjectMemberDeleteArgs} args - Arguments to delete one ProjectMember.
     * @example
     * // Delete one ProjectMember
     * const ProjectMember = await prisma.projectMember.delete({
     *   where: {
     *     // ... filter to delete one ProjectMember
     *   }
     * })
     * 
     */
    delete<T extends ProjectMemberDeleteArgs>(args: SelectSubset<T, ProjectMemberDeleteArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProjectMember.
     * @param {ProjectMemberUpdateArgs} args - Arguments to update one ProjectMember.
     * @example
     * // Update one ProjectMember
     * const projectMember = await prisma.projectMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectMemberUpdateArgs>(args: SelectSubset<T, ProjectMemberUpdateArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProjectMembers.
     * @param {ProjectMemberDeleteManyArgs} args - Arguments to filter ProjectMembers to delete.
     * @example
     * // Delete a few ProjectMembers
     * const { count } = await prisma.projectMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectMemberDeleteManyArgs>(args?: SelectSubset<T, ProjectMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProjectMembers
     * const projectMember = await prisma.projectMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectMemberUpdateManyArgs>(args: SelectSubset<T, ProjectMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProjectMember.
     * @param {ProjectMemberUpsertArgs} args - Arguments to update or create a ProjectMember.
     * @example
     * // Update or create a ProjectMember
     * const projectMember = await prisma.projectMember.upsert({
     *   create: {
     *     // ... data to create a ProjectMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProjectMember we want to update
     *   }
     * })
     */
    upsert<T extends ProjectMemberUpsertArgs>(args: SelectSubset<T, ProjectMemberUpsertArgs<ExtArgs>>): Prisma__ProjectMemberClient<$Result.GetResult<Prisma.$ProjectMemberPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ProjectMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberCountArgs} args - Arguments to filter ProjectMembers to count.
     * @example
     * // Count the number of ProjectMembers
     * const count = await prisma.projectMember.count({
     *   where: {
     *     // ... the filter for the ProjectMembers we want to count
     *   }
     * })
    **/
    count<T extends ProjectMemberCountArgs>(
      args?: Subset<T, ProjectMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectMemberAggregateArgs>(args: Subset<T, ProjectMemberAggregateArgs>): Prisma.PrismaPromise<GetProjectMemberAggregateType<T>>

    /**
     * Group by ProjectMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectMemberGroupByArgs['orderBy'] }
        : { orderBy?: ProjectMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProjectMember model
   */
  readonly fields: ProjectMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProjectMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProjectMember model
   */ 
  interface ProjectMemberFieldRefs {
    readonly id: FieldRef<"ProjectMember", 'String'>
    readonly projectId: FieldRef<"ProjectMember", 'String'>
    readonly clerkUserId: FieldRef<"ProjectMember", 'String'>
    readonly name: FieldRef<"ProjectMember", 'String'>
    readonly role: FieldRef<"ProjectMember", 'Role'>
    readonly createdAt: FieldRef<"ProjectMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProjectMember findUnique
   */
  export type ProjectMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findUniqueOrThrow
   */
  export type ProjectMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember findFirst
   */
  export type ProjectMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findFirstOrThrow
   */
  export type ProjectMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMember to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProjectMembers.
     */
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember findMany
   */
  export type ProjectMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter, which ProjectMembers to fetch.
     */
    where?: ProjectMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProjectMembers to fetch.
     */
    orderBy?: ProjectMemberOrderByWithRelationInput | ProjectMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProjectMembers.
     */
    cursor?: ProjectMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProjectMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProjectMembers.
     */
    skip?: number
    distinct?: ProjectMemberScalarFieldEnum | ProjectMemberScalarFieldEnum[]
  }

  /**
   * ProjectMember create
   */
  export type ProjectMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a ProjectMember.
     */
    data: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
  }

  /**
   * ProjectMember createMany
   */
  export type ProjectMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProjectMember createManyAndReturn
   */
  export type ProjectMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ProjectMembers.
     */
    data: ProjectMemberCreateManyInput | ProjectMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProjectMember update
   */
  export type ProjectMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a ProjectMember.
     */
    data: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
    /**
     * Choose, which ProjectMember to update.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember updateMany
   */
  export type ProjectMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProjectMembers.
     */
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyInput>
    /**
     * Filter which ProjectMembers to update
     */
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectMember upsert
   */
  export type ProjectMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the ProjectMember to update in case it exists.
     */
    where: ProjectMemberWhereUniqueInput
    /**
     * In case the ProjectMember found by the `where` argument doesn't exist, create a new ProjectMember with this data.
     */
    create: XOR<ProjectMemberCreateInput, ProjectMemberUncheckedCreateInput>
    /**
     * In case the ProjectMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectMemberUpdateInput, ProjectMemberUncheckedUpdateInput>
  }

  /**
   * ProjectMember delete
   */
  export type ProjectMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
    /**
     * Filter which ProjectMember to delete.
     */
    where: ProjectMemberWhereUniqueInput
  }

  /**
   * ProjectMember deleteMany
   */
  export type ProjectMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProjectMembers to delete
     */
    where?: ProjectMemberWhereInput
  }

  /**
   * ProjectMember without action
   */
  export type ProjectMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectMember
     */
    select?: ProjectMemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectMemberInclude<ExtArgs> | null
  }


  /**
   * Model App
   */

  export type AggregateApp = {
    _count: AppCountAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  export type AppMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AppType | null
    icon: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
  }

  export type AppMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.AppType | null
    icon: string | null
    projectId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
  }

  export type AppCountAggregateOutputType = {
    id: number
    name: number
    type: number
    icon: number
    projectId: number
    createdAt: number
    updatedAt: number
    createdBy: number
    creatorName: number
    _all: number
  }


  export type AppMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    icon?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
  }

  export type AppMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    icon?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
  }

  export type AppCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    icon?: true
    projectId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
    _all?: true
  }

  export type AppAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which App to aggregate.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apps
    **/
    _count?: true | AppCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppMaxAggregateInputType
  }

  export type GetAppAggregateType<T extends AppAggregateArgs> = {
        [P in keyof T & keyof AggregateApp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApp[P]>
      : GetScalarType<T[P], AggregateApp[P]>
  }




  export type AppGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppWhereInput
    orderBy?: AppOrderByWithAggregationInput | AppOrderByWithAggregationInput[]
    by: AppScalarFieldEnum[] | AppScalarFieldEnum
    having?: AppScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppCountAggregateInputType | true
    _min?: AppMinAggregateInputType
    _max?: AppMaxAggregateInputType
  }

  export type AppGroupByOutputType = {
    id: string
    name: string
    type: $Enums.AppType
    icon: string | null
    projectId: string
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    creatorName: string | null
    _count: AppCountAggregateOutputType | null
    _min: AppMinAggregateOutputType | null
    _max: AppMaxAggregateOutputType | null
  }

  type GetAppGroupByPayload<T extends AppGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppGroupByOutputType[P]>
            : GetScalarType<T[P], AppGroupByOutputType[P]>
        }
      >
    >


  export type AppSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    icon?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    modules?: boolean | App$modulesArgs<ExtArgs>
    bugSheets?: boolean | App$bugSheetsArgs<ExtArgs>
    _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["app"]>

  export type AppSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    icon?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["app"]>

  export type AppSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    icon?: boolean
    projectId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
  }

  export type AppInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    modules?: boolean | App$modulesArgs<ExtArgs>
    bugSheets?: boolean | App$bugSheetsArgs<ExtArgs>
    _count?: boolean | AppCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AppIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $AppPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "App"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      modules: Prisma.$ModulePayload<ExtArgs>[]
      bugSheets: Prisma.$BugSheetPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.AppType
      icon: string | null
      projectId: string
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      creatorName: string | null
    }, ExtArgs["result"]["app"]>
    composites: {}
  }

  type AppGetPayload<S extends boolean | null | undefined | AppDefaultArgs> = $Result.GetResult<Prisma.$AppPayload, S>

  type AppCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppCountAggregateInputType | true
    }

  export interface AppDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['App'], meta: { name: 'App' } }
    /**
     * Find zero or one App that matches the filter.
     * @param {AppFindUniqueArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppFindUniqueArgs>(args: SelectSubset<T, AppFindUniqueArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one App that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppFindUniqueOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppFindUniqueOrThrowArgs>(args: SelectSubset<T, AppFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first App that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppFindFirstArgs>(args?: SelectSubset<T, AppFindFirstArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first App that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindFirstOrThrowArgs} args - Arguments to find a App
     * @example
     * // Get one App
     * const app = await prisma.app.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppFindFirstOrThrowArgs>(args?: SelectSubset<T, AppFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Apps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apps
     * const apps = await prisma.app.findMany()
     * 
     * // Get first 10 Apps
     * const apps = await prisma.app.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appWithIdOnly = await prisma.app.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppFindManyArgs>(args?: SelectSubset<T, AppFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a App.
     * @param {AppCreateArgs} args - Arguments to create a App.
     * @example
     * // Create one App
     * const App = await prisma.app.create({
     *   data: {
     *     // ... data to create a App
     *   }
     * })
     * 
     */
    create<T extends AppCreateArgs>(args: SelectSubset<T, AppCreateArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Apps.
     * @param {AppCreateManyArgs} args - Arguments to create many Apps.
     * @example
     * // Create many Apps
     * const app = await prisma.app.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppCreateManyArgs>(args?: SelectSubset<T, AppCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apps and returns the data saved in the database.
     * @param {AppCreateManyAndReturnArgs} args - Arguments to create many Apps.
     * @example
     * // Create many Apps
     * const app = await prisma.app.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apps and only return the `id`
     * const appWithIdOnly = await prisma.app.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppCreateManyAndReturnArgs>(args?: SelectSubset<T, AppCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a App.
     * @param {AppDeleteArgs} args - Arguments to delete one App.
     * @example
     * // Delete one App
     * const App = await prisma.app.delete({
     *   where: {
     *     // ... filter to delete one App
     *   }
     * })
     * 
     */
    delete<T extends AppDeleteArgs>(args: SelectSubset<T, AppDeleteArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one App.
     * @param {AppUpdateArgs} args - Arguments to update one App.
     * @example
     * // Update one App
     * const app = await prisma.app.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUpdateArgs>(args: SelectSubset<T, AppUpdateArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Apps.
     * @param {AppDeleteManyArgs} args - Arguments to filter Apps to delete.
     * @example
     * // Delete a few Apps
     * const { count } = await prisma.app.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppDeleteManyArgs>(args?: SelectSubset<T, AppDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apps
     * const app = await prisma.app.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUpdateManyArgs>(args: SelectSubset<T, AppUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one App.
     * @param {AppUpsertArgs} args - Arguments to update or create a App.
     * @example
     * // Update or create a App
     * const app = await prisma.app.upsert({
     *   create: {
     *     // ... data to create a App
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the App we want to update
     *   }
     * })
     */
    upsert<T extends AppUpsertArgs>(args: SelectSubset<T, AppUpsertArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Apps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppCountArgs} args - Arguments to filter Apps to count.
     * @example
     * // Count the number of Apps
     * const count = await prisma.app.count({
     *   where: {
     *     // ... the filter for the Apps we want to count
     *   }
     * })
    **/
    count<T extends AppCountArgs>(
      args?: Subset<T, AppCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppAggregateArgs>(args: Subset<T, AppAggregateArgs>): Prisma.PrismaPromise<GetAppAggregateType<T>>

    /**
     * Group by App.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppGroupByArgs['orderBy'] }
        : { orderBy?: AppGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the App model
   */
  readonly fields: AppFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for App.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    modules<T extends App$modulesArgs<ExtArgs> = {}>(args?: Subset<T, App$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany"> | Null>
    bugSheets<T extends App$bugSheetsArgs<ExtArgs> = {}>(args?: Subset<T, App$bugSheetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the App model
   */ 
  interface AppFieldRefs {
    readonly id: FieldRef<"App", 'String'>
    readonly name: FieldRef<"App", 'String'>
    readonly type: FieldRef<"App", 'AppType'>
    readonly icon: FieldRef<"App", 'String'>
    readonly projectId: FieldRef<"App", 'String'>
    readonly createdAt: FieldRef<"App", 'DateTime'>
    readonly updatedAt: FieldRef<"App", 'DateTime'>
    readonly createdBy: FieldRef<"App", 'String'>
    readonly creatorName: FieldRef<"App", 'String'>
  }
    

  // Custom InputTypes
  /**
   * App findUnique
   */
  export type AppFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App findUniqueOrThrow
   */
  export type AppFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App findFirst
   */
  export type AppFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App findFirstOrThrow
   */
  export type AppFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which App to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apps.
     */
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App findMany
   */
  export type AppFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter, which Apps to fetch.
     */
    where?: AppWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apps to fetch.
     */
    orderBy?: AppOrderByWithRelationInput | AppOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apps.
     */
    cursor?: AppWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apps.
     */
    skip?: number
    distinct?: AppScalarFieldEnum | AppScalarFieldEnum[]
  }

  /**
   * App create
   */
  export type AppCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * The data needed to create a App.
     */
    data: XOR<AppCreateInput, AppUncheckedCreateInput>
  }

  /**
   * App createMany
   */
  export type AppCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apps.
     */
    data: AppCreateManyInput | AppCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * App createManyAndReturn
   */
  export type AppCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Apps.
     */
    data: AppCreateManyInput | AppCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * App update
   */
  export type AppUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * The data needed to update a App.
     */
    data: XOR<AppUpdateInput, AppUncheckedUpdateInput>
    /**
     * Choose, which App to update.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App updateMany
   */
  export type AppUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apps.
     */
    data: XOR<AppUpdateManyMutationInput, AppUncheckedUpdateManyInput>
    /**
     * Filter which Apps to update
     */
    where?: AppWhereInput
  }

  /**
   * App upsert
   */
  export type AppUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * The filter to search for the App to update in case it exists.
     */
    where: AppWhereUniqueInput
    /**
     * In case the App found by the `where` argument doesn't exist, create a new App with this data.
     */
    create: XOR<AppCreateInput, AppUncheckedCreateInput>
    /**
     * In case the App was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUpdateInput, AppUncheckedUpdateInput>
  }

  /**
   * App delete
   */
  export type AppDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
    /**
     * Filter which App to delete.
     */
    where: AppWhereUniqueInput
  }

  /**
   * App deleteMany
   */
  export type AppDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apps to delete
     */
    where?: AppWhereInput
  }

  /**
   * App.modules
   */
  export type App$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * App.bugSheets
   */
  export type App$bugSheetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    where?: BugSheetWhereInput
    orderBy?: BugSheetOrderByWithRelationInput | BugSheetOrderByWithRelationInput[]
    cursor?: BugSheetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BugSheetScalarFieldEnum | BugSheetScalarFieldEnum[]
  }

  /**
   * App without action
   */
  export type AppDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the App
     */
    select?: AppSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    order: number | null
    taskCounter: number | null
  }

  export type ModuleSumAggregateOutputType = {
    order: number | null
    taskCounter: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    name: string | null
    appId: string | null
    order: number | null
    taskCounter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    appId: string | null
    order: number | null
    taskCounter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    name: number
    appId: number
    order: number
    taskCounter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    order?: true
    taskCounter?: true
  }

  export type ModuleSumAggregateInputType = {
    order?: true
    taskCounter?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    name?: true
    appId?: true
    order?: true
    taskCounter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    name?: true
    appId?: true
    order?: true
    taskCounter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    name?: true
    appId?: true
    order?: true
    taskCounter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    name: string
    appId: string
    order: number
    taskCounter: number
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    appId?: boolean
    order?: boolean
    taskCounter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
    tasks?: boolean | Module$tasksArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    appId?: boolean
    order?: boolean
    taskCounter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    name?: boolean
    appId?: boolean
    order?: boolean
    taskCounter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
    tasks?: boolean | Module$tasksArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      app: Prisma.$AppPayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      appId: string
      order: number
      taskCounter: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    app<T extends AppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppDefaultArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    tasks<T extends Module$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Module$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Module model
   */ 
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly name: FieldRef<"Module", 'String'>
    readonly appId: FieldRef<"Module", 'String'>
    readonly order: FieldRef<"Module", 'Int'>
    readonly taskCounter: FieldRef<"Module", 'Int'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
  }

  /**
   * Module.tasks
   */
  export type Module$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    order: number | null
  }

  export type TaskSumAggregateOutputType = {
    order: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    taskCode: string | null
    title: string | null
    description: string | null
    type: $Enums.TaskType | null
    priority: $Enums.Priority | null
    status: $Enums.Status | null
    assignedTo: string | null
    remarks: string | null
    startDate: Date | null
    endDate: Date | null
    parentId: string | null
    moduleId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
    reporterId: string | null
    reporterName: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    taskCode: string | null
    title: string | null
    description: string | null
    type: $Enums.TaskType | null
    priority: $Enums.Priority | null
    status: $Enums.Status | null
    assignedTo: string | null
    remarks: string | null
    startDate: Date | null
    endDate: Date | null
    parentId: string | null
    moduleId: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
    reporterId: string | null
    reporterName: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    taskCode: number
    title: number
    description: number
    type: number
    priority: number
    status: number
    assignedTo: number
    remarks: number
    startDate: number
    endDate: number
    parentId: number
    moduleId: number
    order: number
    createdAt: number
    updatedAt: number
    createdBy: number
    creatorName: number
    reporterId: number
    reporterName: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    order?: true
  }

  export type TaskSumAggregateInputType = {
    order?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    taskCode?: true
    title?: true
    description?: true
    type?: true
    priority?: true
    status?: true
    assignedTo?: true
    remarks?: true
    startDate?: true
    endDate?: true
    parentId?: true
    moduleId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
    reporterId?: true
    reporterName?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    taskCode?: true
    title?: true
    description?: true
    type?: true
    priority?: true
    status?: true
    assignedTo?: true
    remarks?: true
    startDate?: true
    endDate?: true
    parentId?: true
    moduleId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
    reporterId?: true
    reporterName?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    taskCode?: true
    title?: true
    description?: true
    type?: true
    priority?: true
    status?: true
    assignedTo?: true
    remarks?: true
    startDate?: true
    endDate?: true
    parentId?: true
    moduleId?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
    reporterId?: true
    reporterName?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    taskCode: string | null
    title: string
    description: string | null
    type: $Enums.TaskType
    priority: $Enums.Priority
    status: $Enums.Status
    assignedTo: string | null
    remarks: string | null
    startDate: Date | null
    endDate: Date | null
    parentId: string | null
    moduleId: string
    order: number
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    creatorName: string | null
    reporterId: string | null
    reporterName: string | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskCode?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    remarks?: boolean
    startDate?: boolean
    endDate?: boolean
    parentId?: boolean
    moduleId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    reporterId?: boolean
    reporterName?: boolean
    parent?: boolean | Task$parentArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    history?: boolean | Task$historyArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskCode?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    remarks?: boolean
    startDate?: boolean
    endDate?: boolean
    parentId?: boolean
    moduleId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    reporterId?: boolean
    reporterName?: boolean
    parent?: boolean | Task$parentArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    taskCode?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    priority?: boolean
    status?: boolean
    assignedTo?: boolean
    remarks?: boolean
    startDate?: boolean
    endDate?: boolean
    parentId?: boolean
    moduleId?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    reporterId?: boolean
    reporterName?: boolean
  }

  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Task$parentArgs<ExtArgs>
    subtasks?: boolean | Task$subtasksArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    comments?: boolean | Task$commentsArgs<ExtArgs>
    history?: boolean | Task$historyArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Task$parentArgs<ExtArgs>
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      parent: Prisma.$TaskPayload<ExtArgs> | null
      subtasks: Prisma.$TaskPayload<ExtArgs>[]
      module: Prisma.$ModulePayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
      history: Prisma.$TaskHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskCode: string | null
      title: string
      description: string | null
      type: $Enums.TaskType
      priority: $Enums.Priority
      status: $Enums.Status
      assignedTo: string | null
      remarks: string | null
      startDate: Date | null
      endDate: Date | null
      parentId: string | null
      moduleId: string
      order: number
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      creatorName: string | null
      reporterId: string | null
      reporterName: string | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parent<T extends Task$parentArgs<ExtArgs> = {}>(args?: Subset<T, Task$parentArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subtasks<T extends Task$subtasksArgs<ExtArgs> = {}>(args?: Subset<T, Task$subtasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany"> | Null>
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    comments<T extends Task$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Task$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    history<T extends Task$historyArgs<ExtArgs> = {}>(args?: Subset<T, Task$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly taskCode: FieldRef<"Task", 'String'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly type: FieldRef<"Task", 'TaskType'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly status: FieldRef<"Task", 'Status'>
    readonly assignedTo: FieldRef<"Task", 'String'>
    readonly remarks: FieldRef<"Task", 'String'>
    readonly startDate: FieldRef<"Task", 'DateTime'>
    readonly endDate: FieldRef<"Task", 'DateTime'>
    readonly parentId: FieldRef<"Task", 'String'>
    readonly moduleId: FieldRef<"Task", 'String'>
    readonly order: FieldRef<"Task", 'Int'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly createdBy: FieldRef<"Task", 'String'>
    readonly creatorName: FieldRef<"Task", 'String'>
    readonly reporterId: FieldRef<"Task", 'String'>
    readonly reporterName: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task.parent
   */
  export type Task$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Task.subtasks
   */
  export type Task$subtasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task.comments
   */
  export type Task$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Task.history
   */
  export type Task$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    cursor?: TaskHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskHistory
   */

  export type AggregateTaskHistory = {
    _count: TaskHistoryCountAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  export type TaskHistoryMinAggregateOutputType = {
    id: string | null
    taskId: string | null
    actorId: string | null
    actorName: string | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type TaskHistoryMaxAggregateOutputType = {
    id: string | null
    taskId: string | null
    actorId: string | null
    actorName: string | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    createdAt: Date | null
  }

  export type TaskHistoryCountAggregateOutputType = {
    id: number
    taskId: number
    actorId: number
    actorName: number
    field: number
    oldValue: number
    newValue: number
    createdAt: number
    _all: number
  }


  export type TaskHistoryMinAggregateInputType = {
    id?: true
    taskId?: true
    actorId?: true
    actorName?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type TaskHistoryMaxAggregateInputType = {
    id?: true
    taskId?: true
    actorId?: true
    actorName?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
  }

  export type TaskHistoryCountAggregateInputType = {
    id?: true
    taskId?: true
    actorId?: true
    actorName?: true
    field?: true
    oldValue?: true
    newValue?: true
    createdAt?: true
    _all?: true
  }

  export type TaskHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistory to aggregate.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskHistories
    **/
    _count?: true | TaskHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type GetTaskHistoryAggregateType<T extends TaskHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskHistory[P]>
      : GetScalarType<T[P], AggregateTaskHistory[P]>
  }




  export type TaskHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithAggregationInput | TaskHistoryOrderByWithAggregationInput[]
    by: TaskHistoryScalarFieldEnum[] | TaskHistoryScalarFieldEnum
    having?: TaskHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskHistoryCountAggregateInputType | true
    _min?: TaskHistoryMinAggregateInputType
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type TaskHistoryGroupByOutputType = {
    id: string
    taskId: string
    actorId: string
    actorName: string
    field: string
    oldValue: string | null
    newValue: string | null
    createdAt: Date
    _count: TaskHistoryCountAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  type GetTaskHistoryGroupByPayload<T extends TaskHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TaskHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    actorId?: boolean
    actorName?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    actorId?: boolean
    actorName?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectScalar = {
    id?: boolean
    taskId?: boolean
    actorId?: boolean
    actorName?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    createdAt?: boolean
  }

  export type TaskHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type TaskHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $TaskHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskHistory"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskId: string
      actorId: string
      actorName: string
      field: string
      oldValue: string | null
      newValue: string | null
      createdAt: Date
    }, ExtArgs["result"]["taskHistory"]>
    composites: {}
  }

  type TaskHistoryGetPayload<S extends boolean | null | undefined | TaskHistoryDefaultArgs> = $Result.GetResult<Prisma.$TaskHistoryPayload, S>

  type TaskHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskHistoryCountAggregateInputType | true
    }

  export interface TaskHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskHistory'], meta: { name: 'TaskHistory' } }
    /**
     * Find zero or one TaskHistory that matches the filter.
     * @param {TaskHistoryFindUniqueArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskHistoryFindUniqueArgs>(args: SelectSubset<T, TaskHistoryFindUniqueArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TaskHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TaskHistoryFindUniqueOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TaskHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskHistoryFindFirstArgs>(args?: SelectSubset<T, TaskHistoryFindFirstArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TaskHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TaskHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany()
     * 
     * // Get first 10 TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskHistoryFindManyArgs>(args?: SelectSubset<T, TaskHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TaskHistory.
     * @param {TaskHistoryCreateArgs} args - Arguments to create a TaskHistory.
     * @example
     * // Create one TaskHistory
     * const TaskHistory = await prisma.taskHistory.create({
     *   data: {
     *     // ... data to create a TaskHistory
     *   }
     * })
     * 
     */
    create<T extends TaskHistoryCreateArgs>(args: SelectSubset<T, TaskHistoryCreateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TaskHistories.
     * @param {TaskHistoryCreateManyArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskHistoryCreateManyArgs>(args?: SelectSubset<T, TaskHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskHistories and returns the data saved in the database.
     * @param {TaskHistoryCreateManyAndReturnArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskHistories and only return the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TaskHistory.
     * @param {TaskHistoryDeleteArgs} args - Arguments to delete one TaskHistory.
     * @example
     * // Delete one TaskHistory
     * const TaskHistory = await prisma.taskHistory.delete({
     *   where: {
     *     // ... filter to delete one TaskHistory
     *   }
     * })
     * 
     */
    delete<T extends TaskHistoryDeleteArgs>(args: SelectSubset<T, TaskHistoryDeleteArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TaskHistory.
     * @param {TaskHistoryUpdateArgs} args - Arguments to update one TaskHistory.
     * @example
     * // Update one TaskHistory
     * const taskHistory = await prisma.taskHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskHistoryUpdateArgs>(args: SelectSubset<T, TaskHistoryUpdateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TaskHistories.
     * @param {TaskHistoryDeleteManyArgs} args - Arguments to filter TaskHistories to delete.
     * @example
     * // Delete a few TaskHistories
     * const { count } = await prisma.taskHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskHistoryDeleteManyArgs>(args?: SelectSubset<T, TaskHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskHistories
     * const taskHistory = await prisma.taskHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskHistoryUpdateManyArgs>(args: SelectSubset<T, TaskHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskHistory.
     * @param {TaskHistoryUpsertArgs} args - Arguments to update or create a TaskHistory.
     * @example
     * // Update or create a TaskHistory
     * const taskHistory = await prisma.taskHistory.upsert({
     *   create: {
     *     // ... data to create a TaskHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskHistory we want to update
     *   }
     * })
     */
    upsert<T extends TaskHistoryUpsertArgs>(args: SelectSubset<T, TaskHistoryUpsertArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryCountArgs} args - Arguments to filter TaskHistories to count.
     * @example
     * // Count the number of TaskHistories
     * const count = await prisma.taskHistory.count({
     *   where: {
     *     // ... the filter for the TaskHistories we want to count
     *   }
     * })
    **/
    count<T extends TaskHistoryCountArgs>(
      args?: Subset<T, TaskHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskHistoryAggregateArgs>(args: Subset<T, TaskHistoryAggregateArgs>): Prisma.PrismaPromise<GetTaskHistoryAggregateType<T>>

    /**
     * Group by TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TaskHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskHistory model
   */
  readonly fields: TaskHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskHistory model
   */ 
  interface TaskHistoryFieldRefs {
    readonly id: FieldRef<"TaskHistory", 'String'>
    readonly taskId: FieldRef<"TaskHistory", 'String'>
    readonly actorId: FieldRef<"TaskHistory", 'String'>
    readonly actorName: FieldRef<"TaskHistory", 'String'>
    readonly field: FieldRef<"TaskHistory", 'String'>
    readonly oldValue: FieldRef<"TaskHistory", 'String'>
    readonly newValue: FieldRef<"TaskHistory", 'String'>
    readonly createdAt: FieldRef<"TaskHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TaskHistory findUnique
   */
  export type TaskHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findUniqueOrThrow
   */
  export type TaskHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findFirst
   */
  export type TaskHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findFirstOrThrow
   */
  export type TaskHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findMany
   */
  export type TaskHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistories to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory create
   */
  export type TaskHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskHistory.
     */
    data: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
  }

  /**
   * TaskHistory createMany
   */
  export type TaskHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskHistory createManyAndReturn
   */
  export type TaskHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskHistory update
   */
  export type TaskHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskHistory.
     */
    data: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
    /**
     * Choose, which TaskHistory to update.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory updateMany
   */
  export type TaskHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskHistories.
     */
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TaskHistories to update
     */
    where?: TaskHistoryWhereInput
  }

  /**
   * TaskHistory upsert
   */
  export type TaskHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskHistory to update in case it exists.
     */
    where: TaskHistoryWhereUniqueInput
    /**
     * In case the TaskHistory found by the `where` argument doesn't exist, create a new TaskHistory with this data.
     */
    create: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
    /**
     * In case the TaskHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
  }

  /**
   * TaskHistory delete
   */
  export type TaskHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter which TaskHistory to delete.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory deleteMany
   */
  export type TaskHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistories to delete
     */
    where?: TaskHistoryWhereInput
  }

  /**
   * TaskHistory without action
   */
  export type TaskHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
  }


  /**
   * Model BugSheet
   */

  export type AggregateBugSheet = {
    _count: BugSheetCountAggregateOutputType | null
    _min: BugSheetMinAggregateOutputType | null
    _max: BugSheetMaxAggregateOutputType | null
  }

  export type BugSheetMinAggregateOutputType = {
    id: string | null
    module: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    assignedTo: string | null
    remarks: string | null
    appId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
  }

  export type BugSheetMaxAggregateOutputType = {
    id: string | null
    module: string | null
    description: string | null
    status: $Enums.Status | null
    priority: $Enums.Priority | null
    assignedTo: string | null
    remarks: string | null
    appId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdBy: string | null
    creatorName: string | null
  }

  export type BugSheetCountAggregateOutputType = {
    id: number
    module: number
    description: number
    status: number
    priority: number
    assignedTo: number
    remarks: number
    appId: number
    createdAt: number
    updatedAt: number
    createdBy: number
    creatorName: number
    _all: number
  }


  export type BugSheetMinAggregateInputType = {
    id?: true
    module?: true
    description?: true
    status?: true
    priority?: true
    assignedTo?: true
    remarks?: true
    appId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
  }

  export type BugSheetMaxAggregateInputType = {
    id?: true
    module?: true
    description?: true
    status?: true
    priority?: true
    assignedTo?: true
    remarks?: true
    appId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
  }

  export type BugSheetCountAggregateInputType = {
    id?: true
    module?: true
    description?: true
    status?: true
    priority?: true
    assignedTo?: true
    remarks?: true
    appId?: true
    createdAt?: true
    updatedAt?: true
    createdBy?: true
    creatorName?: true
    _all?: true
  }

  export type BugSheetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BugSheet to aggregate.
     */
    where?: BugSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugSheets to fetch.
     */
    orderBy?: BugSheetOrderByWithRelationInput | BugSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BugSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BugSheets
    **/
    _count?: true | BugSheetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BugSheetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BugSheetMaxAggregateInputType
  }

  export type GetBugSheetAggregateType<T extends BugSheetAggregateArgs> = {
        [P in keyof T & keyof AggregateBugSheet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBugSheet[P]>
      : GetScalarType<T[P], AggregateBugSheet[P]>
  }




  export type BugSheetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BugSheetWhereInput
    orderBy?: BugSheetOrderByWithAggregationInput | BugSheetOrderByWithAggregationInput[]
    by: BugSheetScalarFieldEnum[] | BugSheetScalarFieldEnum
    having?: BugSheetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BugSheetCountAggregateInputType | true
    _min?: BugSheetMinAggregateInputType
    _max?: BugSheetMaxAggregateInputType
  }

  export type BugSheetGroupByOutputType = {
    id: string
    module: string
    description: string
    status: $Enums.Status
    priority: $Enums.Priority
    assignedTo: string | null
    remarks: string | null
    appId: string
    createdAt: Date
    updatedAt: Date
    createdBy: string | null
    creatorName: string | null
    _count: BugSheetCountAggregateOutputType | null
    _min: BugSheetMinAggregateOutputType | null
    _max: BugSheetMaxAggregateOutputType | null
  }

  type GetBugSheetGroupByPayload<T extends BugSheetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BugSheetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BugSheetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BugSheetGroupByOutputType[P]>
            : GetScalarType<T[P], BugSheetGroupByOutputType[P]>
        }
      >
    >


  export type BugSheetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedTo?: boolean
    remarks?: boolean
    appId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
    comments?: boolean | BugSheet$commentsArgs<ExtArgs>
    _count?: boolean | BugSheetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bugSheet"]>

  export type BugSheetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedTo?: boolean
    remarks?: boolean
    appId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
    app?: boolean | AppDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bugSheet"]>

  export type BugSheetSelectScalar = {
    id?: boolean
    module?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    assignedTo?: boolean
    remarks?: boolean
    appId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean
    creatorName?: boolean
  }

  export type BugSheetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
    comments?: boolean | BugSheet$commentsArgs<ExtArgs>
    _count?: boolean | BugSheetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BugSheetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    app?: boolean | AppDefaultArgs<ExtArgs>
  }

  export type $BugSheetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BugSheet"
    objects: {
      app: Prisma.$AppPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      module: string
      description: string
      status: $Enums.Status
      priority: $Enums.Priority
      assignedTo: string | null
      remarks: string | null
      appId: string
      createdAt: Date
      updatedAt: Date
      createdBy: string | null
      creatorName: string | null
    }, ExtArgs["result"]["bugSheet"]>
    composites: {}
  }

  type BugSheetGetPayload<S extends boolean | null | undefined | BugSheetDefaultArgs> = $Result.GetResult<Prisma.$BugSheetPayload, S>

  type BugSheetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BugSheetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BugSheetCountAggregateInputType | true
    }

  export interface BugSheetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BugSheet'], meta: { name: 'BugSheet' } }
    /**
     * Find zero or one BugSheet that matches the filter.
     * @param {BugSheetFindUniqueArgs} args - Arguments to find a BugSheet
     * @example
     * // Get one BugSheet
     * const bugSheet = await prisma.bugSheet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BugSheetFindUniqueArgs>(args: SelectSubset<T, BugSheetFindUniqueArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BugSheet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BugSheetFindUniqueOrThrowArgs} args - Arguments to find a BugSheet
     * @example
     * // Get one BugSheet
     * const bugSheet = await prisma.bugSheet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BugSheetFindUniqueOrThrowArgs>(args: SelectSubset<T, BugSheetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BugSheet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugSheetFindFirstArgs} args - Arguments to find a BugSheet
     * @example
     * // Get one BugSheet
     * const bugSheet = await prisma.bugSheet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BugSheetFindFirstArgs>(args?: SelectSubset<T, BugSheetFindFirstArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BugSheet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugSheetFindFirstOrThrowArgs} args - Arguments to find a BugSheet
     * @example
     * // Get one BugSheet
     * const bugSheet = await prisma.bugSheet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BugSheetFindFirstOrThrowArgs>(args?: SelectSubset<T, BugSheetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BugSheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugSheetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BugSheets
     * const bugSheets = await prisma.bugSheet.findMany()
     * 
     * // Get first 10 BugSheets
     * const bugSheets = await prisma.bugSheet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bugSheetWithIdOnly = await prisma.bugSheet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BugSheetFindManyArgs>(args?: SelectSubset<T, BugSheetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BugSheet.
     * @param {BugSheetCreateArgs} args - Arguments to create a BugSheet.
     * @example
     * // Create one BugSheet
     * const BugSheet = await prisma.bugSheet.create({
     *   data: {
     *     // ... data to create a BugSheet
     *   }
     * })
     * 
     */
    create<T extends BugSheetCreateArgs>(args: SelectSubset<T, BugSheetCreateArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BugSheets.
     * @param {BugSheetCreateManyArgs} args - Arguments to create many BugSheets.
     * @example
     * // Create many BugSheets
     * const bugSheet = await prisma.bugSheet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BugSheetCreateManyArgs>(args?: SelectSubset<T, BugSheetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BugSheets and returns the data saved in the database.
     * @param {BugSheetCreateManyAndReturnArgs} args - Arguments to create many BugSheets.
     * @example
     * // Create many BugSheets
     * const bugSheet = await prisma.bugSheet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BugSheets and only return the `id`
     * const bugSheetWithIdOnly = await prisma.bugSheet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BugSheetCreateManyAndReturnArgs>(args?: SelectSubset<T, BugSheetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BugSheet.
     * @param {BugSheetDeleteArgs} args - Arguments to delete one BugSheet.
     * @example
     * // Delete one BugSheet
     * const BugSheet = await prisma.bugSheet.delete({
     *   where: {
     *     // ... filter to delete one BugSheet
     *   }
     * })
     * 
     */
    delete<T extends BugSheetDeleteArgs>(args: SelectSubset<T, BugSheetDeleteArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BugSheet.
     * @param {BugSheetUpdateArgs} args - Arguments to update one BugSheet.
     * @example
     * // Update one BugSheet
     * const bugSheet = await prisma.bugSheet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BugSheetUpdateArgs>(args: SelectSubset<T, BugSheetUpdateArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BugSheets.
     * @param {BugSheetDeleteManyArgs} args - Arguments to filter BugSheets to delete.
     * @example
     * // Delete a few BugSheets
     * const { count } = await prisma.bugSheet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BugSheetDeleteManyArgs>(args?: SelectSubset<T, BugSheetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BugSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugSheetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BugSheets
     * const bugSheet = await prisma.bugSheet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BugSheetUpdateManyArgs>(args: SelectSubset<T, BugSheetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BugSheet.
     * @param {BugSheetUpsertArgs} args - Arguments to update or create a BugSheet.
     * @example
     * // Update or create a BugSheet
     * const bugSheet = await prisma.bugSheet.upsert({
     *   create: {
     *     // ... data to create a BugSheet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BugSheet we want to update
     *   }
     * })
     */
    upsert<T extends BugSheetUpsertArgs>(args: SelectSubset<T, BugSheetUpsertArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BugSheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugSheetCountArgs} args - Arguments to filter BugSheets to count.
     * @example
     * // Count the number of BugSheets
     * const count = await prisma.bugSheet.count({
     *   where: {
     *     // ... the filter for the BugSheets we want to count
     *   }
     * })
    **/
    count<T extends BugSheetCountArgs>(
      args?: Subset<T, BugSheetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BugSheetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BugSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugSheetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BugSheetAggregateArgs>(args: Subset<T, BugSheetAggregateArgs>): Prisma.PrismaPromise<GetBugSheetAggregateType<T>>

    /**
     * Group by BugSheet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BugSheetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BugSheetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BugSheetGroupByArgs['orderBy'] }
        : { orderBy?: BugSheetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BugSheetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBugSheetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BugSheet model
   */
  readonly fields: BugSheetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BugSheet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BugSheetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    app<T extends AppDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppDefaultArgs<ExtArgs>>): Prisma__AppClient<$Result.GetResult<Prisma.$AppPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    comments<T extends BugSheet$commentsArgs<ExtArgs> = {}>(args?: Subset<T, BugSheet$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BugSheet model
   */ 
  interface BugSheetFieldRefs {
    readonly id: FieldRef<"BugSheet", 'String'>
    readonly module: FieldRef<"BugSheet", 'String'>
    readonly description: FieldRef<"BugSheet", 'String'>
    readonly status: FieldRef<"BugSheet", 'Status'>
    readonly priority: FieldRef<"BugSheet", 'Priority'>
    readonly assignedTo: FieldRef<"BugSheet", 'String'>
    readonly remarks: FieldRef<"BugSheet", 'String'>
    readonly appId: FieldRef<"BugSheet", 'String'>
    readonly createdAt: FieldRef<"BugSheet", 'DateTime'>
    readonly updatedAt: FieldRef<"BugSheet", 'DateTime'>
    readonly createdBy: FieldRef<"BugSheet", 'String'>
    readonly creatorName: FieldRef<"BugSheet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BugSheet findUnique
   */
  export type BugSheetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * Filter, which BugSheet to fetch.
     */
    where: BugSheetWhereUniqueInput
  }

  /**
   * BugSheet findUniqueOrThrow
   */
  export type BugSheetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * Filter, which BugSheet to fetch.
     */
    where: BugSheetWhereUniqueInput
  }

  /**
   * BugSheet findFirst
   */
  export type BugSheetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * Filter, which BugSheet to fetch.
     */
    where?: BugSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugSheets to fetch.
     */
    orderBy?: BugSheetOrderByWithRelationInput | BugSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BugSheets.
     */
    cursor?: BugSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BugSheets.
     */
    distinct?: BugSheetScalarFieldEnum | BugSheetScalarFieldEnum[]
  }

  /**
   * BugSheet findFirstOrThrow
   */
  export type BugSheetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * Filter, which BugSheet to fetch.
     */
    where?: BugSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugSheets to fetch.
     */
    orderBy?: BugSheetOrderByWithRelationInput | BugSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BugSheets.
     */
    cursor?: BugSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugSheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BugSheets.
     */
    distinct?: BugSheetScalarFieldEnum | BugSheetScalarFieldEnum[]
  }

  /**
   * BugSheet findMany
   */
  export type BugSheetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * Filter, which BugSheets to fetch.
     */
    where?: BugSheetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BugSheets to fetch.
     */
    orderBy?: BugSheetOrderByWithRelationInput | BugSheetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BugSheets.
     */
    cursor?: BugSheetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BugSheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BugSheets.
     */
    skip?: number
    distinct?: BugSheetScalarFieldEnum | BugSheetScalarFieldEnum[]
  }

  /**
   * BugSheet create
   */
  export type BugSheetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * The data needed to create a BugSheet.
     */
    data: XOR<BugSheetCreateInput, BugSheetUncheckedCreateInput>
  }

  /**
   * BugSheet createMany
   */
  export type BugSheetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BugSheets.
     */
    data: BugSheetCreateManyInput | BugSheetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BugSheet createManyAndReturn
   */
  export type BugSheetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BugSheets.
     */
    data: BugSheetCreateManyInput | BugSheetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BugSheet update
   */
  export type BugSheetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * The data needed to update a BugSheet.
     */
    data: XOR<BugSheetUpdateInput, BugSheetUncheckedUpdateInput>
    /**
     * Choose, which BugSheet to update.
     */
    where: BugSheetWhereUniqueInput
  }

  /**
   * BugSheet updateMany
   */
  export type BugSheetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BugSheets.
     */
    data: XOR<BugSheetUpdateManyMutationInput, BugSheetUncheckedUpdateManyInput>
    /**
     * Filter which BugSheets to update
     */
    where?: BugSheetWhereInput
  }

  /**
   * BugSheet upsert
   */
  export type BugSheetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * The filter to search for the BugSheet to update in case it exists.
     */
    where: BugSheetWhereUniqueInput
    /**
     * In case the BugSheet found by the `where` argument doesn't exist, create a new BugSheet with this data.
     */
    create: XOR<BugSheetCreateInput, BugSheetUncheckedCreateInput>
    /**
     * In case the BugSheet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BugSheetUpdateInput, BugSheetUncheckedUpdateInput>
  }

  /**
   * BugSheet delete
   */
  export type BugSheetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    /**
     * Filter which BugSheet to delete.
     */
    where: BugSheetWhereUniqueInput
  }

  /**
   * BugSheet deleteMany
   */
  export type BugSheetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BugSheets to delete
     */
    where?: BugSheetWhereInput
  }

  /**
   * BugSheet.comments
   */
  export type BugSheet$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * BugSheet without action
   */
  export type BugSheetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    content: string | null
    authorId: string | null
    authorName: string | null
    taskId: string | null
    bugSheetId: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    content: string | null
    authorId: string | null
    authorName: string | null
    taskId: string | null
    bugSheetId: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    content: number
    authorId: number
    authorName: number
    taskId: number
    bugSheetId: number
    createdAt: number
    _all: number
  }


  export type CommentMinAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    authorName?: true
    taskId?: true
    bugSheetId?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    authorName?: true
    taskId?: true
    bugSheetId?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    content?: true
    authorId?: true
    authorName?: true
    taskId?: true
    bugSheetId?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    content: string
    authorId: string
    authorName: string
    taskId: string | null
    bugSheetId: string | null
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    taskId?: boolean
    bugSheetId?: boolean
    createdAt?: boolean
    task?: boolean | Comment$taskArgs<ExtArgs>
    bugSheet?: boolean | Comment$bugSheetArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    taskId?: boolean
    bugSheetId?: boolean
    createdAt?: boolean
    task?: boolean | Comment$taskArgs<ExtArgs>
    bugSheet?: boolean | Comment$bugSheetArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    content?: boolean
    authorId?: boolean
    authorName?: boolean
    taskId?: boolean
    bugSheetId?: boolean
    createdAt?: boolean
  }

  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Comment$taskArgs<ExtArgs>
    bugSheet?: boolean | Comment$bugSheetArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | Comment$taskArgs<ExtArgs>
    bugSheet?: boolean | Comment$bugSheetArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs> | null
      bugSheet: Prisma.$BugSheetPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      authorId: string
      authorName: string
      taskId: string | null
      bugSheetId: string | null
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends Comment$taskArgs<ExtArgs> = {}>(args?: Subset<T, Comment$taskArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    bugSheet<T extends Comment$bugSheetArgs<ExtArgs> = {}>(args?: Subset<T, Comment$bugSheetArgs<ExtArgs>>): Prisma__BugSheetClient<$Result.GetResult<Prisma.$BugSheetPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */ 
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly authorName: FieldRef<"Comment", 'String'>
    readonly taskId: FieldRef<"Comment", 'String'>
    readonly bugSheetId: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
  }

  /**
   * Comment.task
   */
  export type Comment$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
  }

  /**
   * Comment.bugSheet
   */
  export type Comment$bugSheetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BugSheet
     */
    select?: BugSheetSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BugSheetInclude<ExtArgs> | null
    where?: BugSheetWhereInput
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: string | null
    action: $Enums.ActivityAction | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    userId: string | null
    userName: string | null
    entityType: $Enums.EntityType | null
    entityId: string | null
    entityTitle: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: string | null
    action: $Enums.ActivityAction | null
    field: string | null
    oldValue: string | null
    newValue: string | null
    userId: string | null
    userName: string | null
    entityType: $Enums.EntityType | null
    entityId: string | null
    entityTitle: string | null
    projectId: string | null
    createdAt: Date | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    action: number
    field: number
    oldValue: number
    newValue: number
    userId: number
    userName: number
    entityType: number
    entityId: number
    entityTitle: number
    projectId: number
    createdAt: number
    _all: number
  }


  export type ActivityLogMinAggregateInputType = {
    id?: true
    action?: true
    field?: true
    oldValue?: true
    newValue?: true
    userId?: true
    userName?: true
    entityType?: true
    entityId?: true
    entityTitle?: true
    projectId?: true
    createdAt?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    action?: true
    field?: true
    oldValue?: true
    newValue?: true
    userId?: true
    userName?: true
    entityType?: true
    entityId?: true
    entityTitle?: true
    projectId?: true
    createdAt?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    action?: true
    field?: true
    oldValue?: true
    newValue?: true
    userId?: true
    userName?: true
    entityType?: true
    entityId?: true
    entityTitle?: true
    projectId?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: string
    action: $Enums.ActivityAction
    field: string | null
    oldValue: string | null
    newValue: string | null
    userId: string
    userName: string
    entityType: $Enums.EntityType
    entityId: string
    entityTitle: string
    projectId: string
    createdAt: Date
    _count: ActivityLogCountAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    userId?: boolean
    userName?: boolean
    entityType?: boolean
    entityId?: boolean
    entityTitle?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    userId?: boolean
    userName?: boolean
    entityType?: boolean
    entityId?: boolean
    entityTitle?: boolean
    projectId?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>

  export type ActivityLogSelectScalar = {
    id?: boolean
    action?: boolean
    field?: boolean
    oldValue?: boolean
    newValue?: boolean
    userId?: boolean
    userName?: boolean
    entityType?: boolean
    entityId?: boolean
    entityTitle?: boolean
    projectId?: boolean
    createdAt?: boolean
  }

  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type ActivityLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      action: $Enums.ActivityAction
      field: string | null
      oldValue: string | null
      newValue: string | null
      userId: string
      userName: string
      entityType: $Enums.EntityType
      entityId: string
      entityTitle: string
      projectId: string
      createdAt: Date
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivityLogs and returns the data saved in the database.
     * @param {ActivityLogCreateManyAndReturnArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivityLogs and only return the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityLogCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */ 
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'String'>
    readonly action: FieldRef<"ActivityLog", 'ActivityAction'>
    readonly field: FieldRef<"ActivityLog", 'String'>
    readonly oldValue: FieldRef<"ActivityLog", 'String'>
    readonly newValue: FieldRef<"ActivityLog", 'String'>
    readonly userId: FieldRef<"ActivityLog", 'String'>
    readonly userName: FieldRef<"ActivityLog", 'String'>
    readonly entityType: FieldRef<"ActivityLog", 'EntityType'>
    readonly entityId: FieldRef<"ActivityLog", 'String'>
    readonly entityTitle: FieldRef<"ActivityLog", 'String'>
    readonly projectId: FieldRef<"ActivityLog", 'String'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog createManyAndReturn
   */
  export type ActivityLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model UserVisit
   */

  export type AggregateUserVisit = {
    _count: UserVisitCountAggregateOutputType | null
    _min: UserVisitMinAggregateOutputType | null
    _max: UserVisitMaxAggregateOutputType | null
  }

  export type UserVisitMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    projectName: string | null
    appId: string | null
    appName: string | null
    viewType: string | null
    visitedAt: Date | null
  }

  export type UserVisitMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    projectName: string | null
    appId: string | null
    appName: string | null
    viewType: string | null
    visitedAt: Date | null
  }

  export type UserVisitCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    projectName: number
    appId: number
    appName: number
    viewType: number
    visitedAt: number
    _all: number
  }


  export type UserVisitMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    projectName?: true
    appId?: true
    appName?: true
    viewType?: true
    visitedAt?: true
  }

  export type UserVisitMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    projectName?: true
    appId?: true
    appName?: true
    viewType?: true
    visitedAt?: true
  }

  export type UserVisitCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    projectName?: true
    appId?: true
    appName?: true
    viewType?: true
    visitedAt?: true
    _all?: true
  }

  export type UserVisitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVisit to aggregate.
     */
    where?: UserVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVisits to fetch.
     */
    orderBy?: UserVisitOrderByWithRelationInput | UserVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserVisits
    **/
    _count?: true | UserVisitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserVisitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserVisitMaxAggregateInputType
  }

  export type GetUserVisitAggregateType<T extends UserVisitAggregateArgs> = {
        [P in keyof T & keyof AggregateUserVisit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserVisit[P]>
      : GetScalarType<T[P], AggregateUserVisit[P]>
  }




  export type UserVisitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserVisitWhereInput
    orderBy?: UserVisitOrderByWithAggregationInput | UserVisitOrderByWithAggregationInput[]
    by: UserVisitScalarFieldEnum[] | UserVisitScalarFieldEnum
    having?: UserVisitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserVisitCountAggregateInputType | true
    _min?: UserVisitMinAggregateInputType
    _max?: UserVisitMaxAggregateInputType
  }

  export type UserVisitGroupByOutputType = {
    id: string
    userId: string
    projectId: string
    projectName: string
    appId: string | null
    appName: string | null
    viewType: string | null
    visitedAt: Date
    _count: UserVisitCountAggregateOutputType | null
    _min: UserVisitMinAggregateOutputType | null
    _max: UserVisitMaxAggregateOutputType | null
  }

  type GetUserVisitGroupByPayload<T extends UserVisitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserVisitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserVisitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserVisitGroupByOutputType[P]>
            : GetScalarType<T[P], UserVisitGroupByOutputType[P]>
        }
      >
    >


  export type UserVisitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    projectName?: boolean
    appId?: boolean
    appName?: boolean
    viewType?: boolean
    visitedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVisit"]>

  export type UserVisitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    projectName?: boolean
    appId?: boolean
    appName?: boolean
    viewType?: boolean
    visitedAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userVisit"]>

  export type UserVisitSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    projectName?: boolean
    appId?: boolean
    appName?: boolean
    viewType?: boolean
    visitedAt?: boolean
  }

  export type UserVisitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UserVisitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UserVisitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserVisit"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      projectId: string
      projectName: string
      appId: string | null
      appName: string | null
      viewType: string | null
      visitedAt: Date
    }, ExtArgs["result"]["userVisit"]>
    composites: {}
  }

  type UserVisitGetPayload<S extends boolean | null | undefined | UserVisitDefaultArgs> = $Result.GetResult<Prisma.$UserVisitPayload, S>

  type UserVisitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserVisitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserVisitCountAggregateInputType | true
    }

  export interface UserVisitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserVisit'], meta: { name: 'UserVisit' } }
    /**
     * Find zero or one UserVisit that matches the filter.
     * @param {UserVisitFindUniqueArgs} args - Arguments to find a UserVisit
     * @example
     * // Get one UserVisit
     * const userVisit = await prisma.userVisit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserVisitFindUniqueArgs>(args: SelectSubset<T, UserVisitFindUniqueArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserVisit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserVisitFindUniqueOrThrowArgs} args - Arguments to find a UserVisit
     * @example
     * // Get one UserVisit
     * const userVisit = await prisma.userVisit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserVisitFindUniqueOrThrowArgs>(args: SelectSubset<T, UserVisitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserVisit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVisitFindFirstArgs} args - Arguments to find a UserVisit
     * @example
     * // Get one UserVisit
     * const userVisit = await prisma.userVisit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserVisitFindFirstArgs>(args?: SelectSubset<T, UserVisitFindFirstArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserVisit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVisitFindFirstOrThrowArgs} args - Arguments to find a UserVisit
     * @example
     * // Get one UserVisit
     * const userVisit = await prisma.userVisit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserVisitFindFirstOrThrowArgs>(args?: SelectSubset<T, UserVisitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserVisits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVisitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserVisits
     * const userVisits = await prisma.userVisit.findMany()
     * 
     * // Get first 10 UserVisits
     * const userVisits = await prisma.userVisit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userVisitWithIdOnly = await prisma.userVisit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserVisitFindManyArgs>(args?: SelectSubset<T, UserVisitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserVisit.
     * @param {UserVisitCreateArgs} args - Arguments to create a UserVisit.
     * @example
     * // Create one UserVisit
     * const UserVisit = await prisma.userVisit.create({
     *   data: {
     *     // ... data to create a UserVisit
     *   }
     * })
     * 
     */
    create<T extends UserVisitCreateArgs>(args: SelectSubset<T, UserVisitCreateArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserVisits.
     * @param {UserVisitCreateManyArgs} args - Arguments to create many UserVisits.
     * @example
     * // Create many UserVisits
     * const userVisit = await prisma.userVisit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserVisitCreateManyArgs>(args?: SelectSubset<T, UserVisitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserVisits and returns the data saved in the database.
     * @param {UserVisitCreateManyAndReturnArgs} args - Arguments to create many UserVisits.
     * @example
     * // Create many UserVisits
     * const userVisit = await prisma.userVisit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserVisits and only return the `id`
     * const userVisitWithIdOnly = await prisma.userVisit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserVisitCreateManyAndReturnArgs>(args?: SelectSubset<T, UserVisitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserVisit.
     * @param {UserVisitDeleteArgs} args - Arguments to delete one UserVisit.
     * @example
     * // Delete one UserVisit
     * const UserVisit = await prisma.userVisit.delete({
     *   where: {
     *     // ... filter to delete one UserVisit
     *   }
     * })
     * 
     */
    delete<T extends UserVisitDeleteArgs>(args: SelectSubset<T, UserVisitDeleteArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserVisit.
     * @param {UserVisitUpdateArgs} args - Arguments to update one UserVisit.
     * @example
     * // Update one UserVisit
     * const userVisit = await prisma.userVisit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserVisitUpdateArgs>(args: SelectSubset<T, UserVisitUpdateArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserVisits.
     * @param {UserVisitDeleteManyArgs} args - Arguments to filter UserVisits to delete.
     * @example
     * // Delete a few UserVisits
     * const { count } = await prisma.userVisit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserVisitDeleteManyArgs>(args?: SelectSubset<T, UserVisitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVisitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserVisits
     * const userVisit = await prisma.userVisit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserVisitUpdateManyArgs>(args: SelectSubset<T, UserVisitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserVisit.
     * @param {UserVisitUpsertArgs} args - Arguments to update or create a UserVisit.
     * @example
     * // Update or create a UserVisit
     * const userVisit = await prisma.userVisit.upsert({
     *   create: {
     *     // ... data to create a UserVisit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserVisit we want to update
     *   }
     * })
     */
    upsert<T extends UserVisitUpsertArgs>(args: SelectSubset<T, UserVisitUpsertArgs<ExtArgs>>): Prisma__UserVisitClient<$Result.GetResult<Prisma.$UserVisitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserVisits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVisitCountArgs} args - Arguments to filter UserVisits to count.
     * @example
     * // Count the number of UserVisits
     * const count = await prisma.userVisit.count({
     *   where: {
     *     // ... the filter for the UserVisits we want to count
     *   }
     * })
    **/
    count<T extends UserVisitCountArgs>(
      args?: Subset<T, UserVisitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserVisitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVisitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserVisitAggregateArgs>(args: Subset<T, UserVisitAggregateArgs>): Prisma.PrismaPromise<GetUserVisitAggregateType<T>>

    /**
     * Group by UserVisit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserVisitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserVisitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserVisitGroupByArgs['orderBy'] }
        : { orderBy?: UserVisitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserVisitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserVisitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserVisit model
   */
  readonly fields: UserVisitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserVisit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserVisitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserVisit model
   */ 
  interface UserVisitFieldRefs {
    readonly id: FieldRef<"UserVisit", 'String'>
    readonly userId: FieldRef<"UserVisit", 'String'>
    readonly projectId: FieldRef<"UserVisit", 'String'>
    readonly projectName: FieldRef<"UserVisit", 'String'>
    readonly appId: FieldRef<"UserVisit", 'String'>
    readonly appName: FieldRef<"UserVisit", 'String'>
    readonly viewType: FieldRef<"UserVisit", 'String'>
    readonly visitedAt: FieldRef<"UserVisit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserVisit findUnique
   */
  export type UserVisitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * Filter, which UserVisit to fetch.
     */
    where: UserVisitWhereUniqueInput
  }

  /**
   * UserVisit findUniqueOrThrow
   */
  export type UserVisitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * Filter, which UserVisit to fetch.
     */
    where: UserVisitWhereUniqueInput
  }

  /**
   * UserVisit findFirst
   */
  export type UserVisitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * Filter, which UserVisit to fetch.
     */
    where?: UserVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVisits to fetch.
     */
    orderBy?: UserVisitOrderByWithRelationInput | UserVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVisits.
     */
    cursor?: UserVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVisits.
     */
    distinct?: UserVisitScalarFieldEnum | UserVisitScalarFieldEnum[]
  }

  /**
   * UserVisit findFirstOrThrow
   */
  export type UserVisitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * Filter, which UserVisit to fetch.
     */
    where?: UserVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVisits to fetch.
     */
    orderBy?: UserVisitOrderByWithRelationInput | UserVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserVisits.
     */
    cursor?: UserVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVisits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserVisits.
     */
    distinct?: UserVisitScalarFieldEnum | UserVisitScalarFieldEnum[]
  }

  /**
   * UserVisit findMany
   */
  export type UserVisitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * Filter, which UserVisits to fetch.
     */
    where?: UserVisitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserVisits to fetch.
     */
    orderBy?: UserVisitOrderByWithRelationInput | UserVisitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserVisits.
     */
    cursor?: UserVisitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserVisits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserVisits.
     */
    skip?: number
    distinct?: UserVisitScalarFieldEnum | UserVisitScalarFieldEnum[]
  }

  /**
   * UserVisit create
   */
  export type UserVisitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * The data needed to create a UserVisit.
     */
    data: XOR<UserVisitCreateInput, UserVisitUncheckedCreateInput>
  }

  /**
   * UserVisit createMany
   */
  export type UserVisitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserVisits.
     */
    data: UserVisitCreateManyInput | UserVisitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserVisit createManyAndReturn
   */
  export type UserVisitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserVisits.
     */
    data: UserVisitCreateManyInput | UserVisitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserVisit update
   */
  export type UserVisitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * The data needed to update a UserVisit.
     */
    data: XOR<UserVisitUpdateInput, UserVisitUncheckedUpdateInput>
    /**
     * Choose, which UserVisit to update.
     */
    where: UserVisitWhereUniqueInput
  }

  /**
   * UserVisit updateMany
   */
  export type UserVisitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserVisits.
     */
    data: XOR<UserVisitUpdateManyMutationInput, UserVisitUncheckedUpdateManyInput>
    /**
     * Filter which UserVisits to update
     */
    where?: UserVisitWhereInput
  }

  /**
   * UserVisit upsert
   */
  export type UserVisitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * The filter to search for the UserVisit to update in case it exists.
     */
    where: UserVisitWhereUniqueInput
    /**
     * In case the UserVisit found by the `where` argument doesn't exist, create a new UserVisit with this data.
     */
    create: XOR<UserVisitCreateInput, UserVisitUncheckedCreateInput>
    /**
     * In case the UserVisit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserVisitUpdateInput, UserVisitUncheckedUpdateInput>
  }

  /**
   * UserVisit delete
   */
  export type UserVisitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
    /**
     * Filter which UserVisit to delete.
     */
    where: UserVisitWhereUniqueInput
  }

  /**
   * UserVisit deleteMany
   */
  export type UserVisitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserVisits to delete
     */
    where?: UserVisitWhereInput
  }

  /**
   * UserVisit without action
   */
  export type UserVisitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserVisit
     */
    select?: UserVisitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserVisitInclude<ExtArgs> | null
  }


  /**
   * Model UserStarred
   */

  export type AggregateUserStarred = {
    _count: UserStarredCountAggregateOutputType | null
    _min: UserStarredMinAggregateOutputType | null
    _max: UserStarredMaxAggregateOutputType | null
  }

  export type UserStarredMinAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    projectName: string | null
    appId: string | null
    appName: string | null
    createdAt: Date | null
  }

  export type UserStarredMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    projectId: string | null
    projectName: string | null
    appId: string | null
    appName: string | null
    createdAt: Date | null
  }

  export type UserStarredCountAggregateOutputType = {
    id: number
    userId: number
    projectId: number
    projectName: number
    appId: number
    appName: number
    createdAt: number
    _all: number
  }


  export type UserStarredMinAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    projectName?: true
    appId?: true
    appName?: true
    createdAt?: true
  }

  export type UserStarredMaxAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    projectName?: true
    appId?: true
    appName?: true
    createdAt?: true
  }

  export type UserStarredCountAggregateInputType = {
    id?: true
    userId?: true
    projectId?: true
    projectName?: true
    appId?: true
    appName?: true
    createdAt?: true
    _all?: true
  }

  export type UserStarredAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStarred to aggregate.
     */
    where?: UserStarredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStarreds to fetch.
     */
    orderBy?: UserStarredOrderByWithRelationInput | UserStarredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserStarredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStarreds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStarreds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserStarreds
    **/
    _count?: true | UserStarredCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserStarredMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserStarredMaxAggregateInputType
  }

  export type GetUserStarredAggregateType<T extends UserStarredAggregateArgs> = {
        [P in keyof T & keyof AggregateUserStarred]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserStarred[P]>
      : GetScalarType<T[P], AggregateUserStarred[P]>
  }




  export type UserStarredGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserStarredWhereInput
    orderBy?: UserStarredOrderByWithAggregationInput | UserStarredOrderByWithAggregationInput[]
    by: UserStarredScalarFieldEnum[] | UserStarredScalarFieldEnum
    having?: UserStarredScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserStarredCountAggregateInputType | true
    _min?: UserStarredMinAggregateInputType
    _max?: UserStarredMaxAggregateInputType
  }

  export type UserStarredGroupByOutputType = {
    id: string
    userId: string
    projectId: string
    projectName: string
    appId: string | null
    appName: string | null
    createdAt: Date
    _count: UserStarredCountAggregateOutputType | null
    _min: UserStarredMinAggregateOutputType | null
    _max: UserStarredMaxAggregateOutputType | null
  }

  type GetUserStarredGroupByPayload<T extends UserStarredGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserStarredGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserStarredGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserStarredGroupByOutputType[P]>
            : GetScalarType<T[P], UserStarredGroupByOutputType[P]>
        }
      >
    >


  export type UserStarredSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    projectName?: boolean
    appId?: boolean
    appName?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStarred"]>

  export type UserStarredSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    projectId?: boolean
    projectName?: boolean
    appId?: boolean
    appName?: boolean
    createdAt?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userStarred"]>

  export type UserStarredSelectScalar = {
    id?: boolean
    userId?: boolean
    projectId?: boolean
    projectName?: boolean
    appId?: boolean
    appName?: boolean
    createdAt?: boolean
  }

  export type UserStarredInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UserStarredIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UserStarredPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserStarred"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      projectId: string
      projectName: string
      appId: string | null
      appName: string | null
      createdAt: Date
    }, ExtArgs["result"]["userStarred"]>
    composites: {}
  }

  type UserStarredGetPayload<S extends boolean | null | undefined | UserStarredDefaultArgs> = $Result.GetResult<Prisma.$UserStarredPayload, S>

  type UserStarredCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserStarredFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserStarredCountAggregateInputType | true
    }

  export interface UserStarredDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserStarred'], meta: { name: 'UserStarred' } }
    /**
     * Find zero or one UserStarred that matches the filter.
     * @param {UserStarredFindUniqueArgs} args - Arguments to find a UserStarred
     * @example
     * // Get one UserStarred
     * const userStarred = await prisma.userStarred.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserStarredFindUniqueArgs>(args: SelectSubset<T, UserStarredFindUniqueArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserStarred that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserStarredFindUniqueOrThrowArgs} args - Arguments to find a UserStarred
     * @example
     * // Get one UserStarred
     * const userStarred = await prisma.userStarred.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserStarredFindUniqueOrThrowArgs>(args: SelectSubset<T, UserStarredFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserStarred that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStarredFindFirstArgs} args - Arguments to find a UserStarred
     * @example
     * // Get one UserStarred
     * const userStarred = await prisma.userStarred.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserStarredFindFirstArgs>(args?: SelectSubset<T, UserStarredFindFirstArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserStarred that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStarredFindFirstOrThrowArgs} args - Arguments to find a UserStarred
     * @example
     * // Get one UserStarred
     * const userStarred = await prisma.userStarred.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserStarredFindFirstOrThrowArgs>(args?: SelectSubset<T, UserStarredFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserStarreds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStarredFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserStarreds
     * const userStarreds = await prisma.userStarred.findMany()
     * 
     * // Get first 10 UserStarreds
     * const userStarreds = await prisma.userStarred.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userStarredWithIdOnly = await prisma.userStarred.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserStarredFindManyArgs>(args?: SelectSubset<T, UserStarredFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserStarred.
     * @param {UserStarredCreateArgs} args - Arguments to create a UserStarred.
     * @example
     * // Create one UserStarred
     * const UserStarred = await prisma.userStarred.create({
     *   data: {
     *     // ... data to create a UserStarred
     *   }
     * })
     * 
     */
    create<T extends UserStarredCreateArgs>(args: SelectSubset<T, UserStarredCreateArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserStarreds.
     * @param {UserStarredCreateManyArgs} args - Arguments to create many UserStarreds.
     * @example
     * // Create many UserStarreds
     * const userStarred = await prisma.userStarred.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserStarredCreateManyArgs>(args?: SelectSubset<T, UserStarredCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserStarreds and returns the data saved in the database.
     * @param {UserStarredCreateManyAndReturnArgs} args - Arguments to create many UserStarreds.
     * @example
     * // Create many UserStarreds
     * const userStarred = await prisma.userStarred.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserStarreds and only return the `id`
     * const userStarredWithIdOnly = await prisma.userStarred.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserStarredCreateManyAndReturnArgs>(args?: SelectSubset<T, UserStarredCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserStarred.
     * @param {UserStarredDeleteArgs} args - Arguments to delete one UserStarred.
     * @example
     * // Delete one UserStarred
     * const UserStarred = await prisma.userStarred.delete({
     *   where: {
     *     // ... filter to delete one UserStarred
     *   }
     * })
     * 
     */
    delete<T extends UserStarredDeleteArgs>(args: SelectSubset<T, UserStarredDeleteArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserStarred.
     * @param {UserStarredUpdateArgs} args - Arguments to update one UserStarred.
     * @example
     * // Update one UserStarred
     * const userStarred = await prisma.userStarred.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserStarredUpdateArgs>(args: SelectSubset<T, UserStarredUpdateArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserStarreds.
     * @param {UserStarredDeleteManyArgs} args - Arguments to filter UserStarreds to delete.
     * @example
     * // Delete a few UserStarreds
     * const { count } = await prisma.userStarred.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserStarredDeleteManyArgs>(args?: SelectSubset<T, UserStarredDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserStarreds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStarredUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserStarreds
     * const userStarred = await prisma.userStarred.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserStarredUpdateManyArgs>(args: SelectSubset<T, UserStarredUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserStarred.
     * @param {UserStarredUpsertArgs} args - Arguments to update or create a UserStarred.
     * @example
     * // Update or create a UserStarred
     * const userStarred = await prisma.userStarred.upsert({
     *   create: {
     *     // ... data to create a UserStarred
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserStarred we want to update
     *   }
     * })
     */
    upsert<T extends UserStarredUpsertArgs>(args: SelectSubset<T, UserStarredUpsertArgs<ExtArgs>>): Prisma__UserStarredClient<$Result.GetResult<Prisma.$UserStarredPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserStarreds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStarredCountArgs} args - Arguments to filter UserStarreds to count.
     * @example
     * // Count the number of UserStarreds
     * const count = await prisma.userStarred.count({
     *   where: {
     *     // ... the filter for the UserStarreds we want to count
     *   }
     * })
    **/
    count<T extends UserStarredCountArgs>(
      args?: Subset<T, UserStarredCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserStarredCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserStarred.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStarredAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserStarredAggregateArgs>(args: Subset<T, UserStarredAggregateArgs>): Prisma.PrismaPromise<GetUserStarredAggregateType<T>>

    /**
     * Group by UserStarred.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserStarredGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserStarredGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserStarredGroupByArgs['orderBy'] }
        : { orderBy?: UserStarredGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserStarredGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserStarredGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserStarred model
   */
  readonly fields: UserStarredFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserStarred.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserStarredClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserStarred model
   */ 
  interface UserStarredFieldRefs {
    readonly id: FieldRef<"UserStarred", 'String'>
    readonly userId: FieldRef<"UserStarred", 'String'>
    readonly projectId: FieldRef<"UserStarred", 'String'>
    readonly projectName: FieldRef<"UserStarred", 'String'>
    readonly appId: FieldRef<"UserStarred", 'String'>
    readonly appName: FieldRef<"UserStarred", 'String'>
    readonly createdAt: FieldRef<"UserStarred", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserStarred findUnique
   */
  export type UserStarredFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * Filter, which UserStarred to fetch.
     */
    where: UserStarredWhereUniqueInput
  }

  /**
   * UserStarred findUniqueOrThrow
   */
  export type UserStarredFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * Filter, which UserStarred to fetch.
     */
    where: UserStarredWhereUniqueInput
  }

  /**
   * UserStarred findFirst
   */
  export type UserStarredFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * Filter, which UserStarred to fetch.
     */
    where?: UserStarredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStarreds to fetch.
     */
    orderBy?: UserStarredOrderByWithRelationInput | UserStarredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStarreds.
     */
    cursor?: UserStarredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStarreds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStarreds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStarreds.
     */
    distinct?: UserStarredScalarFieldEnum | UserStarredScalarFieldEnum[]
  }

  /**
   * UserStarred findFirstOrThrow
   */
  export type UserStarredFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * Filter, which UserStarred to fetch.
     */
    where?: UserStarredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStarreds to fetch.
     */
    orderBy?: UserStarredOrderByWithRelationInput | UserStarredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserStarreds.
     */
    cursor?: UserStarredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStarreds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStarreds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserStarreds.
     */
    distinct?: UserStarredScalarFieldEnum | UserStarredScalarFieldEnum[]
  }

  /**
   * UserStarred findMany
   */
  export type UserStarredFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * Filter, which UserStarreds to fetch.
     */
    where?: UserStarredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserStarreds to fetch.
     */
    orderBy?: UserStarredOrderByWithRelationInput | UserStarredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserStarreds.
     */
    cursor?: UserStarredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserStarreds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserStarreds.
     */
    skip?: number
    distinct?: UserStarredScalarFieldEnum | UserStarredScalarFieldEnum[]
  }

  /**
   * UserStarred create
   */
  export type UserStarredCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * The data needed to create a UserStarred.
     */
    data: XOR<UserStarredCreateInput, UserStarredUncheckedCreateInput>
  }

  /**
   * UserStarred createMany
   */
  export type UserStarredCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserStarreds.
     */
    data: UserStarredCreateManyInput | UserStarredCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserStarred createManyAndReturn
   */
  export type UserStarredCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserStarreds.
     */
    data: UserStarredCreateManyInput | UserStarredCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserStarred update
   */
  export type UserStarredUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * The data needed to update a UserStarred.
     */
    data: XOR<UserStarredUpdateInput, UserStarredUncheckedUpdateInput>
    /**
     * Choose, which UserStarred to update.
     */
    where: UserStarredWhereUniqueInput
  }

  /**
   * UserStarred updateMany
   */
  export type UserStarredUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserStarreds.
     */
    data: XOR<UserStarredUpdateManyMutationInput, UserStarredUncheckedUpdateManyInput>
    /**
     * Filter which UserStarreds to update
     */
    where?: UserStarredWhereInput
  }

  /**
   * UserStarred upsert
   */
  export type UserStarredUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * The filter to search for the UserStarred to update in case it exists.
     */
    where: UserStarredWhereUniqueInput
    /**
     * In case the UserStarred found by the `where` argument doesn't exist, create a new UserStarred with this data.
     */
    create: XOR<UserStarredCreateInput, UserStarredUncheckedCreateInput>
    /**
     * In case the UserStarred was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserStarredUpdateInput, UserStarredUncheckedUpdateInput>
  }

  /**
   * UserStarred delete
   */
  export type UserStarredDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
    /**
     * Filter which UserStarred to delete.
     */
    where: UserStarredWhereUniqueInput
  }

  /**
   * UserStarred deleteMany
   */
  export type UserStarredDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserStarreds to delete
     */
    where?: UserStarredWhereInput
  }

  /**
   * UserStarred without action
   */
  export type UserStarredDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserStarred
     */
    select?: UserStarredSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserStarredInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    read: boolean | null
    projectId: string | null
    taskId: string | null
    commentId: string | null
    actorId: string | null
    actorName: string | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    title: string | null
    message: string | null
    read: boolean | null
    projectId: string | null
    taskId: string | null
    commentId: string | null
    actorId: string | null
    actorName: string | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    read: number
    projectId: number
    taskId: number
    commentId: number
    actorId: number
    actorName: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    projectId?: true
    taskId?: true
    commentId?: true
    actorId?: true
    actorName?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    projectId?: true
    taskId?: true
    commentId?: true
    actorId?: true
    actorName?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    read?: true
    projectId?: true
    taskId?: true
    commentId?: true
    actorId?: true
    actorName?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    read: boolean
    projectId: string | null
    taskId: string | null
    commentId: string | null
    actorId: string
    actorName: string
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    projectId?: boolean
    taskId?: boolean
    commentId?: boolean
    actorId?: boolean
    actorName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    projectId?: boolean
    taskId?: boolean
    commentId?: boolean
    actorId?: boolean
    actorName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    projectId?: boolean
    taskId?: boolean
    commentId?: boolean
    actorId?: boolean
    actorName?: boolean
    createdAt?: boolean
  }


  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      title: string
      message: string
      read: boolean
      projectId: string | null
      taskId: string | null
      commentId: string | null
      actorId: string
      actorName: string
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly projectId: FieldRef<"Notification", 'String'>
    readonly taskId: FieldRef<"Notification", 'String'>
    readonly commentId: FieldRef<"Notification", 'String'>
    readonly actorId: FieldRef<"Notification", 'String'>
    readonly actorName: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    clerkOrgId: 'clerkOrgId',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OrganizationMemberScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    organizationId: 'organizationId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type OrganizationMemberScalarFieldEnum = (typeof OrganizationMemberScalarFieldEnum)[keyof typeof OrganizationMemberScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
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

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ProjectMemberScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    clerkUserId: 'clerkUserId',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type ProjectMemberScalarFieldEnum = (typeof ProjectMemberScalarFieldEnum)[keyof typeof ProjectMemberScalarFieldEnum]


  export const AppScalarFieldEnum: {
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

  export type AppScalarFieldEnum = (typeof AppScalarFieldEnum)[keyof typeof AppScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    appId: 'appId',
    order: 'order',
    taskCounter: 'taskCounter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const TaskScalarFieldEnum: {
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

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskHistoryScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    actorId: 'actorId',
    actorName: 'actorName',
    field: 'field',
    oldValue: 'oldValue',
    newValue: 'newValue',
    createdAt: 'createdAt'
  };

  export type TaskHistoryScalarFieldEnum = (typeof TaskHistoryScalarFieldEnum)[keyof typeof TaskHistoryScalarFieldEnum]


  export const BugSheetScalarFieldEnum: {
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

  export type BugSheetScalarFieldEnum = (typeof BugSheetScalarFieldEnum)[keyof typeof BugSheetScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    content: 'content',
    authorId: 'authorId',
    authorName: 'authorName',
    taskId: 'taskId',
    bugSheetId: 'bugSheetId',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
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

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const UserVisitScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    projectName: 'projectName',
    appId: 'appId',
    appName: 'appName',
    viewType: 'viewType',
    visitedAt: 'visitedAt'
  };

  export type UserVisitScalarFieldEnum = (typeof UserVisitScalarFieldEnum)[keyof typeof UserVisitScalarFieldEnum]


  export const UserStarredScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    projectId: 'projectId',
    projectName: 'projectName',
    appId: 'appId',
    appName: 'appName',
    createdAt: 'createdAt'
  };

  export type UserStarredScalarFieldEnum = (typeof UserStarredScalarFieldEnum)[keyof typeof UserStarredScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
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

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'AppType'
   */
  export type EnumAppTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppType'>
    


  /**
   * Reference to a field of type 'AppType[]'
   */
  export type ListEnumAppTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TaskType'
   */
  export type EnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType'>
    


  /**
   * Reference to a field of type 'TaskType[]'
   */
  export type ListEnumTaskTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TaskType[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'ActivityAction'
   */
  export type EnumActivityActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityAction'>
    


  /**
   * Reference to a field of type 'ActivityAction[]'
   */
  export type ListEnumActivityActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivityAction[]'>
    


  /**
   * Reference to a field of type 'EntityType'
   */
  export type EnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType'>
    


  /**
   * Reference to a field of type 'EntityType[]'
   */
  export type ListEnumEntityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EntityType[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    clerkOrgId?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    projects?: ProjectListRelationFilter
    members?: OrganizationMemberListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projects?: ProjectOrderByRelationAggregateInput
    members?: OrganizationMemberOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkOrgId?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    projects?: ProjectListRelationFilter
    members?: OrganizationMemberListRelationFilter
  }, "id" | "clerkOrgId">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    clerkOrgId?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OrganizationMemberWhereInput = {
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    clerkUserId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type OrganizationMemberOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
  }

  export type OrganizationMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId_organizationId?: OrganizationMemberClerkUserIdOrganizationIdCompoundUniqueInput
    AND?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    OR?: OrganizationMemberWhereInput[]
    NOT?: OrganizationMemberWhereInput | OrganizationMemberWhereInput[]
    clerkUserId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"OrganizationMember"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "clerkUserId_organizationId">

  export type OrganizationMemberOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: OrganizationMemberCountOrderByAggregateInput
    _max?: OrganizationMemberMaxOrderByAggregateInput
    _min?: OrganizationMemberMinOrderByAggregateInput
  }

  export type OrganizationMemberScalarWhereWithAggregatesInput = {
    AND?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    OR?: OrganizationMemberScalarWhereWithAggregatesInput[]
    NOT?: OrganizationMemberScalarWhereWithAggregatesInput | OrganizationMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrganizationMember"> | string
    clerkUserId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    organizationId?: StringWithAggregatesFilter<"OrganizationMember"> | string
    role?: EnumRoleWithAggregatesFilter<"OrganizationMember"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"OrganizationMember"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    clientOrgId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    createdBy?: StringNullableFilter<"Project"> | string | null
    creatorName?: StringNullableFilter<"Project"> | string | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    apps?: AppListRelationFilter
    members?: ProjectMemberListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    userVisits?: UserVisitListRelationFilter
    userStarred?: UserStarredListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    clientOrgId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    organization?: OrganizationOrderByWithRelationInput
    apps?: AppOrderByRelationAggregateInput
    members?: ProjectMemberOrderByRelationAggregateInput
    activityLogs?: ActivityLogOrderByRelationAggregateInput
    userVisits?: UserVisitOrderByRelationAggregateInput
    userStarred?: UserStarredOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    clientOrgId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    createdBy?: StringNullableFilter<"Project"> | string | null
    creatorName?: StringNullableFilter<"Project"> | string | null
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    apps?: AppListRelationFilter
    members?: ProjectMemberListRelationFilter
    activityLogs?: ActivityLogListRelationFilter
    userVisits?: UserVisitListRelationFilter
    userStarred?: UserStarredListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    organizationId?: SortOrder
    clientOrgId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringNullableWithAggregatesFilter<"Project"> | string | null
    organizationId?: StringWithAggregatesFilter<"Project"> | string
    clientOrgId?: StringNullableWithAggregatesFilter<"Project"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Project"> | string | null
    creatorName?: StringNullableWithAggregatesFilter<"Project"> | string | null
  }

  export type ProjectMemberWhereInput = {
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    clerkUserId?: StringFilter<"ProjectMember"> | string
    name?: StringFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ProjectMemberOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ProjectMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_clerkUserId?: ProjectMemberProjectIdClerkUserIdCompoundUniqueInput
    AND?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    OR?: ProjectMemberWhereInput[]
    NOT?: ProjectMemberWhereInput | ProjectMemberWhereInput[]
    projectId?: StringFilter<"ProjectMember"> | string
    clerkUserId?: StringFilter<"ProjectMember"> | string
    name?: StringFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "projectId_clerkUserId">

  export type ProjectMemberOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: ProjectMemberCountOrderByAggregateInput
    _max?: ProjectMemberMaxOrderByAggregateInput
    _min?: ProjectMemberMinOrderByAggregateInput
  }

  export type ProjectMemberScalarWhereWithAggregatesInput = {
    AND?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    OR?: ProjectMemberScalarWhereWithAggregatesInput[]
    NOT?: ProjectMemberScalarWhereWithAggregatesInput | ProjectMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProjectMember"> | string
    projectId?: StringWithAggregatesFilter<"ProjectMember"> | string
    clerkUserId?: StringWithAggregatesFilter<"ProjectMember"> | string
    name?: StringWithAggregatesFilter<"ProjectMember"> | string
    role?: EnumRoleWithAggregatesFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"ProjectMember"> | Date | string
  }

  export type AppWhereInput = {
    AND?: AppWhereInput | AppWhereInput[]
    OR?: AppWhereInput[]
    NOT?: AppWhereInput | AppWhereInput[]
    id?: StringFilter<"App"> | string
    name?: StringFilter<"App"> | string
    type?: EnumAppTypeFilter<"App"> | $Enums.AppType
    icon?: StringNullableFilter<"App"> | string | null
    projectId?: StringFilter<"App"> | string
    createdAt?: DateTimeFilter<"App"> | Date | string
    updatedAt?: DateTimeFilter<"App"> | Date | string
    createdBy?: StringNullableFilter<"App"> | string | null
    creatorName?: StringNullableFilter<"App"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    modules?: ModuleListRelationFilter
    bugSheets?: BugSheetListRelationFilter
  }

  export type AppOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    project?: ProjectOrderByWithRelationInput
    modules?: ModuleOrderByRelationAggregateInput
    bugSheets?: BugSheetOrderByRelationAggregateInput
  }

  export type AppWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppWhereInput | AppWhereInput[]
    OR?: AppWhereInput[]
    NOT?: AppWhereInput | AppWhereInput[]
    name?: StringFilter<"App"> | string
    type?: EnumAppTypeFilter<"App"> | $Enums.AppType
    icon?: StringNullableFilter<"App"> | string | null
    projectId?: StringFilter<"App"> | string
    createdAt?: DateTimeFilter<"App"> | Date | string
    updatedAt?: DateTimeFilter<"App"> | Date | string
    createdBy?: StringNullableFilter<"App"> | string | null
    creatorName?: StringNullableFilter<"App"> | string | null
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    modules?: ModuleListRelationFilter
    bugSheets?: BugSheetListRelationFilter
  }, "id">

  export type AppOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon?: SortOrderInput | SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    _count?: AppCountOrderByAggregateInput
    _max?: AppMaxOrderByAggregateInput
    _min?: AppMinOrderByAggregateInput
  }

  export type AppScalarWhereWithAggregatesInput = {
    AND?: AppScalarWhereWithAggregatesInput | AppScalarWhereWithAggregatesInput[]
    OR?: AppScalarWhereWithAggregatesInput[]
    NOT?: AppScalarWhereWithAggregatesInput | AppScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"App"> | string
    name?: StringWithAggregatesFilter<"App"> | string
    type?: EnumAppTypeWithAggregatesFilter<"App"> | $Enums.AppType
    icon?: StringNullableWithAggregatesFilter<"App"> | string | null
    projectId?: StringWithAggregatesFilter<"App"> | string
    createdAt?: DateTimeWithAggregatesFilter<"App"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"App"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"App"> | string | null
    creatorName?: StringNullableWithAggregatesFilter<"App"> | string | null
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    name?: StringFilter<"Module"> | string
    appId?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    taskCounter?: IntFilter<"Module"> | number
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    app?: XOR<AppScalarRelationFilter, AppWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    appId?: SortOrder
    order?: SortOrder
    taskCounter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    app?: AppOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    name?: StringFilter<"Module"> | string
    appId?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    taskCounter?: IntFilter<"Module"> | number
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    app?: XOR<AppScalarRelationFilter, AppWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    appId?: SortOrder
    order?: SortOrder
    taskCounter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    name?: StringWithAggregatesFilter<"Module"> | string
    appId?: StringWithAggregatesFilter<"Module"> | string
    order?: IntWithAggregatesFilter<"Module"> | number
    taskCounter?: IntWithAggregatesFilter<"Module"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    taskCode?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    assignedTo?: StringNullableFilter<"Task"> | string | null
    remarks?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    parentId?: StringNullableFilter<"Task"> | string | null
    moduleId?: StringFilter<"Task"> | string
    order?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: StringNullableFilter<"Task"> | string | null
    creatorName?: StringNullableFilter<"Task"> | string | null
    reporterId?: StringNullableFilter<"Task"> | string | null
    reporterName?: StringNullableFilter<"Task"> | string | null
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    subtasks?: TaskListRelationFilter
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    comments?: CommentListRelationFilter
    history?: TaskHistoryListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    taskCode?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    moduleId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    reporterId?: SortOrderInput | SortOrder
    reporterName?: SortOrderInput | SortOrder
    parent?: TaskOrderByWithRelationInput
    subtasks?: TaskOrderByRelationAggregateInput
    module?: ModuleOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
    history?: TaskHistoryOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    taskCode?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    assignedTo?: StringNullableFilter<"Task"> | string | null
    remarks?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    parentId?: StringNullableFilter<"Task"> | string | null
    moduleId?: StringFilter<"Task"> | string
    order?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: StringNullableFilter<"Task"> | string | null
    creatorName?: StringNullableFilter<"Task"> | string | null
    reporterId?: StringNullableFilter<"Task"> | string | null
    reporterName?: StringNullableFilter<"Task"> | string | null
    parent?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    subtasks?: TaskListRelationFilter
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    comments?: CommentListRelationFilter
    history?: TaskHistoryListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskCode?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    moduleId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    reporterId?: SortOrderInput | SortOrder
    reporterName?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    taskCode?: StringNullableWithAggregatesFilter<"Task"> | string | null
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    type?: EnumTaskTypeWithAggregatesFilter<"Task"> | $Enums.TaskType
    priority?: EnumPriorityWithAggregatesFilter<"Task"> | $Enums.Priority
    status?: EnumStatusWithAggregatesFilter<"Task"> | $Enums.Status
    assignedTo?: StringNullableWithAggregatesFilter<"Task"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Task"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    parentId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    moduleId?: StringWithAggregatesFilter<"Task"> | string
    order?: IntWithAggregatesFilter<"Task"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"Task"> | string | null
    creatorName?: StringNullableWithAggregatesFilter<"Task"> | string | null
    reporterId?: StringNullableWithAggregatesFilter<"Task"> | string | null
    reporterName?: StringNullableWithAggregatesFilter<"Task"> | string | null
  }

  export type TaskHistoryWhereInput = {
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    id?: StringFilter<"TaskHistory"> | string
    taskId?: StringFilter<"TaskHistory"> | string
    actorId?: StringFilter<"TaskHistory"> | string
    actorName?: StringFilter<"TaskHistory"> | string
    field?: StringFilter<"TaskHistory"> | string
    oldValue?: StringNullableFilter<"TaskHistory"> | string | null
    newValue?: StringNullableFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type TaskHistoryOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    field?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
  }

  export type TaskHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    taskId?: StringFilter<"TaskHistory"> | string
    actorId?: StringFilter<"TaskHistory"> | string
    actorName?: StringFilter<"TaskHistory"> | string
    field?: StringFilter<"TaskHistory"> | string
    oldValue?: StringNullableFilter<"TaskHistory"> | string | null
    newValue?: StringNullableFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type TaskHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    field?: SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TaskHistoryCountOrderByAggregateInput
    _max?: TaskHistoryMaxOrderByAggregateInput
    _min?: TaskHistoryMinOrderByAggregateInput
  }

  export type TaskHistoryScalarWhereWithAggregatesInput = {
    AND?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    OR?: TaskHistoryScalarWhereWithAggregatesInput[]
    NOT?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TaskHistory"> | string
    taskId?: StringWithAggregatesFilter<"TaskHistory"> | string
    actorId?: StringWithAggregatesFilter<"TaskHistory"> | string
    actorName?: StringWithAggregatesFilter<"TaskHistory"> | string
    field?: StringWithAggregatesFilter<"TaskHistory"> | string
    oldValue?: StringNullableWithAggregatesFilter<"TaskHistory"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TaskHistory"> | Date | string
  }

  export type BugSheetWhereInput = {
    AND?: BugSheetWhereInput | BugSheetWhereInput[]
    OR?: BugSheetWhereInput[]
    NOT?: BugSheetWhereInput | BugSheetWhereInput[]
    id?: StringFilter<"BugSheet"> | string
    module?: StringFilter<"BugSheet"> | string
    description?: StringFilter<"BugSheet"> | string
    status?: EnumStatusFilter<"BugSheet"> | $Enums.Status
    priority?: EnumPriorityFilter<"BugSheet"> | $Enums.Priority
    assignedTo?: StringNullableFilter<"BugSheet"> | string | null
    remarks?: StringNullableFilter<"BugSheet"> | string | null
    appId?: StringFilter<"BugSheet"> | string
    createdAt?: DateTimeFilter<"BugSheet"> | Date | string
    updatedAt?: DateTimeFilter<"BugSheet"> | Date | string
    createdBy?: StringNullableFilter<"BugSheet"> | string | null
    creatorName?: StringNullableFilter<"BugSheet"> | string | null
    app?: XOR<AppScalarRelationFilter, AppWhereInput>
    comments?: CommentListRelationFilter
  }

  export type BugSheetOrderByWithRelationInput = {
    id?: SortOrder
    module?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    appId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    app?: AppOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type BugSheetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BugSheetWhereInput | BugSheetWhereInput[]
    OR?: BugSheetWhereInput[]
    NOT?: BugSheetWhereInput | BugSheetWhereInput[]
    module?: StringFilter<"BugSheet"> | string
    description?: StringFilter<"BugSheet"> | string
    status?: EnumStatusFilter<"BugSheet"> | $Enums.Status
    priority?: EnumPriorityFilter<"BugSheet"> | $Enums.Priority
    assignedTo?: StringNullableFilter<"BugSheet"> | string | null
    remarks?: StringNullableFilter<"BugSheet"> | string | null
    appId?: StringFilter<"BugSheet"> | string
    createdAt?: DateTimeFilter<"BugSheet"> | Date | string
    updatedAt?: DateTimeFilter<"BugSheet"> | Date | string
    createdBy?: StringNullableFilter<"BugSheet"> | string | null
    creatorName?: StringNullableFilter<"BugSheet"> | string | null
    app?: XOR<AppScalarRelationFilter, AppWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type BugSheetOrderByWithAggregationInput = {
    id?: SortOrder
    module?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    appId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    creatorName?: SortOrderInput | SortOrder
    _count?: BugSheetCountOrderByAggregateInput
    _max?: BugSheetMaxOrderByAggregateInput
    _min?: BugSheetMinOrderByAggregateInput
  }

  export type BugSheetScalarWhereWithAggregatesInput = {
    AND?: BugSheetScalarWhereWithAggregatesInput | BugSheetScalarWhereWithAggregatesInput[]
    OR?: BugSheetScalarWhereWithAggregatesInput[]
    NOT?: BugSheetScalarWhereWithAggregatesInput | BugSheetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BugSheet"> | string
    module?: StringWithAggregatesFilter<"BugSheet"> | string
    description?: StringWithAggregatesFilter<"BugSheet"> | string
    status?: EnumStatusWithAggregatesFilter<"BugSheet"> | $Enums.Status
    priority?: EnumPriorityWithAggregatesFilter<"BugSheet"> | $Enums.Priority
    assignedTo?: StringNullableWithAggregatesFilter<"BugSheet"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"BugSheet"> | string | null
    appId?: StringWithAggregatesFilter<"BugSheet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BugSheet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BugSheet"> | Date | string
    createdBy?: StringNullableWithAggregatesFilter<"BugSheet"> | string | null
    creatorName?: StringNullableWithAggregatesFilter<"BugSheet"> | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    authorName?: StringFilter<"Comment"> | string
    taskId?: StringNullableFilter<"Comment"> | string | null
    bugSheetId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    bugSheet?: XOR<BugSheetNullableScalarRelationFilter, BugSheetWhereInput> | null
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    taskId?: SortOrderInput | SortOrder
    bugSheetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    task?: TaskOrderByWithRelationInput
    bugSheet?: BugSheetOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    content?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    authorName?: StringFilter<"Comment"> | string
    taskId?: StringNullableFilter<"Comment"> | string | null
    bugSheetId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    task?: XOR<TaskNullableScalarRelationFilter, TaskWhereInput> | null
    bugSheet?: XOR<BugSheetNullableScalarRelationFilter, BugSheetWhereInput> | null
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    taskId?: SortOrderInput | SortOrder
    bugSheetId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    content?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    authorName?: StringWithAggregatesFilter<"Comment"> | string
    taskId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    bugSheetId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    action?: EnumActivityActionFilter<"ActivityLog"> | $Enums.ActivityAction
    field?: StringNullableFilter<"ActivityLog"> | string | null
    oldValue?: StringNullableFilter<"ActivityLog"> | string | null
    newValue?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    userName?: StringFilter<"ActivityLog"> | string
    entityType?: EnumEntityTypeFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: StringFilter<"ActivityLog"> | string
    entityTitle?: StringFilter<"ActivityLog"> | string
    projectId?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    userId?: SortOrder
    userName?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    entityTitle?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    action?: EnumActivityActionFilter<"ActivityLog"> | $Enums.ActivityAction
    field?: StringNullableFilter<"ActivityLog"> | string | null
    oldValue?: StringNullableFilter<"ActivityLog"> | string | null
    newValue?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    userName?: StringFilter<"ActivityLog"> | string
    entityType?: EnumEntityTypeFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: StringFilter<"ActivityLog"> | string
    entityTitle?: StringFilter<"ActivityLog"> | string
    projectId?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrderInput | SortOrder
    oldValue?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    userId?: SortOrder
    userName?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    entityTitle?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivityLog"> | string
    action?: EnumActivityActionWithAggregatesFilter<"ActivityLog"> | $Enums.ActivityAction
    field?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    oldValue?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    newValue?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    userId?: StringWithAggregatesFilter<"ActivityLog"> | string
    userName?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityType?: EnumEntityTypeWithAggregatesFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: StringWithAggregatesFilter<"ActivityLog"> | string
    entityTitle?: StringWithAggregatesFilter<"ActivityLog"> | string
    projectId?: StringWithAggregatesFilter<"ActivityLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
  }

  export type UserVisitWhereInput = {
    AND?: UserVisitWhereInput | UserVisitWhereInput[]
    OR?: UserVisitWhereInput[]
    NOT?: UserVisitWhereInput | UserVisitWhereInput[]
    id?: StringFilter<"UserVisit"> | string
    userId?: StringFilter<"UserVisit"> | string
    projectId?: StringFilter<"UserVisit"> | string
    projectName?: StringFilter<"UserVisit"> | string
    appId?: StringNullableFilter<"UserVisit"> | string | null
    appName?: StringNullableFilter<"UserVisit"> | string | null
    viewType?: StringNullableFilter<"UserVisit"> | string | null
    visitedAt?: DateTimeFilter<"UserVisit"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type UserVisitOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrderInput | SortOrder
    appName?: SortOrderInput | SortOrder
    viewType?: SortOrderInput | SortOrder
    visitedAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type UserVisitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserVisitWhereInput | UserVisitWhereInput[]
    OR?: UserVisitWhereInput[]
    NOT?: UserVisitWhereInput | UserVisitWhereInput[]
    userId?: StringFilter<"UserVisit"> | string
    projectId?: StringFilter<"UserVisit"> | string
    projectName?: StringFilter<"UserVisit"> | string
    appId?: StringNullableFilter<"UserVisit"> | string | null
    appName?: StringNullableFilter<"UserVisit"> | string | null
    viewType?: StringNullableFilter<"UserVisit"> | string | null
    visitedAt?: DateTimeFilter<"UserVisit"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type UserVisitOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrderInput | SortOrder
    appName?: SortOrderInput | SortOrder
    viewType?: SortOrderInput | SortOrder
    visitedAt?: SortOrder
    _count?: UserVisitCountOrderByAggregateInput
    _max?: UserVisitMaxOrderByAggregateInput
    _min?: UserVisitMinOrderByAggregateInput
  }

  export type UserVisitScalarWhereWithAggregatesInput = {
    AND?: UserVisitScalarWhereWithAggregatesInput | UserVisitScalarWhereWithAggregatesInput[]
    OR?: UserVisitScalarWhereWithAggregatesInput[]
    NOT?: UserVisitScalarWhereWithAggregatesInput | UserVisitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserVisit"> | string
    userId?: StringWithAggregatesFilter<"UserVisit"> | string
    projectId?: StringWithAggregatesFilter<"UserVisit"> | string
    projectName?: StringWithAggregatesFilter<"UserVisit"> | string
    appId?: StringNullableWithAggregatesFilter<"UserVisit"> | string | null
    appName?: StringNullableWithAggregatesFilter<"UserVisit"> | string | null
    viewType?: StringNullableWithAggregatesFilter<"UserVisit"> | string | null
    visitedAt?: DateTimeWithAggregatesFilter<"UserVisit"> | Date | string
  }

  export type UserStarredWhereInput = {
    AND?: UserStarredWhereInput | UserStarredWhereInput[]
    OR?: UserStarredWhereInput[]
    NOT?: UserStarredWhereInput | UserStarredWhereInput[]
    id?: StringFilter<"UserStarred"> | string
    userId?: StringFilter<"UserStarred"> | string
    projectId?: StringFilter<"UserStarred"> | string
    projectName?: StringFilter<"UserStarred"> | string
    appId?: StringNullableFilter<"UserStarred"> | string | null
    appName?: StringNullableFilter<"UserStarred"> | string | null
    createdAt?: DateTimeFilter<"UserStarred"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type UserStarredOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrderInput | SortOrder
    appName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type UserStarredWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_projectId_appId?: UserStarredUserIdProjectIdAppIdCompoundUniqueInput
    AND?: UserStarredWhereInput | UserStarredWhereInput[]
    OR?: UserStarredWhereInput[]
    NOT?: UserStarredWhereInput | UserStarredWhereInput[]
    userId?: StringFilter<"UserStarred"> | string
    projectId?: StringFilter<"UserStarred"> | string
    projectName?: StringFilter<"UserStarred"> | string
    appId?: StringNullableFilter<"UserStarred"> | string | null
    appName?: StringNullableFilter<"UserStarred"> | string | null
    createdAt?: DateTimeFilter<"UserStarred"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "userId_projectId_appId">

  export type UserStarredOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrderInput | SortOrder
    appName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserStarredCountOrderByAggregateInput
    _max?: UserStarredMaxOrderByAggregateInput
    _min?: UserStarredMinOrderByAggregateInput
  }

  export type UserStarredScalarWhereWithAggregatesInput = {
    AND?: UserStarredScalarWhereWithAggregatesInput | UserStarredScalarWhereWithAggregatesInput[]
    OR?: UserStarredScalarWhereWithAggregatesInput[]
    NOT?: UserStarredScalarWhereWithAggregatesInput | UserStarredScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserStarred"> | string
    userId?: StringWithAggregatesFilter<"UserStarred"> | string
    projectId?: StringWithAggregatesFilter<"UserStarred"> | string
    projectName?: StringWithAggregatesFilter<"UserStarred"> | string
    appId?: StringNullableWithAggregatesFilter<"UserStarred"> | string | null
    appName?: StringNullableWithAggregatesFilter<"UserStarred"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"UserStarred"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    projectId?: StringNullableFilter<"Notification"> | string | null
    taskId?: StringNullableFilter<"Notification"> | string | null
    commentId?: StringNullableFilter<"Notification"> | string | null
    actorId?: StringFilter<"Notification"> | string
    actorName?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    projectId?: SortOrderInput | SortOrder
    taskId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    projectId?: StringNullableFilter<"Notification"> | string | null
    taskId?: StringNullableFilter<"Notification"> | string | null
    commentId?: StringNullableFilter<"Notification"> | string | null
    actorId?: StringFilter<"Notification"> | string
    actorName?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    projectId?: SortOrderInput | SortOrder
    taskId?: SortOrderInput | SortOrder
    commentId?: SortOrderInput | SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    projectId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    taskId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    commentId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    actorId?: StringWithAggregatesFilter<"Notification"> | string
    actorName?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    clerkOrgId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    clerkOrgId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    clerkOrgId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateInput = {
    id?: string
    clerkUserId: string
    role?: $Enums.Role
    createdAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutMembersInput
  }

  export type OrganizationMemberUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    organizationId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type OrganizationMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutMembersNestedInput
  }

  export type OrganizationMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberCreateManyInput = {
    id?: string
    clerkUserId: string
    organizationId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type OrganizationMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    apps?: AppCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    apps?: AppUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitUncheckedCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    apps?: AppUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    apps?: AppUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUncheckedUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectMemberCreateInput = {
    id?: string
    clerkUserId: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutMembersInput
  }

  export type ProjectMemberUncheckedCreateInput = {
    id?: string
    projectId: string
    clerkUserId: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type ProjectMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutMembersNestedInput
  }

  export type ProjectMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberCreateManyInput = {
    id?: string
    projectId: string
    clerkUserId: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type ProjectMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppCreateInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    project: ProjectCreateNestedOneWithoutAppsInput
    modules?: ModuleCreateNestedManyWithoutAppInput
    bugSheets?: BugSheetCreateNestedManyWithoutAppInput
  }

  export type AppUncheckedCreateInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    modules?: ModuleUncheckedCreateNestedManyWithoutAppInput
    bugSheets?: BugSheetUncheckedCreateNestedManyWithoutAppInput
  }

  export type AppUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutAppsNestedInput
    modules?: ModuleUpdateManyWithoutAppNestedInput
    bugSheets?: BugSheetUpdateManyWithoutAppNestedInput
  }

  export type AppUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    modules?: ModuleUncheckedUpdateManyWithoutAppNestedInput
    bugSheets?: BugSheetUncheckedUpdateManyWithoutAppNestedInput
  }

  export type AppCreateManyInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
  }

  export type AppUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AppUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ModuleCreateInput = {
    id?: string
    name: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    app: AppCreateNestedOneWithoutModulesInput
    tasks?: TaskCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    name: string
    appId: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    app?: AppUpdateOneRequiredWithoutModulesNestedInput
    tasks?: TaskUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    name: string
    appId: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskCreateInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentInput
    module: ModuleCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    parentId?: string | null
    moduleId: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    module?: ModuleUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    parentId?: string | null
    moduleId: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskHistoryCreateInput = {
    id?: string
    actorId: string
    actorName: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
    task: TaskCreateNestedOneWithoutHistoryInput
  }

  export type TaskHistoryUncheckedCreateInput = {
    id?: string
    taskId: string
    actorId: string
    actorName: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type TaskHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryCreateManyInput = {
    id?: string
    taskId: string
    actorId: string
    actorName: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BugSheetCreateInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    app: AppCreateNestedOneWithoutBugSheetsInput
    comments?: CommentCreateNestedManyWithoutBugSheetInput
  }

  export type BugSheetUncheckedCreateInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    appId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutBugSheetInput
  }

  export type BugSheetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    app?: AppUpdateOneRequiredWithoutBugSheetsNestedInput
    comments?: CommentUpdateManyWithoutBugSheetNestedInput
  }

  export type BugSheetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutBugSheetNestedInput
  }

  export type BugSheetCreateManyInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    appId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
  }

  export type BugSheetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BugSheetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentCreateInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    createdAt?: Date | string
    task?: TaskCreateNestedOneWithoutCommentsInput
    bugSheet?: BugSheetCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    taskId?: string | null
    bugSheetId?: string | null
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneWithoutCommentsNestedInput
    bugSheet?: BugSheetUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    bugSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    taskId?: string | null
    bugSheetId?: string | null
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    bugSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateInput = {
    id?: string
    action: $Enums.ActivityAction
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    userId: string
    userName: string
    entityType: $Enums.EntityType
    entityId: string
    entityTitle: string
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutActivityLogsInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: string
    action: $Enums.ActivityAction
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    userId: string
    userName: string
    entityType: $Enums.EntityType
    entityId: string
    entityTitle: string
    projectId: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    entityTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutActivityLogsNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    entityTitle?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogCreateManyInput = {
    id?: string
    action: $Enums.ActivityAction
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    userId: string
    userName: string
    entityType: $Enums.EntityType
    entityId: string
    entityTitle: string
    projectId: string
    createdAt?: Date | string
  }

  export type ActivityLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    entityTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    entityTitle?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVisitCreateInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    viewType?: string | null
    visitedAt?: Date | string
    project: ProjectCreateNestedOneWithoutUserVisitsInput
  }

  export type UserVisitUncheckedCreateInput = {
    id?: string
    userId: string
    projectId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    viewType?: string | null
    visitedAt?: Date | string
  }

  export type UserVisitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    viewType?: NullableStringFieldUpdateOperationsInput | string | null
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutUserVisitsNestedInput
  }

  export type UserVisitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    viewType?: NullableStringFieldUpdateOperationsInput | string | null
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVisitCreateManyInput = {
    id?: string
    userId: string
    projectId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    viewType?: string | null
    visitedAt?: Date | string
  }

  export type UserVisitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    viewType?: NullableStringFieldUpdateOperationsInput | string | null
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVisitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    viewType?: NullableStringFieldUpdateOperationsInput | string | null
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStarredCreateInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    createdAt?: Date | string
    project: ProjectCreateNestedOneWithoutUserStarredInput
  }

  export type UserStarredUncheckedCreateInput = {
    id?: string
    userId: string
    projectId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    createdAt?: Date | string
  }

  export type UserStarredUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutUserStarredNestedInput
  }

  export type UserStarredUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStarredCreateManyInput = {
    id?: string
    userId: string
    projectId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    createdAt?: Date | string
  }

  export type UserStarredUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStarredUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    projectId?: string | null
    taskId?: string | null
    commentId?: string | null
    actorId: string
    actorName: string
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    projectId?: string | null
    taskId?: string | null
    commentId?: string | null
    actorId: string
    actorName: string
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    title: string
    message: string
    read?: boolean
    projectId?: string | null
    taskId?: string | null
    commentId?: string | null
    actorId: string
    actorName: string
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    commentId?: NullableStringFieldUpdateOperationsInput | string | null
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type OrganizationMemberListRelationFilter = {
    every?: OrganizationMemberWhereInput
    some?: OrganizationMemberWhereInput
    none?: OrganizationMemberWhereInput
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    clerkOrgId?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OrganizationMemberClerkUserIdOrganizationIdCompoundUniqueInput = {
    clerkUserId: string
    organizationId: string
  }

  export type OrganizationMemberCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type OrganizationMemberMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    organizationId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AppListRelationFilter = {
    every?: AppWhereInput
    some?: AppWhereInput
    none?: AppWhereInput
  }

  export type ProjectMemberListRelationFilter = {
    every?: ProjectMemberWhereInput
    some?: ProjectMemberWhereInput
    none?: ProjectMemberWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type UserVisitListRelationFilter = {
    every?: UserVisitWhereInput
    some?: UserVisitWhereInput
    none?: UserVisitWhereInput
  }

  export type UserStarredListRelationFilter = {
    every?: UserStarredWhereInput
    some?: UserStarredWhereInput
    none?: UserStarredWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserVisitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserStarredOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    clientOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    clientOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    organizationId?: SortOrder
    clientOrgId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type ProjectMemberProjectIdClerkUserIdCompoundUniqueInput = {
    projectId: string
    clerkUserId: string
  }

  export type ProjectMemberCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type ProjectMemberMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppType | EnumAppTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppTypeFilter<$PrismaModel> | $Enums.AppType
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type BugSheetListRelationFilter = {
    every?: BugSheetWhereInput
    some?: BugSheetWhereInput
    none?: BugSheetWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BugSheetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type AppMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type AppMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    icon?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type EnumAppTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppType | EnumAppTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppTypeFilter<$PrismaModel>
    _max?: NestedEnumAppTypeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AppScalarRelationFilter = {
    is?: AppWhereInput
    isNot?: AppWhereInput
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    appId?: SortOrder
    order?: SortOrder
    taskCounter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    order?: SortOrder
    taskCounter?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    appId?: SortOrder
    order?: SortOrder
    taskCounter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    appId?: SortOrder
    order?: SortOrder
    taskCounter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    order?: SortOrder
    taskCounter?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type EnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type TaskNullableScalarRelationFilter = {
    is?: TaskWhereInput | null
    isNot?: TaskWhereInput | null
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type TaskHistoryListRelationFilter = {
    every?: TaskHistoryWhereInput
    some?: TaskHistoryWhereInput
    none?: TaskHistoryWhereInput
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    remarks?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    parentId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    remarks?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    parentId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    assignedTo?: SortOrder
    remarks?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    parentId?: SortOrder
    moduleId?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
    reporterId?: SortOrder
    reporterName?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type EnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type TaskHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type TaskHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type BugSheetCountOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    remarks?: SortOrder
    appId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type BugSheetMaxOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    remarks?: SortOrder
    appId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type BugSheetMinOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    assignedTo?: SortOrder
    remarks?: SortOrder
    appId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: SortOrder
    creatorName?: SortOrder
  }

  export type BugSheetNullableScalarRelationFilter = {
    is?: BugSheetWhereInput | null
    isNot?: BugSheetWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    taskId?: SortOrder
    bugSheetId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    taskId?: SortOrder
    bugSheetId?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    authorName?: SortOrder
    taskId?: SortOrder
    bugSheetId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | EnumActivityActionFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityActionFilter<$PrismaModel> | $Enums.ActivityAction
  }

  export type EnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    entityTitle?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    entityTitle?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    oldValue?: SortOrder
    newValue?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    entityTitle?: SortOrder
    projectId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivityActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | EnumActivityActionFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityActionWithAggregatesFilter<$PrismaModel> | $Enums.ActivityAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityActionFilter<$PrismaModel>
    _max?: NestedEnumActivityActionFilter<$PrismaModel>
  }

  export type EnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type UserVisitCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    viewType?: SortOrder
    visitedAt?: SortOrder
  }

  export type UserVisitMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    viewType?: SortOrder
    visitedAt?: SortOrder
  }

  export type UserVisitMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    viewType?: SortOrder
    visitedAt?: SortOrder
  }

  export type UserStarredUserIdProjectIdAppIdCompoundUniqueInput = {
    userId: string
    projectId: string
    appId: string
  }

  export type UserStarredCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserStarredMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserStarredMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    projectName?: SortOrder
    appId?: SortOrder
    appName?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    commentId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    commentId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    projectId?: SortOrder
    taskId?: SortOrder
    commentId?: SortOrder
    actorId?: SortOrder
    actorName?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type OrganizationMemberCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProjectUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrganizationInput | ProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrganizationInput | ProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrganizationInput | ProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type OrganizationMemberUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput> | ProjectCreateWithoutOrganizationInput[] | ProjectUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOrganizationInput | ProjectCreateOrConnectWithoutOrganizationInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOrganizationInput | ProjectUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ProjectCreateManyOrganizationInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOrganizationInput | ProjectUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOrganizationInput | ProjectUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput> | OrganizationMemberCreateWithoutOrganizationInput[] | OrganizationMemberUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OrganizationMemberCreateOrConnectWithoutOrganizationInput | OrganizationMemberCreateOrConnectWithoutOrganizationInput[]
    upsert?: OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OrganizationMemberCreateManyOrganizationInputEnvelope
    set?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    disconnect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    delete?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    connect?: OrganizationMemberWhereUniqueInput | OrganizationMemberWhereUniqueInput[]
    update?: OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput | OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput | OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutMembersInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type OrganizationUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutMembersInput
    upsert?: OrganizationUpsertWithoutMembersInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutMembersInput, OrganizationUpdateWithoutMembersInput>, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationCreateNestedOneWithoutProjectsInput = {
    create?: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AppCreateNestedManyWithoutProjectInput = {
    create?: XOR<AppCreateWithoutProjectInput, AppUncheckedCreateWithoutProjectInput> | AppCreateWithoutProjectInput[] | AppUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AppCreateOrConnectWithoutProjectInput | AppCreateOrConnectWithoutProjectInput[]
    createMany?: AppCreateManyProjectInputEnvelope
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
  }

  export type ProjectMemberCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutProjectInput = {
    create?: XOR<ActivityLogCreateWithoutProjectInput, ActivityLogUncheckedCreateWithoutProjectInput> | ActivityLogCreateWithoutProjectInput[] | ActivityLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutProjectInput | ActivityLogCreateOrConnectWithoutProjectInput[]
    createMany?: ActivityLogCreateManyProjectInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type UserVisitCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserVisitCreateWithoutProjectInput, UserVisitUncheckedCreateWithoutProjectInput> | UserVisitCreateWithoutProjectInput[] | UserVisitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserVisitCreateOrConnectWithoutProjectInput | UserVisitCreateOrConnectWithoutProjectInput[]
    createMany?: UserVisitCreateManyProjectInputEnvelope
    connect?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
  }

  export type UserStarredCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserStarredCreateWithoutProjectInput, UserStarredUncheckedCreateWithoutProjectInput> | UserStarredCreateWithoutProjectInput[] | UserStarredUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserStarredCreateOrConnectWithoutProjectInput | UserStarredCreateOrConnectWithoutProjectInput[]
    createMany?: UserStarredCreateManyProjectInputEnvelope
    connect?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
  }

  export type AppUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AppCreateWithoutProjectInput, AppUncheckedCreateWithoutProjectInput> | AppCreateWithoutProjectInput[] | AppUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AppCreateOrConnectWithoutProjectInput | AppCreateOrConnectWithoutProjectInput[]
    createMany?: AppCreateManyProjectInputEnvelope
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
  }

  export type ProjectMemberUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ActivityLogCreateWithoutProjectInput, ActivityLogUncheckedCreateWithoutProjectInput> | ActivityLogCreateWithoutProjectInput[] | ActivityLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutProjectInput | ActivityLogCreateOrConnectWithoutProjectInput[]
    createMany?: ActivityLogCreateManyProjectInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type UserVisitUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserVisitCreateWithoutProjectInput, UserVisitUncheckedCreateWithoutProjectInput> | UserVisitCreateWithoutProjectInput[] | UserVisitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserVisitCreateOrConnectWithoutProjectInput | UserVisitCreateOrConnectWithoutProjectInput[]
    createMany?: UserVisitCreateManyProjectInputEnvelope
    connect?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
  }

  export type UserStarredUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserStarredCreateWithoutProjectInput, UserStarredUncheckedCreateWithoutProjectInput> | UserStarredCreateWithoutProjectInput[] | UserStarredUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserStarredCreateOrConnectWithoutProjectInput | UserStarredCreateOrConnectWithoutProjectInput[]
    createMany?: UserStarredCreateManyProjectInputEnvelope
    connect?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrganizationUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProjectsInput
    upsert?: OrganizationUpsertWithoutProjectsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutProjectsInput, OrganizationUpdateWithoutProjectsInput>, OrganizationUncheckedUpdateWithoutProjectsInput>
  }

  export type AppUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AppCreateWithoutProjectInput, AppUncheckedCreateWithoutProjectInput> | AppCreateWithoutProjectInput[] | AppUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AppCreateOrConnectWithoutProjectInput | AppCreateOrConnectWithoutProjectInput[]
    upsert?: AppUpsertWithWhereUniqueWithoutProjectInput | AppUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AppCreateManyProjectInputEnvelope
    set?: AppWhereUniqueInput | AppWhereUniqueInput[]
    disconnect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    delete?: AppWhereUniqueInput | AppWhereUniqueInput[]
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    update?: AppUpdateWithWhereUniqueWithoutProjectInput | AppUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AppUpdateManyWithWhereWithoutProjectInput | AppUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AppScalarWhereInput | AppScalarWhereInput[]
  }

  export type ProjectMemberUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ActivityLogCreateWithoutProjectInput, ActivityLogUncheckedCreateWithoutProjectInput> | ActivityLogCreateWithoutProjectInput[] | ActivityLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutProjectInput | ActivityLogCreateOrConnectWithoutProjectInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutProjectInput | ActivityLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ActivityLogCreateManyProjectInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutProjectInput | ActivityLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutProjectInput | ActivityLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserVisitUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserVisitCreateWithoutProjectInput, UserVisitUncheckedCreateWithoutProjectInput> | UserVisitCreateWithoutProjectInput[] | UserVisitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserVisitCreateOrConnectWithoutProjectInput | UserVisitCreateOrConnectWithoutProjectInput[]
    upsert?: UserVisitUpsertWithWhereUniqueWithoutProjectInput | UserVisitUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserVisitCreateManyProjectInputEnvelope
    set?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    disconnect?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    delete?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    connect?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    update?: UserVisitUpdateWithWhereUniqueWithoutProjectInput | UserVisitUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserVisitUpdateManyWithWhereWithoutProjectInput | UserVisitUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserVisitScalarWhereInput | UserVisitScalarWhereInput[]
  }

  export type UserStarredUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserStarredCreateWithoutProjectInput, UserStarredUncheckedCreateWithoutProjectInput> | UserStarredCreateWithoutProjectInput[] | UserStarredUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserStarredCreateOrConnectWithoutProjectInput | UserStarredCreateOrConnectWithoutProjectInput[]
    upsert?: UserStarredUpsertWithWhereUniqueWithoutProjectInput | UserStarredUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserStarredCreateManyProjectInputEnvelope
    set?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    disconnect?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    delete?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    connect?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    update?: UserStarredUpdateWithWhereUniqueWithoutProjectInput | UserStarredUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserStarredUpdateManyWithWhereWithoutProjectInput | UserStarredUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserStarredScalarWhereInput | UserStarredScalarWhereInput[]
  }

  export type AppUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AppCreateWithoutProjectInput, AppUncheckedCreateWithoutProjectInput> | AppCreateWithoutProjectInput[] | AppUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AppCreateOrConnectWithoutProjectInput | AppCreateOrConnectWithoutProjectInput[]
    upsert?: AppUpsertWithWhereUniqueWithoutProjectInput | AppUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AppCreateManyProjectInputEnvelope
    set?: AppWhereUniqueInput | AppWhereUniqueInput[]
    disconnect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    delete?: AppWhereUniqueInput | AppWhereUniqueInput[]
    connect?: AppWhereUniqueInput | AppWhereUniqueInput[]
    update?: AppUpdateWithWhereUniqueWithoutProjectInput | AppUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AppUpdateManyWithWhereWithoutProjectInput | AppUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AppScalarWhereInput | AppScalarWhereInput[]
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput> | ProjectMemberCreateWithoutProjectInput[] | ProjectMemberUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ProjectMemberCreateOrConnectWithoutProjectInput | ProjectMemberCreateOrConnectWithoutProjectInput[]
    upsert?: ProjectMemberUpsertWithWhereUniqueWithoutProjectInput | ProjectMemberUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ProjectMemberCreateManyProjectInputEnvelope
    set?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    disconnect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    delete?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    connect?: ProjectMemberWhereUniqueInput | ProjectMemberWhereUniqueInput[]
    update?: ProjectMemberUpdateWithWhereUniqueWithoutProjectInput | ProjectMemberUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ProjectMemberUpdateManyWithWhereWithoutProjectInput | ProjectMemberUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ActivityLogCreateWithoutProjectInput, ActivityLogUncheckedCreateWithoutProjectInput> | ActivityLogCreateWithoutProjectInput[] | ActivityLogUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutProjectInput | ActivityLogCreateOrConnectWithoutProjectInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutProjectInput | ActivityLogUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ActivityLogCreateManyProjectInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutProjectInput | ActivityLogUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutProjectInput | ActivityLogUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type UserVisitUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserVisitCreateWithoutProjectInput, UserVisitUncheckedCreateWithoutProjectInput> | UserVisitCreateWithoutProjectInput[] | UserVisitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserVisitCreateOrConnectWithoutProjectInput | UserVisitCreateOrConnectWithoutProjectInput[]
    upsert?: UserVisitUpsertWithWhereUniqueWithoutProjectInput | UserVisitUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserVisitCreateManyProjectInputEnvelope
    set?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    disconnect?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    delete?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    connect?: UserVisitWhereUniqueInput | UserVisitWhereUniqueInput[]
    update?: UserVisitUpdateWithWhereUniqueWithoutProjectInput | UserVisitUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserVisitUpdateManyWithWhereWithoutProjectInput | UserVisitUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserVisitScalarWhereInput | UserVisitScalarWhereInput[]
  }

  export type UserStarredUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserStarredCreateWithoutProjectInput, UserStarredUncheckedCreateWithoutProjectInput> | UserStarredCreateWithoutProjectInput[] | UserStarredUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserStarredCreateOrConnectWithoutProjectInput | UserStarredCreateOrConnectWithoutProjectInput[]
    upsert?: UserStarredUpsertWithWhereUniqueWithoutProjectInput | UserStarredUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserStarredCreateManyProjectInputEnvelope
    set?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    disconnect?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    delete?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    connect?: UserStarredWhereUniqueInput | UserStarredWhereUniqueInput[]
    update?: UserStarredUpdateWithWhereUniqueWithoutProjectInput | UserStarredUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserStarredUpdateManyWithWhereWithoutProjectInput | UserStarredUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserStarredScalarWhereInput | UserStarredScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutMembersInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMembersInput
    upsert?: ProjectUpsertWithoutMembersInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMembersInput, ProjectUpdateWithoutMembersInput>, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectCreateNestedOneWithoutAppsInput = {
    create?: XOR<ProjectCreateWithoutAppsInput, ProjectUncheckedCreateWithoutAppsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAppsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutAppInput = {
    create?: XOR<ModuleCreateWithoutAppInput, ModuleUncheckedCreateWithoutAppInput> | ModuleCreateWithoutAppInput[] | ModuleUncheckedCreateWithoutAppInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutAppInput | ModuleCreateOrConnectWithoutAppInput[]
    createMany?: ModuleCreateManyAppInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type BugSheetCreateNestedManyWithoutAppInput = {
    create?: XOR<BugSheetCreateWithoutAppInput, BugSheetUncheckedCreateWithoutAppInput> | BugSheetCreateWithoutAppInput[] | BugSheetUncheckedCreateWithoutAppInput[]
    connectOrCreate?: BugSheetCreateOrConnectWithoutAppInput | BugSheetCreateOrConnectWithoutAppInput[]
    createMany?: BugSheetCreateManyAppInputEnvelope
    connect?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<ModuleCreateWithoutAppInput, ModuleUncheckedCreateWithoutAppInput> | ModuleCreateWithoutAppInput[] | ModuleUncheckedCreateWithoutAppInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutAppInput | ModuleCreateOrConnectWithoutAppInput[]
    createMany?: ModuleCreateManyAppInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type BugSheetUncheckedCreateNestedManyWithoutAppInput = {
    create?: XOR<BugSheetCreateWithoutAppInput, BugSheetUncheckedCreateWithoutAppInput> | BugSheetCreateWithoutAppInput[] | BugSheetUncheckedCreateWithoutAppInput[]
    connectOrCreate?: BugSheetCreateOrConnectWithoutAppInput | BugSheetCreateOrConnectWithoutAppInput[]
    createMany?: BugSheetCreateManyAppInputEnvelope
    connect?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
  }

  export type EnumAppTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppType
  }

  export type ProjectUpdateOneRequiredWithoutAppsNestedInput = {
    create?: XOR<ProjectCreateWithoutAppsInput, ProjectUncheckedCreateWithoutAppsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutAppsInput
    upsert?: ProjectUpsertWithoutAppsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutAppsInput, ProjectUpdateWithoutAppsInput>, ProjectUncheckedUpdateWithoutAppsInput>
  }

  export type ModuleUpdateManyWithoutAppNestedInput = {
    create?: XOR<ModuleCreateWithoutAppInput, ModuleUncheckedCreateWithoutAppInput> | ModuleCreateWithoutAppInput[] | ModuleUncheckedCreateWithoutAppInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutAppInput | ModuleCreateOrConnectWithoutAppInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutAppInput | ModuleUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: ModuleCreateManyAppInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutAppInput | ModuleUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutAppInput | ModuleUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type BugSheetUpdateManyWithoutAppNestedInput = {
    create?: XOR<BugSheetCreateWithoutAppInput, BugSheetUncheckedCreateWithoutAppInput> | BugSheetCreateWithoutAppInput[] | BugSheetUncheckedCreateWithoutAppInput[]
    connectOrCreate?: BugSheetCreateOrConnectWithoutAppInput | BugSheetCreateOrConnectWithoutAppInput[]
    upsert?: BugSheetUpsertWithWhereUniqueWithoutAppInput | BugSheetUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: BugSheetCreateManyAppInputEnvelope
    set?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    disconnect?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    delete?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    connect?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    update?: BugSheetUpdateWithWhereUniqueWithoutAppInput | BugSheetUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: BugSheetUpdateManyWithWhereWithoutAppInput | BugSheetUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: BugSheetScalarWhereInput | BugSheetScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<ModuleCreateWithoutAppInput, ModuleUncheckedCreateWithoutAppInput> | ModuleCreateWithoutAppInput[] | ModuleUncheckedCreateWithoutAppInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutAppInput | ModuleCreateOrConnectWithoutAppInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutAppInput | ModuleUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: ModuleCreateManyAppInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutAppInput | ModuleUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutAppInput | ModuleUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type BugSheetUncheckedUpdateManyWithoutAppNestedInput = {
    create?: XOR<BugSheetCreateWithoutAppInput, BugSheetUncheckedCreateWithoutAppInput> | BugSheetCreateWithoutAppInput[] | BugSheetUncheckedCreateWithoutAppInput[]
    connectOrCreate?: BugSheetCreateOrConnectWithoutAppInput | BugSheetCreateOrConnectWithoutAppInput[]
    upsert?: BugSheetUpsertWithWhereUniqueWithoutAppInput | BugSheetUpsertWithWhereUniqueWithoutAppInput[]
    createMany?: BugSheetCreateManyAppInputEnvelope
    set?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    disconnect?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    delete?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    connect?: BugSheetWhereUniqueInput | BugSheetWhereUniqueInput[]
    update?: BugSheetUpdateWithWhereUniqueWithoutAppInput | BugSheetUpdateWithWhereUniqueWithoutAppInput[]
    updateMany?: BugSheetUpdateManyWithWhereWithoutAppInput | BugSheetUpdateManyWithWhereWithoutAppInput[]
    deleteMany?: BugSheetScalarWhereInput | BugSheetScalarWhereInput[]
  }

  export type AppCreateNestedOneWithoutModulesInput = {
    create?: XOR<AppCreateWithoutModulesInput, AppUncheckedCreateWithoutModulesInput>
    connectOrCreate?: AppCreateOrConnectWithoutModulesInput
    connect?: AppWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutModuleInput = {
    create?: XOR<TaskCreateWithoutModuleInput, TaskUncheckedCreateWithoutModuleInput> | TaskCreateWithoutModuleInput[] | TaskUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutModuleInput | TaskCreateOrConnectWithoutModuleInput[]
    createMany?: TaskCreateManyModuleInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<TaskCreateWithoutModuleInput, TaskUncheckedCreateWithoutModuleInput> | TaskCreateWithoutModuleInput[] | TaskUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutModuleInput | TaskCreateOrConnectWithoutModuleInput[]
    createMany?: TaskCreateManyModuleInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AppUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<AppCreateWithoutModulesInput, AppUncheckedCreateWithoutModulesInput>
    connectOrCreate?: AppCreateOrConnectWithoutModulesInput
    upsert?: AppUpsertWithoutModulesInput
    connect?: AppWhereUniqueInput
    update?: XOR<XOR<AppUpdateToOneWithWhereWithoutModulesInput, AppUpdateWithoutModulesInput>, AppUncheckedUpdateWithoutModulesInput>
  }

  export type TaskUpdateManyWithoutModuleNestedInput = {
    create?: XOR<TaskCreateWithoutModuleInput, TaskUncheckedCreateWithoutModuleInput> | TaskCreateWithoutModuleInput[] | TaskUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutModuleInput | TaskCreateOrConnectWithoutModuleInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutModuleInput | TaskUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: TaskCreateManyModuleInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutModuleInput | TaskUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutModuleInput | TaskUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<TaskCreateWithoutModuleInput, TaskUncheckedCreateWithoutModuleInput> | TaskCreateWithoutModuleInput[] | TaskUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutModuleInput | TaskCreateOrConnectWithoutModuleInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutModuleInput | TaskUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: TaskCreateManyModuleInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutModuleInput | TaskUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutModuleInput | TaskUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutSubtasksInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ModuleCreateNestedOneWithoutTasksInput = {
    create?: XOR<ModuleCreateWithoutTasksInput, ModuleUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutTasksInput
    connect?: ModuleWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TaskHistoryCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type TaskHistoryUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type EnumTaskTypeFieldUpdateOperationsInput = {
    set?: $Enums.TaskType
  }

  export type EnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type TaskUpdateOneWithoutSubtasksNestedInput = {
    create?: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutSubtasksInput
    upsert?: TaskUpsertWithoutSubtasksInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutSubtasksInput, TaskUpdateWithoutSubtasksInput>, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ModuleUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<ModuleCreateWithoutTasksInput, ModuleUncheckedCreateWithoutTasksInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutTasksInput
    upsert?: ModuleUpsertWithoutTasksInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutTasksInput, ModuleUpdateWithoutTasksInput>, ModuleUncheckedUpdateWithoutTasksInput>
  }

  export type CommentUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TaskHistoryUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput> | TaskCreateWithoutParentInput[] | TaskUncheckedCreateWithoutParentInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutParentInput | TaskCreateOrConnectWithoutParentInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutParentInput | TaskUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: TaskCreateManyParentInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutParentInput | TaskUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutParentInput | TaskUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput> | CommentCreateWithoutTaskInput[] | CommentUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutTaskInput | CommentCreateOrConnectWithoutTaskInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutTaskInput | CommentUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: CommentCreateManyTaskInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutTaskInput | CommentUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutTaskInput | CommentUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutHistoryInput = {
    create?: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoryInput
    connect?: TaskWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoryInput
    upsert?: TaskUpsertWithoutHistoryInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutHistoryInput, TaskUpdateWithoutHistoryInput>, TaskUncheckedUpdateWithoutHistoryInput>
  }

  export type AppCreateNestedOneWithoutBugSheetsInput = {
    create?: XOR<AppCreateWithoutBugSheetsInput, AppUncheckedCreateWithoutBugSheetsInput>
    connectOrCreate?: AppCreateOrConnectWithoutBugSheetsInput
    connect?: AppWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutBugSheetInput = {
    create?: XOR<CommentCreateWithoutBugSheetInput, CommentUncheckedCreateWithoutBugSheetInput> | CommentCreateWithoutBugSheetInput[] | CommentUncheckedCreateWithoutBugSheetInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBugSheetInput | CommentCreateOrConnectWithoutBugSheetInput[]
    createMany?: CommentCreateManyBugSheetInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutBugSheetInput = {
    create?: XOR<CommentCreateWithoutBugSheetInput, CommentUncheckedCreateWithoutBugSheetInput> | CommentCreateWithoutBugSheetInput[] | CommentUncheckedCreateWithoutBugSheetInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBugSheetInput | CommentCreateOrConnectWithoutBugSheetInput[]
    createMany?: CommentCreateManyBugSheetInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type AppUpdateOneRequiredWithoutBugSheetsNestedInput = {
    create?: XOR<AppCreateWithoutBugSheetsInput, AppUncheckedCreateWithoutBugSheetsInput>
    connectOrCreate?: AppCreateOrConnectWithoutBugSheetsInput
    upsert?: AppUpsertWithoutBugSheetsInput
    connect?: AppWhereUniqueInput
    update?: XOR<XOR<AppUpdateToOneWithWhereWithoutBugSheetsInput, AppUpdateWithoutBugSheetsInput>, AppUncheckedUpdateWithoutBugSheetsInput>
  }

  export type CommentUpdateManyWithoutBugSheetNestedInput = {
    create?: XOR<CommentCreateWithoutBugSheetInput, CommentUncheckedCreateWithoutBugSheetInput> | CommentCreateWithoutBugSheetInput[] | CommentUncheckedCreateWithoutBugSheetInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBugSheetInput | CommentCreateOrConnectWithoutBugSheetInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBugSheetInput | CommentUpsertWithWhereUniqueWithoutBugSheetInput[]
    createMany?: CommentCreateManyBugSheetInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBugSheetInput | CommentUpdateWithWhereUniqueWithoutBugSheetInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBugSheetInput | CommentUpdateManyWithWhereWithoutBugSheetInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutBugSheetNestedInput = {
    create?: XOR<CommentCreateWithoutBugSheetInput, CommentUncheckedCreateWithoutBugSheetInput> | CommentCreateWithoutBugSheetInput[] | CommentUncheckedCreateWithoutBugSheetInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutBugSheetInput | CommentCreateOrConnectWithoutBugSheetInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutBugSheetInput | CommentUpsertWithWhereUniqueWithoutBugSheetInput[]
    createMany?: CommentCreateManyBugSheetInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutBugSheetInput | CommentUpdateWithWhereUniqueWithoutBugSheetInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutBugSheetInput | CommentUpdateManyWithWhereWithoutBugSheetInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutCommentsInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    connect?: TaskWhereUniqueInput
  }

  export type BugSheetCreateNestedOneWithoutCommentsInput = {
    create?: XOR<BugSheetCreateWithoutCommentsInput, BugSheetUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BugSheetCreateOrConnectWithoutCommentsInput
    connect?: BugSheetWhereUniqueInput
  }

  export type TaskUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutCommentsInput
    upsert?: TaskUpsertWithoutCommentsInput
    disconnect?: TaskWhereInput | boolean
    delete?: TaskWhereInput | boolean
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutCommentsInput, TaskUpdateWithoutCommentsInput>, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type BugSheetUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<BugSheetCreateWithoutCommentsInput, BugSheetUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: BugSheetCreateOrConnectWithoutCommentsInput
    upsert?: BugSheetUpsertWithoutCommentsInput
    disconnect?: BugSheetWhereInput | boolean
    delete?: BugSheetWhereInput | boolean
    connect?: BugSheetWhereUniqueInput
    update?: XOR<XOR<BugSheetUpdateToOneWithWhereWithoutCommentsInput, BugSheetUpdateWithoutCommentsInput>, BugSheetUncheckedUpdateWithoutCommentsInput>
  }

  export type ProjectCreateNestedOneWithoutActivityLogsInput = {
    create?: XOR<ProjectCreateWithoutActivityLogsInput, ProjectUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivityLogsInput
    connect?: ProjectWhereUniqueInput
  }

  export type EnumActivityActionFieldUpdateOperationsInput = {
    set?: $Enums.ActivityAction
  }

  export type EnumEntityTypeFieldUpdateOperationsInput = {
    set?: $Enums.EntityType
  }

  export type ProjectUpdateOneRequiredWithoutActivityLogsNestedInput = {
    create?: XOR<ProjectCreateWithoutActivityLogsInput, ProjectUncheckedCreateWithoutActivityLogsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutActivityLogsInput
    upsert?: ProjectUpsertWithoutActivityLogsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutActivityLogsInput, ProjectUpdateWithoutActivityLogsInput>, ProjectUncheckedUpdateWithoutActivityLogsInput>
  }

  export type ProjectCreateNestedOneWithoutUserVisitsInput = {
    create?: XOR<ProjectCreateWithoutUserVisitsInput, ProjectUncheckedCreateWithoutUserVisitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserVisitsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutUserVisitsNestedInput = {
    create?: XOR<ProjectCreateWithoutUserVisitsInput, ProjectUncheckedCreateWithoutUserVisitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserVisitsInput
    upsert?: ProjectUpsertWithoutUserVisitsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUserVisitsInput, ProjectUpdateWithoutUserVisitsInput>, ProjectUncheckedUpdateWithoutUserVisitsInput>
  }

  export type ProjectCreateNestedOneWithoutUserStarredInput = {
    create?: XOR<ProjectCreateWithoutUserStarredInput, ProjectUncheckedCreateWithoutUserStarredInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserStarredInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutUserStarredNestedInput = {
    create?: XOR<ProjectCreateWithoutUserStarredInput, ProjectUncheckedCreateWithoutUserStarredInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserStarredInput
    upsert?: ProjectUpsertWithoutUserStarredInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUserStarredInput, ProjectUpdateWithoutUserStarredInput>, ProjectUncheckedUpdateWithoutUserStarredInput>
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAppTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppType | EnumAppTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppTypeFilter<$PrismaModel> | $Enums.AppType
  }

  export type NestedEnumAppTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppType | EnumAppTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AppType[] | ListEnumAppTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAppTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppTypeFilter<$PrismaModel>
    _max?: NestedEnumAppTypeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumTaskTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeFilter<$PrismaModel> | $Enums.TaskType
  }

  export type NestedEnumPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityFilter<$PrismaModel> | $Enums.Priority
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TaskType | EnumTaskTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TaskType[] | ListEnumTaskTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTaskTypeWithAggregatesFilter<$PrismaModel> | $Enums.TaskType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTaskTypeFilter<$PrismaModel>
    _max?: NestedEnumTaskTypeFilter<$PrismaModel>
  }

  export type NestedEnumPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumPriorityWithAggregatesFilter<$PrismaModel> | $Enums.Priority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPriorityFilter<$PrismaModel>
    _max?: NestedEnumPriorityFilter<$PrismaModel>
  }

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumActivityActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | EnumActivityActionFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityActionFilter<$PrismaModel> | $Enums.ActivityAction
  }

  export type NestedEnumEntityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeFilter<$PrismaModel> | $Enums.EntityType
  }

  export type NestedEnumActivityActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivityAction | EnumActivityActionFieldRefInput<$PrismaModel>
    in?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivityAction[] | ListEnumActivityActionFieldRefInput<$PrismaModel>
    not?: NestedEnumActivityActionWithAggregatesFilter<$PrismaModel> | $Enums.ActivityAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivityActionFilter<$PrismaModel>
    _max?: NestedEnumActivityActionFilter<$PrismaModel>
  }

  export type NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EntityType | EnumEntityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EntityType[] | ListEnumEntityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumEntityTypeWithAggregatesFilter<$PrismaModel> | $Enums.EntityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEntityTypeFilter<$PrismaModel>
    _max?: NestedEnumEntityTypeFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProjectCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    apps?: AppCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    apps?: AppUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitUncheckedCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ProjectCreateManyOrganizationInputEnvelope = {
    data: ProjectCreateManyOrganizationInput | ProjectCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationMemberCreateWithoutOrganizationInput = {
    id?: string
    clerkUserId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type OrganizationMemberUncheckedCreateWithoutOrganizationInput = {
    id?: string
    clerkUserId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type OrganizationMemberCreateOrConnectWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberCreateManyOrganizationInputEnvelope = {
    data: OrganizationMemberCreateManyOrganizationInput | OrganizationMemberCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOrganizationInput, ProjectUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ProjectCreateWithoutOrganizationInput, ProjectUncheckedCreateWithoutOrganizationInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOrganizationInput, ProjectUncheckedUpdateWithoutOrganizationInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOrganizationInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringNullableFilter<"Project"> | string | null
    organizationId?: StringFilter<"Project"> | string
    clientOrgId?: StringNullableFilter<"Project"> | string | null
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    createdBy?: StringNullableFilter<"Project"> | string | null
    creatorName?: StringNullableFilter<"Project"> | string | null
  }

  export type OrganizationMemberUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    update: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OrganizationMemberCreateWithoutOrganizationInput, OrganizationMemberUncheckedCreateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OrganizationMemberWhereUniqueInput
    data: XOR<OrganizationMemberUpdateWithoutOrganizationInput, OrganizationMemberUncheckedUpdateWithoutOrganizationInput>
  }

  export type OrganizationMemberUpdateManyWithWhereWithoutOrganizationInput = {
    where: OrganizationMemberScalarWhereInput
    data: XOR<OrganizationMemberUpdateManyMutationInput, OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OrganizationMemberScalarWhereInput = {
    AND?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    OR?: OrganizationMemberScalarWhereInput[]
    NOT?: OrganizationMemberScalarWhereInput | OrganizationMemberScalarWhereInput[]
    id?: StringFilter<"OrganizationMember"> | string
    clerkUserId?: StringFilter<"OrganizationMember"> | string
    organizationId?: StringFilter<"OrganizationMember"> | string
    role?: EnumRoleFilter<"OrganizationMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"OrganizationMember"> | Date | string
  }

  export type OrganizationCreateWithoutMembersInput = {
    id?: string
    clerkOrgId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutMembersInput = {
    id?: string
    clerkOrgId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projects?: ProjectUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutMembersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
  }

  export type OrganizationUpsertWithoutMembersInput = {
    update: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
    create: XOR<OrganizationCreateWithoutMembersInput, OrganizationUncheckedCreateWithoutMembersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutMembersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutMembersInput, OrganizationUncheckedUpdateWithoutMembersInput>
  }

  export type OrganizationUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutProjectsInput = {
    id?: string
    clerkOrgId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrganizationMemberCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutProjectsInput = {
    id?: string
    clerkOrgId: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: OrganizationMemberUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutProjectsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
  }

  export type AppCreateWithoutProjectInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    modules?: ModuleCreateNestedManyWithoutAppInput
    bugSheets?: BugSheetCreateNestedManyWithoutAppInput
  }

  export type AppUncheckedCreateWithoutProjectInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    modules?: ModuleUncheckedCreateNestedManyWithoutAppInput
    bugSheets?: BugSheetUncheckedCreateNestedManyWithoutAppInput
  }

  export type AppCreateOrConnectWithoutProjectInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutProjectInput, AppUncheckedCreateWithoutProjectInput>
  }

  export type AppCreateManyProjectInputEnvelope = {
    data: AppCreateManyProjectInput | AppCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ProjectMemberCreateWithoutProjectInput = {
    id?: string
    clerkUserId: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type ProjectMemberUncheckedCreateWithoutProjectInput = {
    id?: string
    clerkUserId: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type ProjectMemberCreateOrConnectWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberCreateManyProjectInputEnvelope = {
    data: ProjectMemberCreateManyProjectInput | ProjectMemberCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutProjectInput = {
    id?: string
    action: $Enums.ActivityAction
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    userId: string
    userName: string
    entityType: $Enums.EntityType
    entityId: string
    entityTitle: string
    createdAt?: Date | string
  }

  export type ActivityLogUncheckedCreateWithoutProjectInput = {
    id?: string
    action: $Enums.ActivityAction
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    userId: string
    userName: string
    entityType: $Enums.EntityType
    entityId: string
    entityTitle: string
    createdAt?: Date | string
  }

  export type ActivityLogCreateOrConnectWithoutProjectInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutProjectInput, ActivityLogUncheckedCreateWithoutProjectInput>
  }

  export type ActivityLogCreateManyProjectInputEnvelope = {
    data: ActivityLogCreateManyProjectInput | ActivityLogCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserVisitCreateWithoutProjectInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    viewType?: string | null
    visitedAt?: Date | string
  }

  export type UserVisitUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    viewType?: string | null
    visitedAt?: Date | string
  }

  export type UserVisitCreateOrConnectWithoutProjectInput = {
    where: UserVisitWhereUniqueInput
    create: XOR<UserVisitCreateWithoutProjectInput, UserVisitUncheckedCreateWithoutProjectInput>
  }

  export type UserVisitCreateManyProjectInputEnvelope = {
    data: UserVisitCreateManyProjectInput | UserVisitCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserStarredCreateWithoutProjectInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    createdAt?: Date | string
  }

  export type UserStarredUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    createdAt?: Date | string
  }

  export type UserStarredCreateOrConnectWithoutProjectInput = {
    where: UserStarredWhereUniqueInput
    create: XOR<UserStarredCreateWithoutProjectInput, UserStarredUncheckedCreateWithoutProjectInput>
  }

  export type UserStarredCreateManyProjectInputEnvelope = {
    data: UserStarredCreateManyProjectInput | UserStarredCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutProjectsInput = {
    update: XOR<OrganizationUpdateWithoutProjectsInput, OrganizationUncheckedUpdateWithoutProjectsInput>
    create: XOR<OrganizationCreateWithoutProjectsInput, OrganizationUncheckedCreateWithoutProjectsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutProjectsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutProjectsInput, OrganizationUncheckedUpdateWithoutProjectsInput>
  }

  export type OrganizationUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkOrgId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: OrganizationMemberUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type AppUpsertWithWhereUniqueWithoutProjectInput = {
    where: AppWhereUniqueInput
    update: XOR<AppUpdateWithoutProjectInput, AppUncheckedUpdateWithoutProjectInput>
    create: XOR<AppCreateWithoutProjectInput, AppUncheckedCreateWithoutProjectInput>
  }

  export type AppUpdateWithWhereUniqueWithoutProjectInput = {
    where: AppWhereUniqueInput
    data: XOR<AppUpdateWithoutProjectInput, AppUncheckedUpdateWithoutProjectInput>
  }

  export type AppUpdateManyWithWhereWithoutProjectInput = {
    where: AppScalarWhereInput
    data: XOR<AppUpdateManyMutationInput, AppUncheckedUpdateManyWithoutProjectInput>
  }

  export type AppScalarWhereInput = {
    AND?: AppScalarWhereInput | AppScalarWhereInput[]
    OR?: AppScalarWhereInput[]
    NOT?: AppScalarWhereInput | AppScalarWhereInput[]
    id?: StringFilter<"App"> | string
    name?: StringFilter<"App"> | string
    type?: EnumAppTypeFilter<"App"> | $Enums.AppType
    icon?: StringNullableFilter<"App"> | string | null
    projectId?: StringFilter<"App"> | string
    createdAt?: DateTimeFilter<"App"> | Date | string
    updatedAt?: DateTimeFilter<"App"> | Date | string
    createdBy?: StringNullableFilter<"App"> | string | null
    creatorName?: StringNullableFilter<"App"> | string | null
  }

  export type ProjectMemberUpsertWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    update: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
    create: XOR<ProjectMemberCreateWithoutProjectInput, ProjectMemberUncheckedCreateWithoutProjectInput>
  }

  export type ProjectMemberUpdateWithWhereUniqueWithoutProjectInput = {
    where: ProjectMemberWhereUniqueInput
    data: XOR<ProjectMemberUpdateWithoutProjectInput, ProjectMemberUncheckedUpdateWithoutProjectInput>
  }

  export type ProjectMemberUpdateManyWithWhereWithoutProjectInput = {
    where: ProjectMemberScalarWhereInput
    data: XOR<ProjectMemberUpdateManyMutationInput, ProjectMemberUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectMemberScalarWhereInput = {
    AND?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    OR?: ProjectMemberScalarWhereInput[]
    NOT?: ProjectMemberScalarWhereInput | ProjectMemberScalarWhereInput[]
    id?: StringFilter<"ProjectMember"> | string
    projectId?: StringFilter<"ProjectMember"> | string
    clerkUserId?: StringFilter<"ProjectMember"> | string
    name?: StringFilter<"ProjectMember"> | string
    role?: EnumRoleFilter<"ProjectMember"> | $Enums.Role
    createdAt?: DateTimeFilter<"ProjectMember"> | Date | string
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutProjectInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutProjectInput, ActivityLogUncheckedUpdateWithoutProjectInput>
    create: XOR<ActivityLogCreateWithoutProjectInput, ActivityLogUncheckedCreateWithoutProjectInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutProjectInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutProjectInput, ActivityLogUncheckedUpdateWithoutProjectInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutProjectInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutProjectInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: StringFilter<"ActivityLog"> | string
    action?: EnumActivityActionFilter<"ActivityLog"> | $Enums.ActivityAction
    field?: StringNullableFilter<"ActivityLog"> | string | null
    oldValue?: StringNullableFilter<"ActivityLog"> | string | null
    newValue?: StringNullableFilter<"ActivityLog"> | string | null
    userId?: StringFilter<"ActivityLog"> | string
    userName?: StringFilter<"ActivityLog"> | string
    entityType?: EnumEntityTypeFilter<"ActivityLog"> | $Enums.EntityType
    entityId?: StringFilter<"ActivityLog"> | string
    entityTitle?: StringFilter<"ActivityLog"> | string
    projectId?: StringFilter<"ActivityLog"> | string
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
  }

  export type UserVisitUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserVisitWhereUniqueInput
    update: XOR<UserVisitUpdateWithoutProjectInput, UserVisitUncheckedUpdateWithoutProjectInput>
    create: XOR<UserVisitCreateWithoutProjectInput, UserVisitUncheckedCreateWithoutProjectInput>
  }

  export type UserVisitUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserVisitWhereUniqueInput
    data: XOR<UserVisitUpdateWithoutProjectInput, UserVisitUncheckedUpdateWithoutProjectInput>
  }

  export type UserVisitUpdateManyWithWhereWithoutProjectInput = {
    where: UserVisitScalarWhereInput
    data: XOR<UserVisitUpdateManyMutationInput, UserVisitUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserVisitScalarWhereInput = {
    AND?: UserVisitScalarWhereInput | UserVisitScalarWhereInput[]
    OR?: UserVisitScalarWhereInput[]
    NOT?: UserVisitScalarWhereInput | UserVisitScalarWhereInput[]
    id?: StringFilter<"UserVisit"> | string
    userId?: StringFilter<"UserVisit"> | string
    projectId?: StringFilter<"UserVisit"> | string
    projectName?: StringFilter<"UserVisit"> | string
    appId?: StringNullableFilter<"UserVisit"> | string | null
    appName?: StringNullableFilter<"UserVisit"> | string | null
    viewType?: StringNullableFilter<"UserVisit"> | string | null
    visitedAt?: DateTimeFilter<"UserVisit"> | Date | string
  }

  export type UserStarredUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserStarredWhereUniqueInput
    update: XOR<UserStarredUpdateWithoutProjectInput, UserStarredUncheckedUpdateWithoutProjectInput>
    create: XOR<UserStarredCreateWithoutProjectInput, UserStarredUncheckedCreateWithoutProjectInput>
  }

  export type UserStarredUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserStarredWhereUniqueInput
    data: XOR<UserStarredUpdateWithoutProjectInput, UserStarredUncheckedUpdateWithoutProjectInput>
  }

  export type UserStarredUpdateManyWithWhereWithoutProjectInput = {
    where: UserStarredScalarWhereInput
    data: XOR<UserStarredUpdateManyMutationInput, UserStarredUncheckedUpdateManyWithoutProjectInput>
  }

  export type UserStarredScalarWhereInput = {
    AND?: UserStarredScalarWhereInput | UserStarredScalarWhereInput[]
    OR?: UserStarredScalarWhereInput[]
    NOT?: UserStarredScalarWhereInput | UserStarredScalarWhereInput[]
    id?: StringFilter<"UserStarred"> | string
    userId?: StringFilter<"UserStarred"> | string
    projectId?: StringFilter<"UserStarred"> | string
    projectName?: StringFilter<"UserStarred"> | string
    appId?: StringNullableFilter<"UserStarred"> | string | null
    appName?: StringNullableFilter<"UserStarred"> | string | null
    createdAt?: DateTimeFilter<"UserStarred"> | Date | string
  }

  export type ProjectCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    apps?: AppCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    apps?: AppUncheckedCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitUncheckedCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMembersInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
  }

  export type ProjectUpsertWithoutMembersInput = {
    update: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
    create: XOR<ProjectCreateWithoutMembersInput, ProjectUncheckedCreateWithoutMembersInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMembersInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMembersInput, ProjectUncheckedUpdateWithoutMembersInput>
  }

  export type ProjectUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    apps?: AppUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    apps?: AppUncheckedUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUncheckedUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutAppsInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutAppsInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitUncheckedCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutAppsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutAppsInput, ProjectUncheckedCreateWithoutAppsInput>
  }

  export type ModuleCreateWithoutAppInput = {
    id?: string
    name: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutAppInput = {
    id?: string
    name: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: TaskUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutAppInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutAppInput, ModuleUncheckedCreateWithoutAppInput>
  }

  export type ModuleCreateManyAppInputEnvelope = {
    data: ModuleCreateManyAppInput | ModuleCreateManyAppInput[]
    skipDuplicates?: boolean
  }

  export type BugSheetCreateWithoutAppInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    comments?: CommentCreateNestedManyWithoutBugSheetInput
  }

  export type BugSheetUncheckedCreateWithoutAppInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutBugSheetInput
  }

  export type BugSheetCreateOrConnectWithoutAppInput = {
    where: BugSheetWhereUniqueInput
    create: XOR<BugSheetCreateWithoutAppInput, BugSheetUncheckedCreateWithoutAppInput>
  }

  export type BugSheetCreateManyAppInputEnvelope = {
    data: BugSheetCreateManyAppInput | BugSheetCreateManyAppInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutAppsInput = {
    update: XOR<ProjectUpdateWithoutAppsInput, ProjectUncheckedUpdateWithoutAppsInput>
    create: XOR<ProjectCreateWithoutAppsInput, ProjectUncheckedCreateWithoutAppsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutAppsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutAppsInput, ProjectUncheckedUpdateWithoutAppsInput>
  }

  export type ProjectUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutAppsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUncheckedUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ModuleUpsertWithWhereUniqueWithoutAppInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutAppInput, ModuleUncheckedUpdateWithoutAppInput>
    create: XOR<ModuleCreateWithoutAppInput, ModuleUncheckedCreateWithoutAppInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutAppInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutAppInput, ModuleUncheckedUpdateWithoutAppInput>
  }

  export type ModuleUpdateManyWithWhereWithoutAppInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutAppInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: StringFilter<"Module"> | string
    name?: StringFilter<"Module"> | string
    appId?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    taskCounter?: IntFilter<"Module"> | number
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
  }

  export type BugSheetUpsertWithWhereUniqueWithoutAppInput = {
    where: BugSheetWhereUniqueInput
    update: XOR<BugSheetUpdateWithoutAppInput, BugSheetUncheckedUpdateWithoutAppInput>
    create: XOR<BugSheetCreateWithoutAppInput, BugSheetUncheckedCreateWithoutAppInput>
  }

  export type BugSheetUpdateWithWhereUniqueWithoutAppInput = {
    where: BugSheetWhereUniqueInput
    data: XOR<BugSheetUpdateWithoutAppInput, BugSheetUncheckedUpdateWithoutAppInput>
  }

  export type BugSheetUpdateManyWithWhereWithoutAppInput = {
    where: BugSheetScalarWhereInput
    data: XOR<BugSheetUpdateManyMutationInput, BugSheetUncheckedUpdateManyWithoutAppInput>
  }

  export type BugSheetScalarWhereInput = {
    AND?: BugSheetScalarWhereInput | BugSheetScalarWhereInput[]
    OR?: BugSheetScalarWhereInput[]
    NOT?: BugSheetScalarWhereInput | BugSheetScalarWhereInput[]
    id?: StringFilter<"BugSheet"> | string
    module?: StringFilter<"BugSheet"> | string
    description?: StringFilter<"BugSheet"> | string
    status?: EnumStatusFilter<"BugSheet"> | $Enums.Status
    priority?: EnumPriorityFilter<"BugSheet"> | $Enums.Priority
    assignedTo?: StringNullableFilter<"BugSheet"> | string | null
    remarks?: StringNullableFilter<"BugSheet"> | string | null
    appId?: StringFilter<"BugSheet"> | string
    createdAt?: DateTimeFilter<"BugSheet"> | Date | string
    updatedAt?: DateTimeFilter<"BugSheet"> | Date | string
    createdBy?: StringNullableFilter<"BugSheet"> | string | null
    creatorName?: StringNullableFilter<"BugSheet"> | string | null
  }

  export type AppCreateWithoutModulesInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    project: ProjectCreateNestedOneWithoutAppsInput
    bugSheets?: BugSheetCreateNestedManyWithoutAppInput
  }

  export type AppUncheckedCreateWithoutModulesInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    bugSheets?: BugSheetUncheckedCreateNestedManyWithoutAppInput
  }

  export type AppCreateOrConnectWithoutModulesInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutModulesInput, AppUncheckedCreateWithoutModulesInput>
  }

  export type TaskCreateWithoutModuleInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutModuleInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    parentId?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutModuleInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutModuleInput, TaskUncheckedCreateWithoutModuleInput>
  }

  export type TaskCreateManyModuleInputEnvelope = {
    data: TaskCreateManyModuleInput | TaskCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type AppUpsertWithoutModulesInput = {
    update: XOR<AppUpdateWithoutModulesInput, AppUncheckedUpdateWithoutModulesInput>
    create: XOR<AppCreateWithoutModulesInput, AppUncheckedCreateWithoutModulesInput>
    where?: AppWhereInput
  }

  export type AppUpdateToOneWithWhereWithoutModulesInput = {
    where?: AppWhereInput
    data: XOR<AppUpdateWithoutModulesInput, AppUncheckedUpdateWithoutModulesInput>
  }

  export type AppUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutAppsNestedInput
    bugSheets?: BugSheetUpdateManyWithoutAppNestedInput
  }

  export type AppUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    bugSheets?: BugSheetUncheckedUpdateManyWithoutAppNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutModuleInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutModuleInput, TaskUncheckedUpdateWithoutModuleInput>
    create: XOR<TaskCreateWithoutModuleInput, TaskUncheckedCreateWithoutModuleInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutModuleInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutModuleInput, TaskUncheckedUpdateWithoutModuleInput>
  }

  export type TaskUpdateManyWithWhereWithoutModuleInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutModuleInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    taskCode?: StringNullableFilter<"Task"> | string | null
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    type?: EnumTaskTypeFilter<"Task"> | $Enums.TaskType
    priority?: EnumPriorityFilter<"Task"> | $Enums.Priority
    status?: EnumStatusFilter<"Task"> | $Enums.Status
    assignedTo?: StringNullableFilter<"Task"> | string | null
    remarks?: StringNullableFilter<"Task"> | string | null
    startDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Task"> | Date | string | null
    parentId?: StringNullableFilter<"Task"> | string | null
    moduleId?: StringFilter<"Task"> | string
    order?: IntFilter<"Task"> | number
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: StringNullableFilter<"Task"> | string | null
    creatorName?: StringNullableFilter<"Task"> | string | null
    reporterId?: StringNullableFilter<"Task"> | string | null
    reporterName?: StringNullableFilter<"Task"> | string | null
  }

  export type TaskCreateWithoutSubtasksInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    module: ModuleCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSubtasksInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    parentId?: string | null
    moduleId: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSubtasksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
  }

  export type TaskCreateWithoutParentInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    subtasks?: TaskCreateNestedManyWithoutParentInput
    module: ModuleCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutParentInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    moduleId: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutParentInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskCreateManyParentInputEnvelope = {
    data: TaskCreateManyParentInput | TaskCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ModuleCreateWithoutTasksInput = {
    id?: string
    name: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    app: AppCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutTasksInput = {
    id?: string
    name: string
    appId: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleCreateOrConnectWithoutTasksInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutTasksInput, ModuleUncheckedCreateWithoutTasksInput>
  }

  export type CommentCreateWithoutTaskInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    createdAt?: Date | string
    bugSheet?: BugSheetCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutTaskInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    bugSheetId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutTaskInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentCreateManyTaskInputEnvelope = {
    data: CommentCreateManyTaskInput | CommentCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskHistoryCreateWithoutTaskInput = {
    id?: string
    actorId: string
    actorName: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryUncheckedCreateWithoutTaskInput = {
    id?: string
    actorId: string
    actorName: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryCreateOrConnectWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryCreateManyTaskInputEnvelope = {
    data: TaskHistoryCreateManyTaskInput | TaskHistoryCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutSubtasksInput = {
    update: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
    create: XOR<TaskCreateWithoutSubtasksInput, TaskUncheckedCreateWithoutSubtasksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutSubtasksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutSubtasksInput, TaskUncheckedUpdateWithoutSubtasksInput>
  }

  export type TaskUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    module?: ModuleUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSubtasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
    create: XOR<TaskCreateWithoutParentInput, TaskUncheckedCreateWithoutParentInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutParentInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutParentInput, TaskUncheckedUpdateWithoutParentInput>
  }

  export type TaskUpdateManyWithWhereWithoutParentInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutParentInput>
  }

  export type ModuleUpsertWithoutTasksInput = {
    update: XOR<ModuleUpdateWithoutTasksInput, ModuleUncheckedUpdateWithoutTasksInput>
    create: XOR<ModuleCreateWithoutTasksInput, ModuleUncheckedCreateWithoutTasksInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutTasksInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutTasksInput, ModuleUncheckedUpdateWithoutTasksInput>
  }

  export type ModuleUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    app?: AppUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    appId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
    create: XOR<CommentCreateWithoutTaskInput, CommentUncheckedCreateWithoutTaskInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutTaskInput, CommentUncheckedUpdateWithoutTaskInput>
  }

  export type CommentUpdateManyWithWhereWithoutTaskInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutTaskInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    content?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    authorName?: StringFilter<"Comment"> | string
    taskId?: StringNullableFilter<"Comment"> | string | null
    bugSheetId?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type TaskHistoryUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    update: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    data: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
  }

  export type TaskHistoryUpdateManyWithWhereWithoutTaskInput = {
    where: TaskHistoryScalarWhereInput
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskHistoryScalarWhereInput = {
    AND?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    OR?: TaskHistoryScalarWhereInput[]
    NOT?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    id?: StringFilter<"TaskHistory"> | string
    taskId?: StringFilter<"TaskHistory"> | string
    actorId?: StringFilter<"TaskHistory"> | string
    actorName?: StringFilter<"TaskHistory"> | string
    field?: StringFilter<"TaskHistory"> | string
    oldValue?: StringNullableFilter<"TaskHistory"> | string | null
    newValue?: StringNullableFilter<"TaskHistory"> | string | null
    createdAt?: DateTimeFilter<"TaskHistory"> | Date | string
  }

  export type TaskCreateWithoutHistoryInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentInput
    module: ModuleCreateNestedOneWithoutTasksInput
    comments?: CommentCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutHistoryInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    parentId?: string | null
    moduleId: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    comments?: CommentUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutHistoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
  }

  export type TaskUpsertWithoutHistoryInput = {
    update: XOR<TaskUpdateWithoutHistoryInput, TaskUncheckedUpdateWithoutHistoryInput>
    create: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutHistoryInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutHistoryInput, TaskUncheckedUpdateWithoutHistoryInput>
  }

  export type TaskUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    module?: ModuleUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type AppCreateWithoutBugSheetsInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    project: ProjectCreateNestedOneWithoutAppsInput
    modules?: ModuleCreateNestedManyWithoutAppInput
  }

  export type AppUncheckedCreateWithoutBugSheetsInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    modules?: ModuleUncheckedCreateNestedManyWithoutAppInput
  }

  export type AppCreateOrConnectWithoutBugSheetsInput = {
    where: AppWhereUniqueInput
    create: XOR<AppCreateWithoutBugSheetsInput, AppUncheckedCreateWithoutBugSheetsInput>
  }

  export type CommentCreateWithoutBugSheetInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    createdAt?: Date | string
    task?: TaskCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutBugSheetInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    taskId?: string | null
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutBugSheetInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutBugSheetInput, CommentUncheckedCreateWithoutBugSheetInput>
  }

  export type CommentCreateManyBugSheetInputEnvelope = {
    data: CommentCreateManyBugSheetInput | CommentCreateManyBugSheetInput[]
    skipDuplicates?: boolean
  }

  export type AppUpsertWithoutBugSheetsInput = {
    update: XOR<AppUpdateWithoutBugSheetsInput, AppUncheckedUpdateWithoutBugSheetsInput>
    create: XOR<AppCreateWithoutBugSheetsInput, AppUncheckedCreateWithoutBugSheetsInput>
    where?: AppWhereInput
  }

  export type AppUpdateToOneWithWhereWithoutBugSheetsInput = {
    where?: AppWhereInput
    data: XOR<AppUpdateWithoutBugSheetsInput, AppUncheckedUpdateWithoutBugSheetsInput>
  }

  export type AppUpdateWithoutBugSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    project?: ProjectUpdateOneRequiredWithoutAppsNestedInput
    modules?: ModuleUpdateManyWithoutAppNestedInput
  }

  export type AppUncheckedUpdateWithoutBugSheetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    modules?: ModuleUncheckedUpdateManyWithoutAppNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutBugSheetInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutBugSheetInput, CommentUncheckedUpdateWithoutBugSheetInput>
    create: XOR<CommentCreateWithoutBugSheetInput, CommentUncheckedCreateWithoutBugSheetInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutBugSheetInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutBugSheetInput, CommentUncheckedUpdateWithoutBugSheetInput>
  }

  export type CommentUpdateManyWithWhereWithoutBugSheetInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutBugSheetInput>
  }

  export type TaskCreateWithoutCommentsInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    parent?: TaskCreateNestedOneWithoutSubtasksInput
    subtasks?: TaskCreateNestedManyWithoutParentInput
    module: ModuleCreateNestedOneWithoutTasksInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutCommentsInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    parentId?: string | null
    moduleId: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
    subtasks?: TaskUncheckedCreateNestedManyWithoutParentInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutCommentsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
  }

  export type BugSheetCreateWithoutCommentsInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    app: AppCreateNestedOneWithoutBugSheetsInput
  }

  export type BugSheetUncheckedCreateWithoutCommentsInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    appId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
  }

  export type BugSheetCreateOrConnectWithoutCommentsInput = {
    where: BugSheetWhereUniqueInput
    create: XOR<BugSheetCreateWithoutCommentsInput, BugSheetUncheckedCreateWithoutCommentsInput>
  }

  export type TaskUpsertWithoutCommentsInput = {
    update: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
    create: XOR<TaskCreateWithoutCommentsInput, TaskUncheckedCreateWithoutCommentsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutCommentsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutCommentsInput, TaskUncheckedUpdateWithoutCommentsInput>
  }

  export type TaskUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    module?: ModuleUpdateOneRequiredWithoutTasksNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    moduleId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type BugSheetUpsertWithoutCommentsInput = {
    update: XOR<BugSheetUpdateWithoutCommentsInput, BugSheetUncheckedUpdateWithoutCommentsInput>
    create: XOR<BugSheetCreateWithoutCommentsInput, BugSheetUncheckedCreateWithoutCommentsInput>
    where?: BugSheetWhereInput
  }

  export type BugSheetUpdateToOneWithWhereWithoutCommentsInput = {
    where?: BugSheetWhereInput
    data: XOR<BugSheetUpdateWithoutCommentsInput, BugSheetUncheckedUpdateWithoutCommentsInput>
  }

  export type BugSheetUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    app?: AppUpdateOneRequiredWithoutBugSheetsNestedInput
  }

  export type BugSheetUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    appId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    apps?: AppCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutActivityLogsInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    apps?: AppUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitUncheckedCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutActivityLogsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutActivityLogsInput, ProjectUncheckedCreateWithoutActivityLogsInput>
  }

  export type ProjectUpsertWithoutActivityLogsInput = {
    update: XOR<ProjectUpdateWithoutActivityLogsInput, ProjectUncheckedUpdateWithoutActivityLogsInput>
    create: XOR<ProjectCreateWithoutActivityLogsInput, ProjectUncheckedCreateWithoutActivityLogsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutActivityLogsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutActivityLogsInput, ProjectUncheckedUpdateWithoutActivityLogsInput>
  }

  export type ProjectUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    apps?: AppUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutActivityLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    apps?: AppUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUncheckedUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutUserVisitsInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    apps?: AppCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserVisitsInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    apps?: AppUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutProjectInput
    userStarred?: UserStarredUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserVisitsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserVisitsInput, ProjectUncheckedCreateWithoutUserVisitsInput>
  }

  export type ProjectUpsertWithoutUserVisitsInput = {
    update: XOR<ProjectUpdateWithoutUserVisitsInput, ProjectUncheckedUpdateWithoutUserVisitsInput>
    create: XOR<ProjectCreateWithoutUserVisitsInput, ProjectUncheckedCreateWithoutUserVisitsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUserVisitsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUserVisitsInput, ProjectUncheckedUpdateWithoutUserVisitsInput>
  }

  export type ProjectUpdateWithoutUserVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    apps?: AppUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserVisitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    apps?: AppUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutUserStarredInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    organization: OrganizationCreateNestedOneWithoutProjectsInput
    apps?: AppCreateNestedManyWithoutProjectInput
    members?: ProjectMemberCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserStarredInput = {
    id?: string
    name: string
    description?: string | null
    organizationId: string
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    apps?: AppUncheckedCreateNestedManyWithoutProjectInput
    members?: ProjectMemberUncheckedCreateNestedManyWithoutProjectInput
    activityLogs?: ActivityLogUncheckedCreateNestedManyWithoutProjectInput
    userVisits?: UserVisitUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserStarredInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserStarredInput, ProjectUncheckedCreateWithoutUserStarredInput>
  }

  export type ProjectUpsertWithoutUserStarredInput = {
    update: XOR<ProjectUpdateWithoutUserStarredInput, ProjectUncheckedUpdateWithoutUserStarredInput>
    create: XOR<ProjectCreateWithoutUserStarredInput, ProjectUncheckedCreateWithoutUserStarredInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUserStarredInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUserStarredInput, ProjectUncheckedUpdateWithoutUserStarredInput>
  }

  export type ProjectUpdateWithoutUserStarredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    organization?: OrganizationUpdateOneRequiredWithoutProjectsNestedInput
    apps?: AppUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserStarredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: StringFieldUpdateOperationsInput | string
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    apps?: AppUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyOrganizationInput = {
    id?: string
    name: string
    description?: string | null
    clientOrgId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
  }

  export type OrganizationMemberCreateManyOrganizationInput = {
    id?: string
    clerkUserId: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type ProjectUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    apps?: AppUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    apps?: AppUncheckedUpdateManyWithoutProjectNestedInput
    members?: ProjectMemberUncheckedUpdateManyWithoutProjectNestedInput
    activityLogs?: ActivityLogUncheckedUpdateManyWithoutProjectNestedInput
    userVisits?: UserVisitUncheckedUpdateManyWithoutProjectNestedInput
    userStarred?: UserStarredUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    clientOrgId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationMemberUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationMemberUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppCreateManyProjectInput = {
    id?: string
    name: string
    type: $Enums.AppType
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
  }

  export type ProjectMemberCreateManyProjectInput = {
    id?: string
    clerkUserId: string
    name: string
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type ActivityLogCreateManyProjectInput = {
    id?: string
    action: $Enums.ActivityAction
    field?: string | null
    oldValue?: string | null
    newValue?: string | null
    userId: string
    userName: string
    entityType: $Enums.EntityType
    entityId: string
    entityTitle: string
    createdAt?: Date | string
  }

  export type UserVisitCreateManyProjectInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    viewType?: string | null
    visitedAt?: Date | string
  }

  export type UserStarredCreateManyProjectInput = {
    id?: string
    userId: string
    projectName: string
    appId?: string | null
    appName?: string | null
    createdAt?: Date | string
  }

  export type AppUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    modules?: ModuleUpdateManyWithoutAppNestedInput
    bugSheets?: BugSheetUpdateManyWithoutAppNestedInput
  }

  export type AppUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    modules?: ModuleUncheckedUpdateManyWithoutAppNestedInput
    bugSheets?: BugSheetUncheckedUpdateManyWithoutAppNestedInput
  }

  export type AppUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumAppTypeFieldUpdateOperationsInput | $Enums.AppType
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectMemberUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectMemberUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    entityTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    entityTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityLogUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumActivityActionFieldUpdateOperationsInput | $Enums.ActivityAction
    field?: NullableStringFieldUpdateOperationsInput | string | null
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    entityType?: EnumEntityTypeFieldUpdateOperationsInput | $Enums.EntityType
    entityId?: StringFieldUpdateOperationsInput | string
    entityTitle?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVisitUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    viewType?: NullableStringFieldUpdateOperationsInput | string | null
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVisitUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    viewType?: NullableStringFieldUpdateOperationsInput | string | null
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserVisitUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    viewType?: NullableStringFieldUpdateOperationsInput | string | null
    visitedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStarredUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStarredUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserStarredUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    projectName?: StringFieldUpdateOperationsInput | string
    appId?: NullableStringFieldUpdateOperationsInput | string | null
    appName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateManyAppInput = {
    id?: string
    name: string
    order?: number
    taskCounter?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BugSheetCreateManyAppInput = {
    id?: string
    module: string
    description: string
    status?: $Enums.Status
    priority?: $Enums.Priority
    assignedTo?: string | null
    remarks?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
  }

  export type ModuleUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: TaskUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    taskCounter?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BugSheetUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUpdateManyWithoutBugSheetNestedInput
  }

  export type BugSheetUncheckedUpdateWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: CommentUncheckedUpdateManyWithoutBugSheetNestedInput
  }

  export type BugSheetUncheckedUpdateManyWithoutAppInput = {
    id?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyModuleInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    parentId?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
  }

  export type TaskUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    parent?: TaskUpdateOneWithoutSubtasksNestedInput
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskCreateManyParentInput = {
    id?: string
    taskCode?: string | null
    title: string
    description?: string | null
    type?: $Enums.TaskType
    priority?: $Enums.Priority
    status?: $Enums.Status
    assignedTo?: string | null
    remarks?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    moduleId: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy?: string | null
    creatorName?: string | null
    reporterId?: string | null
    reporterName?: string | null
  }

  export type CommentCreateManyTaskInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    bugSheetId?: string | null
    createdAt?: Date | string
  }

  export type TaskHistoryCreateManyTaskInput = {
    id?: string
    actorId: string
    actorName: string
    field: string
    oldValue?: string | null
    newValue?: string | null
    createdAt?: Date | string
  }

  export type TaskUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TaskUpdateManyWithoutParentNestedInput
    module?: ModuleUpdateOneRequiredWithoutTasksNestedInput
    comments?: CommentUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moduleId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
    subtasks?: TaskUncheckedUpdateManyWithoutParentNestedInput
    comments?: CommentUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskCode?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumTaskTypeFieldUpdateOperationsInput | $Enums.TaskType
    priority?: EnumPriorityFieldUpdateOperationsInput | $Enums.Priority
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    assignedTo?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    moduleId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    creatorName?: NullableStringFieldUpdateOperationsInput | string | null
    reporterId?: NullableStringFieldUpdateOperationsInput | string | null
    reporterName?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bugSheet?: BugSheetUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    bugSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    bugSheetId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    actorName?: StringFieldUpdateOperationsInput | string
    field?: StringFieldUpdateOperationsInput | string
    oldValue?: NullableStringFieldUpdateOperationsInput | string | null
    newValue?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyBugSheetInput = {
    id?: string
    content: string
    authorId: string
    authorName: string
    taskId?: string | null
    createdAt?: Date | string
  }

  export type CommentUpdateWithoutBugSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutBugSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutBugSheetInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    authorName?: StringFieldUpdateOperationsInput | string
    taskId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}