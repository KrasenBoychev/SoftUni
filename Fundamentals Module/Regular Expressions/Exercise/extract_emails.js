function extractEmails(input) {
    let pattern = /[a-z][a-z\d\.\-\_]*\@[a-z][a-z\-]*(\.[a-z\-]+)+/g;

    let splitInput = input.split(` `);

    for (let word of splitInput) {

        if (word.includes(`@`)) {
            let matchWord = word.match(pattern);

            if (matchWord) {
                let firstLetter = matchWord[0][0];

                if (word.startsWith(firstLetter)) {
                    console.log(matchWord[0]);
                }
            }
        }
    }
}

extractEmails(`Please contact us at: support@github.com.`);

extractEmails(`Just send email to s.miller@mit.edu and j.hopking@york.ac.uk and .info@info.info for more information.`);

extractEmails(`Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. -- steve.parker@softuni.de.`);