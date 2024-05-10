import { config } from "@/config";
import { MongoClient } from "mongodb";

const client = getClient();

function getClient() {
  const client = new MongoClient(config.mongoUri);
  if (!client) {
    throw new Error("Connection Fail");
  } else {
    return client;
  }
}

async function getCollection(databaseName: string, collectionName: string) {
  await client.connect();
  const database = client.db(databaseName);
  const collection = database.collection(collectionName);
  return collection;
}

export async function getAllCollectionDocuments(
  databaseName: string,
  collectionName: string,
) {
  const collection = await getCollection(databaseName, collectionName);
  const data = await collection.find().toArray();
  client.close();
  return data;
}
