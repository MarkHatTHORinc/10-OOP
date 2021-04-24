// -----------------------------------------------------------------------------
// Class:    Manager
// Purpose:  Extend the Employee Object to add Manager properties
// Input:    <string> employee name 
//           <int> employee id
//           <string> email
//           <string> office number
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

const Employee = require("./employee")

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
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
