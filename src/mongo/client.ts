import { config } from "@/config";
import { MongoClient, ServerApiVersion } from "mongodb";

export const client = getClient();

function getClient() {
  const client = new MongoClient(config.mongoUri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: false,
      deprecationErrors: true,
    }
  });
  if (!client) {
    throw new Error("Connection Fail");
  } else {

    client.connect()
    return client;
  }
}
