

class TeamMember {
    constructor(name, id, email){
        this.name = name.trim();
        this.id = id;
        this.email = email.trim();
        this.title = "Team Member";
    }
    
    getName(){
        return this.name;
    }

    getId() {
        return this.id;

    }

    getEmail() {
        return this.email;

    }

    getRole() {
        return this.title;
    }
}


module.exports = TeamMember;