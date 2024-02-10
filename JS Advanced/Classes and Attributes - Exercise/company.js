class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(...input) {

        for (const element of input) {
            if (element == "" || element == undefined || element == null) {
                throw new Error(`Invalid input!`);
            }
        }

        const [name, salary, position, department] = input;

        if (salary < 0) {
            throw new Error(`Invalid input!`);
        }

        if (!(department in this.departments)) {
            this.departments[department] = [];
        }
       
        this.departments[department].push({name, salary, position});
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    };


    bestDepartment() {
        let result = [];
        let heighestAvgSalary = 0;
        let bestDepartment;

        for (const [departmentName, employees] of Object.entries(this.departments)) {
            let currDepartmentSalary = 0;

            for (const employee of employees) {
                currDepartmentSalary += employee.salary;
            }

            let numsOfEmployees = employees.length;
            let currAvgSalary = currDepartmentSalary / numsOfEmployees;

            if (heighestAvgSalary < currAvgSalary) {
                heighestAvgSalary = currAvgSalary;
                bestDepartment = departmentName;
            }
        }
        
        result.push(`Best Department is: ${bestDepartment}`);
        result.push(`Average salary: ${heighestAvgSalary.toFixed(2)}`);

        let sortedEmployees = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name));
        for (const employee of sortedEmployees) {
            result.push(`${employee.name} ${employee.salary} ${employee.position}`)
        };

        return result.join(`\n`);
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
