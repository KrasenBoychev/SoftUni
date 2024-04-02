function employees(employees: Array<string>): void{
    const list: Array<string> = [];

    for (const employee of employees) {
        const personalNum: number = employee.length;
        list.push(`Name: ${employee} -- Personal Number: ${personalNum}`);
    }

    console.log(list.join('\n'));
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
