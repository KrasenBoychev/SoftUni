function partyTime(input) {
    let expectedGuests = [];
    let vip = [];

    let guest = input.shift();

    while (guest != `PARTY`) {
        let firstLetter = guest[0];
        if (isNaN(Number(firstLetter))) {
            expectedGuests.push(guest);
        } else {
            vip.push(guest);
        }
        guest = input.shift();
    }

    for (let guest of input) {
        if (expectedGuests.includes(guest)) {
            guestComing(expectedGuests, guest);
        } else if(vip.includes(guest)) {
            guestComing(vip, guest);
        }
    }

    function guestComing(list, name) {
        let index = list.indexOf(name);
        list.splice(index, 1);
    }

    let expGuestsNumber = expectedGuests.length;
    let vipNumber = vip.length;

    let notComing = expGuestsNumber + vipNumber;
    console.log(notComing);
    
    if (vipNumber > 0) {
        console.log(vip.join(`\n`));
    }
    
    if (expGuestsNumber > 0) {
        console.log(expectedGuests.join(`\n`));
    }
   
}
partyTime(
    ['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

);