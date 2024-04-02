"use strict";
function employees(employees) {
    const list = [];
    for (const employee of employees) {
        const personalNum = employee.length;
        list.push(`Name: ${employee} -- Personal Number: ${personalNum}`);
    }
    console.log(list.join('\n'));
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']);
//# sourceMappingURL=employees.js.map