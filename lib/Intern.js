//variable to import Employee class
const Employee = require('./Employee');

//creating Intern class that extends Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    //return user imput for school
    getSchool() {
        return this.school;
    }

    //override Employee role to Intern
    getRole() {
        return ("Intern");
    }
}

const intern = new Intern(name, id, email, school);