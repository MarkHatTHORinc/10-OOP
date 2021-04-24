// -----------------------------------------------------------------------------
// Test:     Engineer.js
// Purpose:  Use jest to test Engineer class.
// Input:    <none> 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const eng = new Engineer("Pebbles", 123, "pebbles.flinstone@bedrock.com", testValue);
  expect(eng.gitHub).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const eng = new Engineer("Pebbles", 123, "pebbles.flinstone@bedrock.com", "GitHubId");
  expect(eng.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubId";
  const eng = new Engineer("Pebbles", 123, "pebbles.flinstone@bedrock.com", testValue);
  expect(eng.getGitHub()).toBe(testValue);
});