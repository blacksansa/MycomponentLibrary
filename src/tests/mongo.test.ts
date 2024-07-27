/**
 * @jest-environment node
 */
// my-broken-node-only-test.js

import { getCollectionDocuments } from "@/mongo/mongo"

describe("Mongo functions ", () => {

  it("Get all collection documents", async () => {
    const listOfDocuments = await getCollectionDocuments("Users", "accounts")
    expect(listOfDocuments).toBeTruthy()
    console.log(listOfDocuments)
    const wrongParameter = await getCollectionDocuments("wrong", "parameters")
    expect(wrongParameter).toEqual("Wrong parameters")
  })

  it.todo("Get a unique collection document with an id")

  it.todo("add a document to the database")
})

