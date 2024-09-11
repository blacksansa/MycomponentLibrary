import { Collection } from "@/mongo/collection"

const accountsCollection = new Collection("Users", "accounts")

function createUser(newUser: object) {
  return accountsCollection.addDocument(newUser)
}

export async function login(email: string, passwd: string, url: string) {
  const requestBody = {
    method: "POST",
    body: email + " " + passwd
  }
  try { const result = await fetch(url, requestBody) } catch (e) { throw new Error("Error Login to account") }
}

