import { html, render } from "./node_modules/lit-html/lit-html.js";

function solve() {
   const URL = 'http://localhost:3030/jsonstore/advanced/table';
   const root = Array.from(document.getElementsByTagName('tbody'))[0];

   onClick();

   const template = (students, inputText) => html`
      ${students.map((student => html`
            <tr class=${checkStudent(student, inputText)}>
                <td>${student.firstName} ${student.lastName}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
            </tr>
      `))}
   `;

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   async function onClick() {

      let inputText = document.getElementById('searchField').value;

      if (inputText.length == 0) {
         inputText = "1";
      }

      try {
         const response = await fetch(URL);
         const students = await response.json();
         
         if (!response) {
            const err = response.json();
            alert(err.message);
         }

         render(template(Object.values(students), inputText), root);

         document.getElementById('searchField').value = "";

      } catch (err) {
         alert(err.message);
      }
   }

   function checkStudent(student, inputText) {
      for (const value of Object.values(student)) {
         const valueLowerCase = value.toLowerCase();
         const inputTextLowerCase = inputText.toLowerCase();

         if (valueLowerCase.includes(inputTextLowerCase)) {
            return 'select';
         }
      }
   }
}

solve();