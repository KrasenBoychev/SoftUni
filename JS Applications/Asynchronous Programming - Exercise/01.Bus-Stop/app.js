const list = document.getElementById('buses');

function getInfo() {
    const busId = document.getElementById('stopId').value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    fetch(url)
        .then(onHeaders)
        .then(dipslayBusses)
        .catch(onError);
}

function onHeaders(response) {
    if (!response.ok) {
        throw 'Error';
    }
    return response.json();
}

function dipslayBusses(data) {
    console.log(data);
}

function createListElement({ name, busses }) {
    
}

function onError(error) {
    
}
