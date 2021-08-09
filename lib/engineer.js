// import parent class from employee.js
import Employee from "./employee.js";

class Engineer extends Employee{
    //add github parameter to Engineer constructor
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }

    
    // override role to 'Engineer'
    getRole(){
        return 'Engineer';
    }
    
    getGithub(){
        return this.github;
    }
}
export {Engineer};
