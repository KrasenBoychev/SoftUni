class FlightBookingSystem {
    agencyName;
    flights;
    bookings;
    bookingsCount;
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let findFlight = this.flights.find(f => f.flightNumber == flightNumber);

        if (findFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`
        }
        else {
            this.flights.push({
                flightNumber,
                destination,
                departureTime,
                price: Number(price)
            });

            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        };
    }

    bookFlight(passengerName, flightNumber) {
        let findFlight = this.flights.find(f => f.flightNumber == flightNumber);

        if (findFlight) {
            this.bookings.push({
                passengerName,
                flightNumber
            });
            this.bookingsCount += 1;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
        else {
            return `Flight ${flightNumber} is not available for booking.`;
        }
    }

    cancelBooking(passengerName, flightNumber) {
        let findPassenger = this.bookings.find(p => p.passengerName == passengerName && p.flightNumber == flightNumber);

        if (findPassenger) {
            let index = this.bookings.indexOf(findPassenger);
            this.bookings.splice(index, 1);
            this.bookingsCount -= 1;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
        }
        else {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }
    }

    showBookings(criteria) {
        if (this.bookings.length == 0) {
            throw new Error(`No bookings have been made yet.`);
        }

        switch (criteria) {
            case "all":
                return allFlights(this.bookingsCount, this.bookings);

            case "cheap":
                return cheap(this.bookings, this.flights);
                
            case "expensive":
                return expensive(this.bookings, this.flights);
        }

        function allFlights(bookingsCount, bookings) {
            let result = [];
            result.push(`All bookings(${bookingsCount}):`);

            for (const person of bookings) {
                result.push(`${person.passengerName} booked for flight ${person.flightNumber}.`);
            }

            return result.join(`\n`);
        }

        function cheap(bookings, fligths) {
            let collectCheapFlights = [];

            for (const booking of bookings) {
                let findFlight = fligths.find(f => f.flightNumber == booking.flightNumber);

                if (findFlight.price <= 100) {
                    collectCheapFlights.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
                }
            }

            if (collectCheapFlights.length > 0) {
                collectCheapFlights.unshift(`Cheap bookings:`);
                return collectCheapFlights.join(`\n`);
            }
            else {
                return `No cheap bookings found.`;
            }
        }

        function expensive(bookings, fligths) {
            let expensiveFlights = [];

            for (const booking of bookings) {
                let findFlight = fligths.find(f => f.flightNumber == booking.flightNumber);

                if (findFlight.price > 100) {
                    expensiveFlights.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`);
                }
            }

            if (expensiveFlights.length > 0) {
                expensiveFlights.unshift(`Expensive bookings:`);
                return expensiveFlights.join(`\n`);
            }
            else {
                return `No expensive bookings found.`;
            }
        }
    }

}

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));