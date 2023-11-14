function companyUsers(input) {
    let companies = {};

    for (let command of input) {
        let [company, id] = command.split(` -> `);
        
        if (company in companies) {
            if (!companies[company].includes(id)) {
                companies[company].push(id);
            }
        } else {
            companies[company] = [id];
        }
    }

    let entries = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, employeeIds] of entries) {
        console.log(name);
        employeeIds.forEach(id => console.log(`-- ${id}`));
    }
}
companyUsers(
    [
        'SoftUni -> AA12345',
        'SoftUni -> BB12345',
        'Microsoft ->nCC12345',
        'HP -> BB12345'
    ]
);