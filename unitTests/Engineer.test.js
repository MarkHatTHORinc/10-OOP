const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Pebbles", 123, "pebbles.flinstone@bedrock.com", "GitHubId");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubId";
  const e = new Engineer("Pebbles", 123, "pebbles.flinstone@bedrock.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});