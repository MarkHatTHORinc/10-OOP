const TeamMember = require("../lib/TeamMember");
const Employee = require("../lib/TeamMember");

describe("TeamMember", () => {
    it("Can instantiate TeamMember instance", () => {
        const e = new TeamMember();
        expect(typeof(e)).toBe("object");
    });

    it("Can set name via constructor argument", () => {
        const name = "Fred";
        const e = new TeamMember(name);
        expect(e.name).toBe(name);
    });

    it("Can set id via constructor argument", () => {
        const testValue = 777;
        const e = new TeamMember("Wilma", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Can set email via constructor argument", () => {
        const testValue = "barney.rubble@bedrock.com";
        const e = new TeamMember("Barney", 777, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Fred";
            const e = new TeamMember(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 777;
            const e = new TeamMember("Wilma", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "barney.rubble@bedrock.com";
            const e = new TeamMember("Barney", 777, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"TeamMember\"", () => {
            const testValue = "House Wife";
            const e = new TeamMember("Betty", 666, "betty.rubble@bedrock.com", testValue);
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});