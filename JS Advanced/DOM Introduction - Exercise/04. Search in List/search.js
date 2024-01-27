function search() {
   let userInput = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('ul#towns li'));
   let count = 0;

   for (let i = 0; i < towns.length; i++) {
      let townName = towns[i].textContent;
      
      if (townName.includes(userInput)) {
         towns[i].style.textDecoration = "underline";
         towns[i].style.fontWeight = "bold";
         count++;
      }
   }
   document.getElementById('result').textContent = `${count} matches found`;
}
