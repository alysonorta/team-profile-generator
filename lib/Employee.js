// Creating constructor for Employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //return name from user input
    getName() {
        return this.name;
    };

    //return id from user input
    getId() {
        return this.id;
    }

    //return email from user input
    getEmail() {
        return this.email;
    }

    //return role "employee"
    getRole() {
        return Employee;
    }
};

module.exports = Employee;