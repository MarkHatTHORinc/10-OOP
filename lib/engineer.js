const Employee = require("./teamMember")

class Engineer extends TeamMember {
    constructor(name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub.trim();
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