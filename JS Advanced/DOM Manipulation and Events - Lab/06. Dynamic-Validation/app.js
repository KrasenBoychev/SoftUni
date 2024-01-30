function validate() {
    emailPattern = /^[a-z]+@[a-z]+.[a-z]+/g;

    let inputField = document.getElementById('email');
    inputField.addEventListener('change', checkEmail);

    function checkEmail(event) {
        let email = emailPattern.test(inputField.value); // another option: (event.target.value)
        if (email) {
           event.target.classList.remove("error");
           return;
        } else {
            event.target.classList.add("error");
        }
    }
}
