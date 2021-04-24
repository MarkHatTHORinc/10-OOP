// -----------------------------------------------------------------------------
// Test:     Manager.js
// Purpose:  Use jest to test Manager class.
// Input:    <none> 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const mgr = new Manager("Mr Slate", 555, "test@test.com", testValue);
  expect(mgr.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const mgr = new Manager("Mr Slate", 555, "stanley.slate@bedrock.com", 123);
  expect(mgr.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 123;
  const mgr = new Manager("Mr Slate", 555, "stanley.slate@bedrock.com", testValue);
  expect(mgr.getOfficeNumber()).toBe(testValue);
});