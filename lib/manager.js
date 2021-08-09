// import parent class from employee.js
import Employee from "./employee.js";

class Manager extends Employee{
    //add officeNumber parameter to Manager constructor
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    // override role to 'Manager'
    getRole(){
        return 'Manager';
    }

}

export {Manager};
