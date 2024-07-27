import { getCollection, addDocument } from "@/mongo/mongo"
import { NextResponse } from "next/server"

async function Collection() {
  let result, error
  try {
    result = await getCollection("User", "accounts")
  } catch (e) {
    error = e
  }

  if (error) {
    return error
  } else {
    return result
  }

}

const documentObj = {
  "name": "lambiOmeu",
  "email": "comiOseu@gmail.com",
  "passwordHash": "4465454545"
}

export async function GET() {
  const collection = await Collection()
  const isWorking = addDocument(collection, documentObj)
  return isWorking
}
