import { client } from "./client"
import { getCollectionDocuments, queryCollectionDocuments, addDocument } from "./mongo";

export class Collection {
  constructor(db_name: string, col_name: string) {
    this.databaseName = db_name;
    this.collectionName = col_name
    this.client = client
  }
  databaseName: string;
  collectionName: string;
  client: Object;

  connect() {
    client.connect()
  }
  close() {
    client.close()
  }
  getDocuments() {
    return getCollectionDocuments(this.databaseName, this.collectionName)
  }
  find(query: object) {
    return queryCollectionDocuments(this.databaseName, this.collectionName, query)
  }
  addDocument(document: object) {
    return addDocument(this.databaseName, this.collectionName, document)
  }

  updateDocument(document_id: string) {
    return "WORKING ..."
  }
}
