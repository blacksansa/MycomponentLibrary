import { MongoClient, MongoClientState, MongoClientOptions } from "@/type/types";

export function isMongoClient(obj: any): obj is MongoClient {
  return obj &&
    typeof obj._events === 'object' &&
    typeof obj._eventsCount === 'number' &&
    (typeof obj._maxListeners === 'number' || obj._maxListeners === undefined) &&
    (obj.mongoLogger === undefined || typeof obj.mongoLogger === 'object') &&
    isMongoClientState(obj.s) &&
    typeof obj[Symbol.for('kCapture')] === 'boolean' &&
    isMongoClientOptions(obj[Symbol.for('options')]);
}
function isMongoClientState(obj: any): obj is MongoClientState {
  return obj &&
    obj.activeSessions instanceof Set &&
    typeof obj.authProviders === 'object' &&
    obj.authProviders.existingProviders instanceof Map &&
    typeof obj.bsonOptions === 'object' &&
    typeof obj.bsonOptions.bsonRegExp === 'boolean' &&
    typeof obj.bsonOptions.enableUtf8Validation === 'boolean' &&
    typeof obj.bsonOptions.fieldsAsRaw === 'object' &&
    typeof obj.bsonOptions.ignoreUndefined === 'boolean' &&
    typeof obj.bsonOptions.promoteBuffers === 'boolean' &&
    typeof obj.bsonOptions.promoteLongs === 'boolean' &&
    typeof obj.bsonOptions.promoteValues === 'boolean' &&
    typeof obj.bsonOptions.raw === 'boolean' &&
    typeof obj.bsonOptions.serializeFunctions === 'boolean' &&
    typeof obj.bsonOptions.useBigInt64 === 'boolean' &&
    typeof obj.hasBeenClosed === 'boolean' &&
    typeof obj.isMongoClient === 'boolean' &&
    typeof obj.namespace === 'object' &&
    (obj.namespace.collection === undefined || typeof obj.namespace.collection === 'string') &&
    typeof obj.namespace.db === 'string' &&
    isMongoClientOptions(obj.options) &&
    (obj.readConcern === undefined || typeof obj.readConcern === 'object') &&
    typeof obj.readPreference === 'object' &&
    typeof obj.readPreference.mode === 'string' &&
    typeof obj.sessionPool === 'object' &&
    obj.sessionPool.client === obj &&
    typeof obj.sessionPool.sessions === 'object' &&
    typeof obj.sessionPool.sessions.count === 'number' &&
    typeof obj.sessionPool.sessions.head === 'object' &&
    typeof obj.sessionPool.sessions.head.next === 'object' &&
    typeof obj.sessionPool.sessions.head.prev === 'object' &&
    obj.sessionPool.sessions.head.value === null &&
    typeof obj.url === 'string' &&
    typeof obj.writeConcern === 'object' &&
    typeof obj.writeConcern.w === 'string';
}

function isMongoClientOptions(obj: any): obj is MongoClientOptions {
  return obj &&
    typeof obj.appName === 'string' &&
    Array.isArray(obj.compressors) &&
    obj.compressors.every((comp: any) => typeof comp === 'string') &&
    typeof obj.connectTimeoutMS === 'number' &&
    typeof obj.credentials === 'object' &&
    typeof obj.credentials.mechanism === 'string' &&
    typeof obj.credentials.mechanismProperties === 'object' &&
    typeof obj.credentials.password === 'string' &&
    typeof obj.credentials.source === 'string' &&
    typeof obj.credentials.username === 'string' &&
    typeof obj.dbName === 'string' &&
    typeof obj.directConnection === 'boolean' &&
    typeof obj.driverInfo === 'object' &&
    typeof obj.driverInfo.name === 'string' &&
    typeof obj.driverInfo.version === 'string' &&
    typeof obj.enableUtf8Validation === 'boolean' &&
    typeof obj.extendedMetadata === 'object' &&
    typeof obj.forceServerObjectId === 'boolean' &&
    typeof obj.heartbeatFrequencyMS === 'number' &&
    Array.isArray(obj.hosts) &&
    obj.hosts.every((host: any) => typeof host === 'string') &&
    typeof obj.loadBalanced === 'boolean' &&
    typeof obj.localThresholdMS === 'number' &&
    typeof obj.maxConnecting === 'number' &&
    typeof obj.maxIdleTimeMS === 'number' &&
    typeof obj.maxPoolSize === 'number' &&
    typeof obj.metadata === 'object' &&
    typeof obj.metadata.application === 'object' &&
    typeof obj.metadata.application.name === 'string' &&
    typeof obj.metadata.driver === 'object' &&
    typeof obj.metadata.driver.name === 'string' &&
    typeof obj.metadata.driver.version === 'string' &&
    typeof obj.metadata.os === 'object' &&
    typeof obj.metadata.os.architecture === 'string' &&
    typeof obj.metadata.os.name === 'string' &&
    typeof obj.metadata.os.type === 'string' &&
    typeof obj.metadata.os.version === 'string' &&
    typeof obj.metadata.platform === 'string' &&
    typeof obj.minHeartbeatFrequencyMS === 'number' &&
    typeof obj.minPoolSize === 'number' &&
    typeof obj.mongoLoggerOptions === 'object' &&
    typeof obj.mongoLoggerOptions.componentSeverities === 'object' &&
    typeof obj.mongoLoggerOptions.componentSeverities.client === 'string' &&
    typeof obj.mongoLoggerOptions.componentSeverities.command === 'string' &&
    typeof obj.mongoLoggerOptions.componentSeverities.connection === 'string' &&
    typeof obj.mongoLoggerOptions.componentSeverities.default === 'string' &&
    typeof obj.mongoLoggerOptions.componentSeverities.serverSelection === 'string' &&
    typeof obj.mongoLoggerOptions.componentSeverities.topology === 'string' &&
    typeof obj.mongoLoggerOptions.logDestination === 'object' &&
    typeof obj.mongoLoggerOptions.logDestination.write === 'function' &&
    typeof obj.mongoLoggerOptions.logDestinationIsStdErr === 'boolean' &&
    typeof obj.mongoLoggerOptions.maxDocumentLength === 'number' &&
    typeof obj.monitorCommands === 'boolean' &&
    typeof obj.noDelay === 'boolean' &&
    typeof obj.pkFactory === 'object' &&
    typeof obj.pkFactory.createPk === 'function' &&
    typeof obj.raw === 'boolean' &&
    typeof obj.readPreference === 'object' &&
    typeof obj.readPreference.mode === 'string' &&
    typeof obj.retryReads === 'boolean' &&
    typeof obj.retryWrites === 'boolean' &&
    typeof obj.serverMonitoringMode === 'string' &&
    typeof obj.serverSelectionTimeoutMS === 'number' &&
    typeof obj.socketTimeoutMS === 'number' &&
    typeof obj.srvHost === 'string' &&
    typeof obj.srvMaxHosts === 'number' &&
    typeof obj.srvServiceName === 'string' &&
    typeof obj.tls === 'boolean' &&
    typeof obj.userSpecifiedAuthSource === 'boolean' &&
    typeof obj.userSpecifiedReplicaSet === 'boolean' &&
    typeof obj.waitQueueTimeoutMS === 'number' &&
    typeof obj.writeConcern === 'object' &&
    typeof obj.writeConcern.w === 'string' &&
    typeof obj.zlibCompressionLevel === 'number';
}

