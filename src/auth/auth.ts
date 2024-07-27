import { getCollection, getDocumentWith, AddDocument } from "@/mongo/mongo";
import { User } from "@/type/types";
function getUsersCollection() {
  const data = getCollection("users", "creds")
  if (data) { return data } else { throw new Error("Error to get database") }
}

const userCollection = getUsersCollection()

function addUser(user: User) {
  AddDocument(userCollection, user)
}

function getUser(id: string) {
  const userObj = getDocumentWith(userCollection, { id: id })
}
