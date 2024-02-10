function tickets(arrayOfStr, sortingCriteria) {
    class Ticket {
        destination;
        price;
        status;

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    let storeTickets = [];

    for (const str of arrayOfStr) {
        const [destinationName, price, status] = str.split(`|`);
        const createTicket = new Ticket(destinationName, price, status);
        storeTickets.push(createTicket);
    }

    let sortedTickets;

    if (sortingCriteria == "price") {
        sortedTickets = storeTickets.sort((a, b) => a[sortingCriteria] - b[sortingCriteria]);
    } else {
        sortedTickets = storeTickets.sort((a, b) => a[sortingCriteria].localeCompare(b[sortingCriteria]));
    }

    return sortedTickets;

}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');