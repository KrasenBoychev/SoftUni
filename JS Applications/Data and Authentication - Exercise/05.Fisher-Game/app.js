document.querySelector("a[id='home']").classList.add("active");
document.getElementById("logout").addEventListener('click', onLogout);
document.querySelector(".load").addEventListener("click", onLoadCatch);
document.getElementById("addForm").addEventListener("submit", onCreate);

const userNavRef = document.getElementById("user");
const guestNav = document.getElementById ("guest");
const addBtnRef = document.querySelector(".add");
const catchesContainer = document.getElementById("catches");
const endPoints = {
    logout: 'http://localhost:3030/users/logout',
    catches: "http://localhost:3030/data/catches"
}

let userData = JSON.parse(sessionStorage.getItem("userData"));

function hasOwner(id) {
    return userData?._id === id;
}

//update nav
updateNav();
function updateNav() {
    if (userData) {
        document.querySelector("nav p span").textContent = userData.email;
        userNavRef.style.display = "inline-block";
        guestNav.style.display = "none";
        addBtnRef.disabled = false;
    } else {
        document.querySelector("nav p span").textContent = "guest";
        userNavRef.style.display = "none";
        guestNav.style.display = "inline-block";
        addBtnRef.disabled = true;
    }
}

async function onLogout(e) {
    let option = {
        method: "GET",
        headers: {
            "X-Authorization": userData.accessToken
        }
    }
    await fetch(endPoints.logout, option);

    sessionStorage.clear();
    userData = null;
    await onLoadCatch();
    updateNav();
}

async function onLoadCatch(e) {
    const response = await fetch(endPoints.catches);
    const data = await response.json();
    catchesContainer.innerHTML = "";
    data.forEach(x => {
        let div = listAllCathes(x);
        catchesContainer.appendChild(div);
    });
}

function listAllCathes(data) {
    let isOwner = hasOwner(data._ownerId);
    let div = document.createElement('div');
    div.classList.add("catch");

    div.innerHTML += `<label>Angler</label>`;
    div.innerHTML += `<input type="text" class="angler" ${isOwner ? "" : "disabled"} value="${data.angler}">`;
    div.innerHTML += `<label>Weight</label>`;
    div.innerHTML += `<input type="text" class="weight" ${isOwner ? "" : "disabled"} value="${data.weight}">`;
    div.innerHTML += `<label>Species</label>`;
    div.innerHTML += `<input type="text" class="species" ${isOwner ? "" : "disabled"} value="${data.species}">`;
    div.innerHTML += `<label>Location</label>`;
    div.innerHTML += `<input type="text" class="location" ${isOwner ? "" : "disabled"} value="${data.location}">`;
    div.innerHTML += `<label>Bait</label>`;
    div.innerHTML += `<input type="text" class="bait" ${isOwner ? "" : "disabled"} value="${data.bait}">`;
    div.innerHTML += `<label>Capture Time</label>`;
    div.innerHTML += `<input type="text" class="captureTime" ${isOwner ? "" : "disabled"} value="${data.captureTime}">`;
   
    const updateBtn = document.createElement('button');
    updateBtn.classList.add('update');
    updateBtn.dataset.id = data._id;
    updateBtn.textContent = 'Update';
    
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.dataset.id = data._id;
    delBtn.textContent = 'Delete';

    if (!hasOwner(data._ownerId)) {
        updateBtn.disabled = true;
        delBtn.disabled = true;
    }

    div.appendChild(updateBtn);
    div.appendChild(delBtn);

    updateBtn.addEventListener('click', onUpdate);
    delBtn.addEventListener('click', onDelete);

    return div;
}

async function onCreate(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let angler = formData.get("angler");
    let weight = formData.get("weight");
    let species = formData.get("species");
    let location = formData.get("location");
    let bait = formData.get("bait");
    let captureTime = formData.get("captureTime");
    let _ownerId = userData._id;

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return;
    }

    let data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
        _ownerId
    }
    const option = createOption("POST", data);

    await fetch(endPoints.catches, option);

    onLoadCatch();
}

async function onUpdate(e) {
    const id = e.target.dataset.id;

    const divCatch = e.target.parentElement;
    const inputFields = divCatch.querySelectorAll("input");
    let angler = inputFields[0].value;
    let weight = inputFields[1].value;
    let species = inputFields[2].value;
    let location = inputFields[3].value;
    let bait = inputFields[4].value;
    let captureTime = inputFields[5].value;
    let _ownerId = userData._id;

    if (!angler || !weight || !species || !location || !bait || !captureTime) {
        return;
    }

    let data = {
        angler,
        weight,
        species,
        location,
        bait,
        captureTime,
        _ownerId
    }
    
    const option = createOption("PUT", data)
    await fetch(endPoints.catches + "/" + id, option);

    onLoadCatch();
}

async function onDelete(e) {
    const id = e.target.dataset.id;
    const option = {
        method: "DELETE",
        headers: {
            "X-Authorization": userData.accessToken
        }
    }
    await fetch(endPoints.catches + "/" + id, option);
    onLoadCatch();
}

function createOption(method, data) {
    return {
        method,
        headers: { 
            'Content-Type': 'application/json',
            "X-Authorization": userData.accessToken
        },
        body: JSON.stringify(data)
    } 
}
