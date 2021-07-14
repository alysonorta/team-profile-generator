//variable to import Employee class
const Employee = require('./Employee');

//creating Manager class that extends Employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    //override Employee role to Manager
    getRole() {
        return ("Manager");
    }
}


const manager = new Manager(name, id, email);