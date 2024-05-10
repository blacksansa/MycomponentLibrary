import { getAllCollectionDocuments } from "@/mongo/mongo"
import { NextResponse } from "next/server"

async function getResponse() {
  let result, error
  try {
    result = await getAllCollectionDocuments("sample_analytics","accounts")
  } catch (e) {
    error = e
  }

  if(error) {
    return error
  } else {
    return result 
  }

}

export async function GET () {
  const data = await getResponse()
    return NextResponse.json(data)
  }
