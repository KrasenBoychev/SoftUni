function validate() {
    let validDiv = document.getElementById('valid');

    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    let usernameField = document.getElementById('username');
    let usernamePattern = /^[A-Za-z0-9]+$/g;

    let emailField = document.getElementById('email');
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/g;    ///^[a-z]+\@[a-z]+\.[a-z]+$/g;

    let passwordField = document.getElementById('password');
    let passwordPattern = /^\w+$/g;

    let passwordConfirmField = document.getElementById('confirm-password');

    let companyCheckbox = document.getElementById('company');
    companyCheckbox.addEventListener('change', showDiv);

    function showDiv(event) {
        let companyInfoField = document.getElementById('companyInfo');
        if (event.target.checked) {
            companyInfoField.style.display = 'block';
        } else {
            companyInfoField.style.display = 'none';
        }
    }

    function submit(event) {
        event.preventDefault();
       
        let isValid = 0;

        let usernameInput = usernameField.value;
        if (!usernamePattern.test(usernameInput) || usernameInput.length < 3 || usernameInput.length > 20) {
            usernameField.style.borderColor = 'red';
        } else {
            usernameField.style.border = 'none';
            isValid++;
        }

        let emailInput = emailField.value;
        if (!emailPattern.test(emailInput)) {
            emailField.style.borderColor = 'red';
        } else {
            emailField.style.border = 'none';;
            isValid++;
        }

        let passwordInput = passwordField.value;
        let passwordConfirmInput = passwordConfirmField.value;
        if (passwordPattern.test(passwordInput) && passwordInput.length >= 5 && passwordInput.length <= 15) {

            if (passwordConfirmInput != passwordInput || passwordInput.length == 0) {
                passwordConfirmField.style.borderColor = 'red';
                passwordField.style.borderColor = 'red';
            } else {
                passwordConfirmField.style.border = 'none';;
                passwordField.style.border = 'none';;
                isValid++;
            }
        } else {
            passwordConfirmField.style.borderColor = 'red';
            passwordField.style.borderColor = 'red';
        }

        if (companyCheckbox.checked) {
            let companyNumberField = document.getElementById('companyNumber');
            let companyNumberInput = companyNumberField.value;
            if (companyNumberInput < 1000 || companyNumberInput > 9999 || companyNumberInput.length == 0) {
                companyNumberField.style.borderColor = `red`;
            } else {
                companyNumberField.style.border = 'none';;
                isValid++;
            }
        }

    
        if (companyCheckbox.checked) {
            if (isValid == 4) {
                validDiv.style.display = '';
            } else {
                validDiv.style.display = 'none';
            }

        } else {
            if (isValid == 3) {
                validDiv.style.display = '';
            } else {
                validDiv.style.display = 'none';
            }
        }
    }

}
