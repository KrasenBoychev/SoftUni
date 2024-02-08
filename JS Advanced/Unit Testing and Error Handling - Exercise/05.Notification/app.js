function notify(message) {
  let divToShow = document.getElementById("notification");
  divToShow.textContent = message;
  divToShow.style.display = 'block';
  divToShow.addEventListener('click', hideMessage);

  function hideMessage() {
    divToShow.style.display = 'none';
  }
}