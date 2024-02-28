const stopName = document.getElementById('stopName');
const busesUl = document.getElementById('buses');

function getInfo() {
    const busId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    fetch(url)
        .then(onHeaders)
        .then(dipslayBuses)
        .catch(onError);
}

function onHeaders(response) {
    if (!response.ok) {
        throw 'Error';
    }
    return response.json();
}

function dipslayBuses({name, buses}) {
    busesUl.textContent = '';

    stopName.textContent = name;
    Object.entries(buses).forEach(bus => {
        let createli = document.createElement('li');
        createli.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
        busesUl.appendChild(createli);
    });
}

function onError() {
    busesUl.textContent = '';
    stopName.textContent = 'Error';
}
