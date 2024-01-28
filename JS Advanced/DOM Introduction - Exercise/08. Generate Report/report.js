function generateReport() {

    let inputs = document.querySelectorAll('thead tr th input[type = "checkbox"]');
    let headings = document.querySelectorAll('thead tr th');
    let headingsIndexes = [];
    let result = [];

    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].checked == true) {
            headingsIndexes.push(Number(i));
        }
    }

    let allEmployess = document.querySelectorAll('tbody tr');

    for (let employee of allEmployess) {

        let employeeChildren = employee.children;
        let employeeObj = {};

        for (let i = 0; i < employeeChildren.length; i++) {

            if (headingsIndexes.includes(i)) {
                let keyH = headings[i].textContent.toLowerCase().trim();
                let value = employeeChildren[i].textContent;
                employeeObj[keyH] = value;
            }
        }
        result.push(employeeObj);
    }

    let resultToString = JSON.stringify(result);
    document.getElementById('output').value = resultToString;
}