function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let selectedRows = Array.from(document.getElementsByClassName("select"));
      selectedRows.forEach(row => {
         row.classList.remove("select");
      });

      let userInput = document.getElementById('searchField').value;
      let studentsInfo = document.querySelectorAll('tbody tr');

      for (let studentInfo of studentsInfo) {

         let student = studentInfo.querySelectorAll('td');

         for (let info of student) {

            let content = info.textContent;

            if (content.includes(userInput)) {
               studentInfo.classList.add("select");
            }
         }

      }
      document.getElementById('searchField').value = '';
   }
}