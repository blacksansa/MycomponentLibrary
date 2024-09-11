/**
 * @jest-environment node
 */
// my-broken-node-only-test.s

import { login } from "@/auth/auth";

describe("Tests for the login function", () => {
  it("get a 200 status code", async () => {
    console.log("test is running")
    const result = await login("brunosant100@gmail.com", "12345678", "/api/auth")
    expect(result).resolves.toBe(200)
  })
})
