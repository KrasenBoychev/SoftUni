const button = document.querySelector('#button');
const select = document.querySelector('#dropdown');
const options = document.querySelectorAll('.option');

button.addEventListener('mouseover', function(e) {
    e.preventDefault();
    toggleHidden();
})

function toggleHidden() {
    select.classList.toggle(`hidden`);
}

options.forEach(function(option) {
    option.addEventListener(`click`, function(e) {
        setSelectTitle(e);
    })
})


function setSelectTitle(e) {
    const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
    button.innerText = labelElement;
    toggleHidden();
}