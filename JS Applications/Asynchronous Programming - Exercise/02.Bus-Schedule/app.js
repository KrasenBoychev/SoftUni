function solve() {
    let message = document.querySelector('#info span');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    const url = `http://localhost:3030/jsonstore/bus/schedule/`;
    const stop = {
        currStop: "",
        nextStop: "depot"
    }

    async function depart() {
        try {
            let response = await fetch(url + stop.nextStop);
            let data = await response.json();
            stop.currStop = data.name;
            stop.nextStop = data.next;
            message.textContent = `Next stop ${stop.currStop}`;
            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (error) {
            message.textContent = `Error`;
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        message.textContent = `Arriving at ${stop.currStop}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();