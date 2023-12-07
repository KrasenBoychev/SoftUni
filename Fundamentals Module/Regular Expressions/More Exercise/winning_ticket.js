function winningTicket(input) {
    let pattern = /(\@{6,10}|\#{6,10}|\${6,10}|\^{6,10})/g;


    let splitInput = input.split(`, `);
    
    while (splitInput.length > 0) {
        let ticket = splitInput.shift();
        ticket = ticket.trim()

        if (ticket.length != 20) {
            console.log(`invalid ticket`);
            continue;
        }

        let firstHalf = ticket.substring(0, ticket.length / 2);
        let secondHalf = ticket.substring(ticket.length / 2);
        let isMatch = true;

        let match1 = firstHalf.match(pattern);
        let match2 = secondHalf.match(pattern)
        
        if (match1) {
            if (match2) {
                if (match1[0][0] == match2[0][0]) { 
                    if (match1[0].length < 10 && match2[0].length < 10) {
                        if (match1[0].length < match2[0].length) {
                            console.log(`ticket "${ticket}" - ${match1[0].length}${match1[0][0]}`);
                        } else {
                            console.log(`ticket "${ticket}" - ${match2[0].length}${match1[0][0]}`);
                        }
                    
                    } else {
                        if (match1[0].length < match2[0].length) {
                            console.log(`ticket "${ticket}" - ${match1[0].length}${match1[0][0]}`);
                        } else if (match1[0].length > match2[0].length) {
                            console.log(`ticket "${ticket}" - ${match2[0].length}${match1[0][0]}`);
                        } else {
                            console.log(`ticket "${ticket}" - ${match1[0].length}${match1[0][0]} Jackpot!`);
                        }
                    }

                } else {
                    isMatch = false;
                }

            } else {
                isMatch = false;
            } 

        } else {
            isMatch = false;
        }

        if (isMatch == false) {
            console.log(`ticket "${ticket}" - no match`);
        }
    }
}

//winningTicket(`C$$$$$$$$$Ca$$$$$$sh`);

winningTicket(`$$$$$$$$$$$$$$$$$$$$   ,   aabb  ,     th@@@@@@eemo@@@@@@ey`);

 //winningTicket(`validticketnomatch:(`);