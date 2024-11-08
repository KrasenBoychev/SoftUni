var Ticket = /** @class */ (function () {
    function Ticket(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
    }
    return Ticket;
}());
function tickets(inputArr, sortingCriteria) {
    var allTickets = [];
    inputArr.forEach(function (inputLine) {
        var ticketInfo = inputLine.split('|');
        allTickets.push(new Ticket(ticketInfo[0], Number(ticketInfo[1]), ticketInfo[2]));
    });
    var sortedTickets = [];
    switch (sortingCriteria) {
        case 'destination':
            sortedTickets = allTickets.sort(function (a, b) { return a.destination.localeCompare(b.destination); });
            break;
        case 'price':
            sortedTickets = allTickets.sort(function (a, b) { return a.price - b.price; });
            break;
        case 'status':
            sortedTickets = allTickets.sort(function (a, b) { return a.status.localeCompare(b.status); });
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
], 'status');
