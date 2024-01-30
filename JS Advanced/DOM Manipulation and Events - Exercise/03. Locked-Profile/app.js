function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('button'));
    
    for (const btn of buttons) {
        btn.addEventListener('click', showMore);
    }

    function showMore(event) {
        const currBtn = event.currentTarget;
        const divProfile = currBtn.parentElement;
        const unlockInput = divProfile.children[4];

        if(unlockInput.checked == true) {

            if (currBtn.textContent == 'Show more') {
                divProfile.querySelector('div').style.display = 'block';
                currBtn.textContent = 'Hide it';

            } else {
                divProfile.querySelector('div').style.display = 'none';
                currBtn.textContent = 'Show more';
            }
        }
    }
}