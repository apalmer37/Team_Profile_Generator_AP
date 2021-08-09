// import parent class from employee.js
import Employee from "./employee.js";

class Intern extends Employee{
    // extends school
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    // override role to 'Intern'
    getRole(){
        return 'Intern';
    }

    getSchool(){
        return this.school;
    }


}
export {Intern};
