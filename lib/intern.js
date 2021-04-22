const Employee = require("./teamMember")

class Intern extends TeamMember {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school.trim;
        this.title = "Intern";
    }

    getRole() {
        return this.title;
    }
    
    getSchool() {
        return this.school;
    }
}

module.exports = Intern