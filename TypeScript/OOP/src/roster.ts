interface Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email?: string;
    age?: number;
}

class Department {
    public employees: Array<Employee>;
    private totalSalary: number;

    constructor() {
        this.employees = [];
        this.totalSalary = 0;
    }

    addEmployee(employee: Employee, salary: number) {
        this.employees.push(employee); 
        this.totalSalary += salary;
    }

    calcAvgSalary() {
        const avgSalary = this.totalSalary / this.employees.length;
        return avgSalary;
    }
}

type departmentsObj = {[key: string]: Department};
const departments: departmentsObj = {};

function recordEmployeesInDepartments(input: Array<string>) {
    const employeesCount: number = Number(input.shift());
    
    for (let i = 0; i < employeesCount; i++) {
        const [name, salary, position, department, email, age] = input[i].split(' ');
        const employee: Employee = {
            name: name,
            salary: Number(salary),
            position: position,
            department: department
        }

        if (email) {
            employee.email = email;
        }

        if (age) {
            employee.age = Number(age);
        }

        if (department in departments) {
            const getDepartment = departments[department];
            getDepartment.addEmployee(employee, Number(salary));

        } else {
            const newDepartment = new Department();
            departments[department] = newDepartment;
            newDepartment.addEmployee(employee, Number(salary));
        }
    }

    getHeighestSalariedDepartment();
}

function getHeighestSalariedDepartment() {
    let heighestSalariedDepartment: string = "";
    let heighestSalary: number = 0;

    for (const department of Object.entries(departments)) {
        const salary = department[1].calcAvgSalary();    

        if (salary > heighestSalary) {
            heighestSalary = salary;
            heighestSalariedDepartment = department[0];
        }
    }

    console.log(`Highest Average Salary: ${heighestSalariedDepartment}`);
    getEmployees(heighestSalariedDepartment);
}

function getEmployees(department: string) {
    const employees = departments[department].employees;
    const sortedEmployees = employees.sort((a, b) => b.salary - a.salary);

    for (const employee of sortedEmployees) {
        if (!employee.email) {
            employee.email = 'n/a';
        }

        if (!employee.age) {
            employee.age = -1;
        }
        console.log(`${employee.name} ${employee.salary} ${employee.email} ${employee.age}`); 
    }
}

recordEmployeesInDepartments(["6",
                            "Silver 496.37 Temp Coding silver@yahoo.com",
                            "Sam 610.13 Manager Sales",
                            "John 609.99 Manager Sales john@abv.bg 44",
                            "Venci 0.02 Director BeerDrinking beer@beer.br 23",
                            "Andre 700.00 Director Coding",
                            "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey"])

