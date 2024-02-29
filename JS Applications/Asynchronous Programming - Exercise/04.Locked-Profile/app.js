function lockedProfile() {
    const main = document.getElementById('main');
    main.textContent = '';

    const url = `http://localhost:3030/jsonstore/advanced/profiles`;

    addProfiles();

    async function addProfiles() {
        const response = await fetch(url);
        const data = await response.json();

        let count = 1;

        for (const profile of Object.values(data)) {
            let { age, username, email } = profile;

            let newProfile = createProfile(age, username, email, count);
            main.appendChild(newProfile);

            count++;
        }
    }

    function createProfile(age, username, email, count) {
        let newProfile = document.createElement('div');
        newProfile.className = 'profile';

        let imgTag = createElement('img');
        imgTag.src = "./iconProfile2.png";
        imgTag.className = 'userIcon';

        let labelLock = createElement('label', 'Lock');
        let inputLock = createElement('input', '', 'radio', `user${count}Locked`, 'lock');
        inputLock.checked = true;

        let labelUnlock = createElement('label', 'Unlock');
        let inputUnlock = createElement('input', '', 'radio', `user${count}Locked`, 'unlock');
        let brTag = createElement('br');

        let hrTag = createElement('hr');

        let labelUsername = createElement('label', 'Username');
        let inputUsername = createElement('input', '', 'text', `user${count}Username`, `${username}`);
        inputUsername.disabled = true;
        inputUsername.readOnly = true;

        let divTag = createElement('div');
        divTag.id = `user${count}HiddenFields`;
        divTag.style.display = 'none';

        let hrTagInDiv = createElement('hr');

        let labelEmail = createElement('label', 'Email');
        let inputEmail = createElement('input', '', 'email', `user${count}Email`, `${email}`);
        inputEmail.disabled = true;
        inputEmail.readOnly = true;

        let labelAge = createElement('label', 'Age');
        let inputAge = createElement('input', '', 'email', `user${count}Age`, `${age}`);
        inputAge.disabled = true;
        inputAge.readOnly = true;

        divTag.appendChild(hrTagInDiv);
        divTag.appendChild(labelEmail);
        divTag.appendChild(inputEmail);
        divTag.appendChild(labelAge);
        divTag.appendChild(inputAge);

        let btnShowMore = createElement('button', 'Show more');
        btnShowMore.addEventListener('click', showMore)

        newProfile.appendChild(imgTag);
        newProfile.appendChild(labelLock);
        newProfile.appendChild(inputLock);
        newProfile.appendChild(labelUnlock);
        newProfile.appendChild(inputUnlock);
        newProfile.appendChild(brTag)
        newProfile.appendChild(hrTag);
        newProfile.appendChild(labelUsername);
        newProfile.appendChild(inputUsername);
        newProfile.appendChild(divTag);
        newProfile.appendChild(btnShowMore);

        return newProfile;
    }

    function showMore(event) {
        const profileElement = event.target.parentElement;
        const unlockInput = profileElement.children[2];
        const divElement = profileElement.getElementsByTagName('div')[0];

        if (unlockInput.checked == false) {
            divElement.style.display = 'block';

            const showMoreBtn = profileElement.getElementsByTagName('button')[0];
            showMoreBtn.style.display = 'none';

            const hideBtn = createElement('button', 'Hide it');
            profileElement.appendChild(hideBtn);

            hideBtn.addEventListener('click', hide);
        }
    }

    function hide(event) {
        const profileElement = event.target.parentElement;
        const unlockInput = profileElement.children[2];
        const divElement = profileElement.getElementsByTagName('div')[0];

        if (unlockInput.checked == false) {
            divElement.style.display = 'none';

            const showMoreBtn = profileElement.getElementsByTagName('button')[0];
            showMoreBtn.style.display = 'block';

            profileElement.removeChild(event.target);
        }
    }

    function createElement(el, content, type, name, value) {
        let newEl = document.createElement(el);

        if (content) {
            newEl.textContent = content;
        }

        if (type) {
            newEl.type = type;
        }

        if (name) {
            newEl.name = name;
        }

        if (value) {
            newEl.value = value;
        }

        return newEl;
    }
}