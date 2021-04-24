// -----------------------------------------------------------------------------
// Class:    Employee
// Purpose:  Employee Master Class
// Input:    <string> employee name 
//           <int> employee id
//           <string> email 
// -----------------------------------------------------------------------------
// Author:   Mark Harrison
// Date:     April 20, 2021
// -----------------------------------------------------------------------------

class Employee {
    constructor(name, id, email) {
        if (!this.name === undefined) this.name = name.trim();
        else this.name = name;
        this.id = id;
        if (!this.email === undefined) this.email = email.trim();
        else this.email = email;
        this.role = "Employee";
    }
    
    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }

    getEmail() {
        return this.email;

    }

    getRole() {
        return this.role;
    }
}


module.exports = Employee;