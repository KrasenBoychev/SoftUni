function solve() {
    let numberField = document.getElementById(`input`);
    let toField = document.getElementById(`selectMenuTo`);
    let btn = document.querySelector('button');
    let result = document.getElementById(`result`);

    let firstOption = toField.children[0];
    firstOption.value = 'binary';
    firstOption.textContent = 'Binary';

    let secondOption = document.createElement('option');
    toField.appendChild(secondOption);
    secondOption.value = 'hexadecimal';
    secondOption.textContent = 'Hexadecimal';

    btn.addEventListener('click', convert);

    function convert() {
        let num = numberField.value;
        let toValue = toField.value;

        if (toValue == 'binary') {
            result.value = Number(num).toString(2);
        } 
        else {
            result.value = Number(num).toString(16).toUpperCase();
        }
    }

}