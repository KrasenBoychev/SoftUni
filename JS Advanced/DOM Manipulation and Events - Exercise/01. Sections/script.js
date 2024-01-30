function create(words) {
   const mainDiv = document.getElementById('content');

      for (const word of words) {
         const div = document.createElement('div');
         const p = document.createElement('p');
         div.appendChild(p);

         p.textContent = word;
         p.style.display = 'none';

         div.addEventListener('click', showText);

         function showText(event) {
            const clickedDiv =  event.target;
            const pToShow = clickedDiv.getElementsByTagName('p')[0];
            pToShow.style.display = 'block';
         }
         
         mainDiv.appendChild(div);
      }
}