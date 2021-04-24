// -----------------------------------------------------------------------------
// Test:     Intern.js
// Purpose:  Use jest to test Intern class.
// Input:    <none> 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "T-Rex University";
  const intern = new Intern("Dino", 111, "dino@bedrock.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("Dino", 111, "dino@bedrock.com", "Rockland University");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Rockland University";
  const intern = new Intern("Dino", 111, "dino@bedrock.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});