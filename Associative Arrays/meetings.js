function meetings(input) {
    let appointments = {};
    for (let element of input) {
        let [day, name] = element.split(` `);
        
        if (appointments.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            appointments[day] = name;
            console.log(`Scheduled for ${day}`);
        }        
    }

    for (let [day, name] of Object.entries(appointments)) {
        console.log(day, `->`, name);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);