function schoolRegister(entryArr) {
    for (let i = 0; i < entryArr.length; i++) {
        let student = entryArr[i].split(`, `);
        let studentName = student.shift().split(`: `);
        let name = studentName[1];
        let studentGrade = student.shift().split(`: `);
        let grade = Number(studentGrade[1]);
        let studentScore = student.shift().split(`: `);
        let score = Number(studentScore[1]);
        let studentInfo = {name, grade, score};
        entryArr[i] = studentInfo;
    }
    entryArr.sort((a, b) => a.grade - b.grade);
    entryArr = entryArr.filter(x => x.score >= 3);

    let firstStudent = entryArr.shift();
    let newGrade = firstStudent.grade + 1;
    let studentsList = [firstStudent.name];
    let annualScore = firstStudent.score;
    let count = 1;

    entryArr.forEach(element => {
        if((element.grade + 1) != newGrade) {
            printResult();
            newGrade = element.grade + 1;
            studentsList = [];
            annualScore = 0;
            count = 0;
        }
        annualScore += element.score;
        studentsList.push(element.name);
        count++;
    });

    printResult();

    function printResult() {
        console.log(`${newGrade} Grade`);
        console.log(`List of students: ${studentsList.join(`, `)}`);
        console.log(`Average annual score from last year: ${(annualScore / count).toFixed(2)}`);
        console.log(``);
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]);