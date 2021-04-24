// -----------------------------------------------------------------------------
// Test:     Employee.js
// Purpose:  Use jest to test Employee class.
// Input:    <none> 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

const Employee = require("../lib/Employee");

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const emp = new Employee();
        expect(typeof(emp)).toBe("object");
    });

    it("Can set name via constructor argument", () => {
        const name = "Fred";
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 777;
        const emp = new Employee("Wilma", testValue);
        expect(emp.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "barney.rubble@bedrock.com";
        const emp = new Employee("Barney", 777, testValue);
        expect(emp.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Fred";
            const emp = new Employee(testValue);
            expect(emp.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 777;
            const emp = new Employee("Wilma", testValue);
            expect(emp.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "barney.rubble@bedrock.com";
            const emp = new Employee("Barney", 777, testValue);
            expect(emp.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const emp = new Employee("Betty", 666, "betty.rubble@bedrock.com", testValue);
            expect(emp.getRole()).toBe(testValue);
        });
    });
    
});