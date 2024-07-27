// Types used in the application

// Auth Types
export type User = {
  id: "string",
  username: "string"
  email: "string"
  passwordHash: "string"
  createAt: "string"
  updatedAt: "string"
}

export type MongoClientOptions = {
  appName: string;
  compressors: string[];
  connectTimeoutMS: number;
  credentials: {
    mechanism: string;
    mechanismProperties: Record<string, unknown>;
    password: string;
    source: string;
    username: string;
  };
  dbName: string;
  directConnection: boolean;
  driverInfo: {
    name: string;
    version: string;
  };
  enableUtf8Validation: boolean;
  extendedMetadata: Record<string, unknown>;
  forceServerObjectId: boolean;
  heartbeatFrequencyMS: number;
  hosts: string[];
  loadBalanced: boolean;
  localThresholdMS: number;
  maxConnecting: number;
  maxIdleTimeMS: number;
  maxPoolSize: number;
  metadata: {
    application: {
      name: string;
    };
    driver: {
      name: string;
      version: string;
    };
    os: {
      architecture: string;
      name: string;
      type: string;
      version: string;
    };
    platform: string;
  };
  minHeartbeatFrequencyMS: number;
  minPoolSize: number;
  mongoLoggerOptions: {
    componentSeverities: {
      client: string;
      command: string;
      connection: string;
      default: string;
      serverSelection: string;
      topology: string;
    };
    logDestination: {
      write: Function;
    };
    logDestinationIsStdErr: boolean;
    maxDocumentLength: number;
  };
  monitorCommands: boolean;
  noDelay: boolean;
  pkFactory: {
    createPk: Function;
  };
  raw: boolean;
  readPreference: {
    mode: string;
  };
  retryReads: boolean;
  retryWrites: boolean;
  serverMonitoringMode: string;
  serverSelectionTimeoutMS: number;
  socketTimeoutMS: number;
  srvHost: string;
  srvMaxHosts: number;
  srvServiceName: string;
  tls: boolean;
  userSpecifiedAuthSource: boolean;
  userSpecifiedReplicaSet: boolean;
  waitQueueTimeoutMS: number;
  writeConcern: {
    w: string;
  };
  zlibCompressionLevel: number;
};

export type MongoClientState = {
  activeSessions: Set<any>;
  authProviders: {
    existingProviders: Map<any, any>;
  };
  bsonOptions: {
    bsonRegExp: boolean;
    enableUtf8Validation: boolean;
    fieldsAsRaw: Record<string, unknown>;
    ignoreUndefined: boolean;
    promoteBuffers: boolean;
    promoteLongs: boolean;
    promoteValues: boolean;
    raw: boolean;
    serializeFunctions: boolean;
    useBigInt64: boolean;
  };
  hasBeenClosed: boolean;
  isMongoClient: boolean;
  namespace: {
    collection: undefined;
    db: string;
  };
  options: MongoClientOptions;
  readConcern: undefined;
  readPreference: {
    mode: string;
  };
  sessionPool: {
    client: MongoClientState;
    sessions: {
      count: number;
      head: {
        next: any;
        prev: any;
        value: null;
      };
    };
  };
  url: string;
  writeConcern: {
    w: string;
  };
};

export type MongoClient = {
  _events: Record<string, any>;
  _eventsCount: number;
  _maxListeners: number | undefined;
  mongoLogger: unknown | undefined;
  s: MongoClientState;
  [Symbol(kCapture)]: boolean;
  [Symbol(options)]: MongoClientOptions;
};

