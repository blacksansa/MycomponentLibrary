import { client } from "./client"

export async function getCollectionDocuments(db_name: string, col_name: string) {
  let result: object[] = []
  let error;
  try {
    const database = client.db(db_name)
    const collection = database.collection(col_name)
    result = await collection.find().toArray()
  }
  catch (e) {
    if (e) {
      error = e
    }
  }
  if (error) {
    throw new Error("UNKNOW ERROR")
  } else if (result.length === 0) {
    throw new Error("WRONG PARAMETERS")
  } else {
    return result
  }
}
export async function queryCollectionDocuments(db_name: string, col_name: string, query: object) {
  let result: object[] = []
  try {
    const database = client.db(db_name)
    const collection = database.collection(col_name)
    result = await collection.find(query).toArray()
  }
  catch (e) {
    if (e) {
      return "REQUEST FAIL"
    }
  }
  finally {
    if (result.length > 0) {
      return result
    } else {
      throw new Error("WRONG PARAMETERS")
    }
  }
}
export async function addDocument(db_name: string, col_name: string, doc: object) {
  let result
  try {

    const database = client.db(db_name)
    const collection = database.collection(col_name)
    result = await collection.insertOne(doc)
  }
  catch (e) {
    if (e) {
      throw new Error("UNKNOW ERROR")
    }
  }
  if (!result) {
    result = "Fail"
  }
  console.log(result)
  return result
}

export async function updateDocument(db_name: string, col_name: string, id: object) {
  let result: object[] = []
  try {
    const database = client.db(db_name)
    const collection = database.collection(col_name)
  }
  catch (e) {
    if (e) {
      return "REQUEST FAIL"
    }
  }
  finally {
    if (result.length > 0) {
      return result
    } else {
      throw new Error("WRONG PARAMETERS")
    }
  }
}



