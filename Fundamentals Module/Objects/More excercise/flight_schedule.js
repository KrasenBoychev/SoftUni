function flightSchedule(allComands) {
    let flights = allComands.shift();
    let cancelledFlights = allComands.shift();
    let status = allComands[0];

    let allFlights = [];
    flights.forEach(element => {
        let splitElement = element.split(` `);
        let num = splitElement.shift();
        let Destination = splitElement.join(" ");
        let flightObj = {
            num,
            Destination,
        }
        let isCancelled = false;
        for (let i = 0; i < cancelledFlights.length; i++) {
            let cancelled = cancelledFlights[i];
            if (cancelled.includes(num)) {
                flightObj.Status = `Cancelled`;
                isCancelled = true;
                break;
            } 
        }  
        if (isCancelled == false) {
            flightObj.Status = `Ready to fly`;
        }
        allFlights.push(flightObj);
    });

    allFlights.forEach(element => {
        delete element.num;
        if (status == "Cancelled") {
            if (element.Status == "Cancelled") {
                console.log(element);
            }
        }

        if (status == "Ready to fly") {
            if (element.Status == "Ready to fly") {
                console.log(element);
            }
        }
    });
    
}
flightSchedule(
 [
    ['WN269 Delaware',
 'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
'WN612 Cancelled',
'WN1173 Cancelled',
'SK330 Cancelled'],
['Ready to fly']
]);