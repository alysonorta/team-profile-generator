//adding variable to import Employee class
const Employee = require('./Employee');

//creating Engineer class that extends Employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    //return user imput for github acct
    getGithub() {
        return this.github;
    }

    //override Employee role to Engineer
    getRole() {
        return ("Engineer");
    }
};

const engineer = new Engineer(name, id, email, github);