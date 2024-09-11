/**
 * @jest-environment node
 */
// my-broken-node-only-test.s



/**
describe("Testing collection class ", () => {

  const myUsers = new Collection("Users", "accounts")
  beforeEach(() => {
    myUsers.connect()
  })

  it("returns all documents", async () => {
    const myData = await myUsers.getDocuments()
    expect(myData).toBeTruthy()
  })

  it("return a document matching the query", async () => {
    const result = await myUsers.find({ name: "bruno" })
    expect(result).toBeTruthy()
  })
})

*/

import { login } from "@/auth/auth";

describe("Tests for the login function", () => {
  it("get a 200 status code", async () => {
    console.log("test is running")
    const result = await login("brunosant100@gmail.com", "12345678", "/api/auth")
    expect(result).resolves.toBe(200)
  })
})

