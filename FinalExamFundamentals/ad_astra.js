function adAstra([input]) {
    let pattern = /[^\w\W]*(?<sep>[|#])(?<name>[A-Za-z ]+)\k<sep>(?<expDate>\d{2}\/\d{2}\/\d{2})\k<sep>(?<cal>\d+)\k<sep>/g;

    let totalCal = 0;

    let results = [...input.matchAll(pattern)];

    for (let i = 0; i < results.length; i++) {
        let obj = results[i].groups;
        totalCal += Number(obj.cal); 
    }

    let days = Math.floor(totalCal / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    
    for (let i = 0; i < results.length; i++) {
        let obj = results[i].groups;
        
        console.log(`Item: ${obj.name}, Best before: ${obj.expDate}, Nutrition: ${obj.cal}`);
    }
}
adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);

adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);