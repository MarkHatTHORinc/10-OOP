const Employee = require("./teamMember")

class Manager extends TeamMember {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber.trim();
        this.title = "Manager";
    }
   
    getRole() {
        return this.title;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager
