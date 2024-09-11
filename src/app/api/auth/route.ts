import { Collection } from "@/mongo/collection";
import { NextResponse } from "next/server";

async function findUserByEmailAndPassword(email: string, password: string) {
  const accountsCollection = new Collection("Users", "accounts")
  accountsCollection.connect()
  const result = await accountsCollection.find({ email: email, password: password })
  return result
}

export async function POST(request: Request) {
  try {
    // Get the JSON body from the request
    const { email, password } = await request.json();

    // Check if user exists
    const user = await findUserByEmailAndPassword(email, password);

    if (user) {
      // Return user object if found
      return NextResponse.json({ user });
    } else {
      // Return 401 if user is not found
      return NextResponse.json({ error: 'User not found or incorrect password' }, { status: 401 });
    }
  } catch (error) {
    // Return 500 on error
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
