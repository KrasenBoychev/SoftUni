class Ticket {
    destination: string;
    price: number;
    status: string;

    constructor(destination: string, price: number, status: string) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
}

function tickets(inputArr: string[], sortingCriteria: string): void {
    const allTickets: Array<Ticket> = [];

    inputArr.forEach((inputLine) => {
        const ticketInfo = inputLine.split('|');
        allTickets.push(new Ticket(ticketInfo[0], Number(ticketInfo[1]), ticketInfo[2]));
    });

    let sortedTickets: Array<Ticket> = [];

    switch (sortingCriteria) {
        case 'destination':
            sortedTickets = allTickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            sortedTickets = allTickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            sortedTickets = allTickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    console.log(sortedTickets);
    
}

// tickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'
// ],
//     'destination');

tickets([
    'Philadelphia|94.20|available',
     'New York City|95.99|available',
     'New York City|95.99|sold',
     'Boston|126.20|departed'
    ],
    'status');