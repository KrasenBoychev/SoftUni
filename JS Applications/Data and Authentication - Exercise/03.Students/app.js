window.addEventListener('load', showStudents);

const tableBody = document.querySelector('#results tbody');

document.getElementById('form').addEventListener('submit', onSubmit);

const url = 'http://localhost:3030/jsonstore/collections/students';

async function showStudents(e) {
    try {
        const res = await fetch(url);
        const data = await res.json();

        for (const student of Object.values(data)) {
            addStudent(student);
        }


    } catch(err){
        alert(err.message)
    }
}

function addStudent(student) {
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);

    const tdFirstName = document.createElement('td');
    tdFirstName.textContent = student.firstName;
    tableRow.appendChild(tdFirstName);

    const tdLastName = document.createElement('td');
    tdLastName.textContent = student.lastName;
    tableRow.appendChild(tdLastName);

    const tdFacultyNumber = document.createElement('td');
    tdFacultyNumber.textContent = student.facultyNumber;
    tableRow.appendChild(tdFacultyNumber);

    const tdGrade = document.createElement('td');
    tdGrade.textContent = student.grade;
    tableRow.appendChild(tdGrade);
}

async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (!data.firstName || !data.lastName || !data.facultyNumber || !data.grade) {
        return;
    }

    if (!(Number.isInteger(Number(data.facultyNumber))) || isNaN(data.grade)) {
        return;
    }

    const bodyInfo = {
        "firstName": data.firstName.trim(),
        "lastName": data.lastName.trim(),
        "facultyNumber": data.facultyNumber.trim(),
        "grade": data.grade.trim()
    }

    const res =  await fetch(url, {
        method: "Post",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(bodyInfo)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message);
    }

    tableBody.textContent = "";
    showStudents();
}