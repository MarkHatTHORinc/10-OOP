// -----------------------------------------------------------------------------
// Class:    Intern
// Purpose:  Extend the Employee Object to add Intern properties
// Input:    <string> employee name 
//           <int> employee id
//           <string> email
//           <string> school attended 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

const Employee = require("./employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        if (!this.school === undefined) this.school = school.trim;
        else (this.school = school);
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