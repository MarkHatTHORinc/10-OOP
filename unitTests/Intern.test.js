const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Dino", 111, "dino@bedrock.com", "Rockland University");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Rockland University";
  const e = new Intern("Dino", 111, "dino@bedrock.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});