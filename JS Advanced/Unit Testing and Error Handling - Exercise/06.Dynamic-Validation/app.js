function validate() {
    let emailField = document.getElementById("email");
    let emailPattern = /^[a-z]+@[a-z]+.[a-z]+$/g;

    emailField.addEventListener('change', changeClass)

    function changeClass() {
        if (!emailPattern.test(emailField.value)) {
            emailField.classList.add('error');
        } else {
            emailField.classList.remove('error');
        }
    }
}