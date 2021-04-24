// -----------------------------------------------------------------------------
// Class:    Engineer
// Purpose:  Extend the Employee Object to add Engineer properties
// Input:    <string> employee name 
//           <int> employee id
//           <string> email
//           <string> github profile 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super (name, id, email);
        if (!this.gitHub === undefined) this.gitHub = gitHub.trim();
        else this.gitHub = gitHub;
        this.title = "Engineer";
    }

    getGitHub() {
        return this.gitHub;
    }

    getRole() {
        return this.title;
    }
}

module.exports = Engineer