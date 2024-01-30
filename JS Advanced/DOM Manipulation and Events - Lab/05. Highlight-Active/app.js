function focused() {
    let inputFields = Array.from(document.querySelectorAll('div input'));
   
    for (let inputField of inputFields) {
        inputField.addEventListener('blur', lostFocus);
        inputField.addEventListener('focus', changeBackground);
    }

    function changeBackground(event) {
        event.target.parentElement.classList.add("focused");
    }

    function lostFocus(event) {
        event.target.parentElement.classList.remove("focused");
    }
}

