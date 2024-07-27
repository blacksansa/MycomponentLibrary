import { client } from "./client"

export async function getCollectionDocuments(db_name: string, col_name: string) {

  let result: object[] = []
  //Debug variables
  let requestStatus
  let error

  try {
    const database = client.db(db_name)
    const collection = database.collection(col_name)
    const myData = await collection.find().toArray()
    result = myData
    requestStatus = "successful"
  }
  catch (e) {
    requestStatus = "fail"
    error = e
  }
  finally {
    await client.close();
  }

  // Return conditionals *** A empity [] means that mongo don't find in the document database

  if (requestStatus === "successful") {
    return result
  }
  if (requestStatus === "fail" && result.length === 0) {
    return "Wrong parameters"
  }
  else if ("fail") {
    return 0
  }

}

export async function getCollectionUniqueDoc(db_name: string, col_name: string) {

  let result: object[] = []
  //Debug variables
  let requestStatus
  let error

  try {
    const database = client.db(db_name)
    const collection = database.collection(col_name)
    const myData = await collection.find().toArray()
    result = myData
    requestStatus = "successful"
  }
  catch (e) {
    requestStatus = "fail"
    error = e
  }
  finally {
    await client.close();
  }

  // Return conditionals *** A empity [] means that mongo don't find in the document database

  if (requestStatus === "successful") {
    return result
  }
  if (requestStatus === "fail" && result.length === 0) {
    return "Wrong parameters"
  }
  else if ("fail") {
    return 0
  }

}







