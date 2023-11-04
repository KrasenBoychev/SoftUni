function schoolGrades(input) {
    let students = {};

    for (let element of input) {
        let studentInfo = element.split(` `);
        let name = studentInfo.shift();
        let marks = studentInfo;

        if (students.hasOwnProperty(name)) {
            students[name].push(...marks);
        } else {
            students[name] = marks;
        }
    }

    let data = Object.entries(students);
    data.sort((a, b) => a[0].localeCompare(b[0]));

    let resultObj = {};

    for (let [name, marks] of data) {
        marks = marks.map(Number);
        let sum = marks.reduce((a,b) => a + b, 0);
        let average = sum / marks.length;
        resultObj[name] = average;
        console.log(`${name}: ${average.toFixed(2)}`);
    }

}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);