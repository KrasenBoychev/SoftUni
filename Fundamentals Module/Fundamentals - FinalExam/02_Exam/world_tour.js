function worldTour(input) {
    let stops = input.shift();

    let newLine = input.shift();
    let isValid = false;
    while(newLine != `Travel`) {

        if(newLine.startsWith(`Add Stop`)) {
            add(newLine);
            console.log(stops);
        } else if(newLine.startsWith(`Remove Stop`)) {
            remove(newLine);
            console.log(stops);
        } else if(newLine.startsWith(`Switch`)) {
            switchStr(newLine);
            console.log(stops);
        }

        newLine = input.shift();

        function add(command) {
            let [text, index, str] = command.split(`:`);
            index = Number(index);
           
            if( isIndexValid(index) == true) {
                let fisrtHalf = stops.substring(0, index);
                let newHalf = fisrtHalf + str;
                stops = stops.replace(fisrtHalf, newHalf);
            }
        }

        function remove(command) {
            let [text, startIndex, endIndex] = command.split(`:`);
            startIndex = Number(startIndex);
            endIndex = Number(endIndex);

            let checkStartIndex = isIndexValid(startIndex);
            let checkEndIndex =  isIndexValid(endIndex);

            if(checkStartIndex == true && checkEndIndex == true) {
                let fisrtHalf = stops.substring(0, startIndex);
                let secondHalf = stops.substring(endIndex + 1, stops.length);
                stops = fisrtHalf + secondHalf;
            }
        }

        function switchStr(command) {
            let [text, oldStr, newStr] = command.split(`:`);
            if(stops.includes(oldStr)) {
                stops = stops.replace(oldStr, newStr);
            }
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);

    function isIndexValid(num) {
        isValid = false;
        if(num >= 0 && num < stops.length) {
            isValid = true;
        }
        return isValid;
    }
}
worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:18:24",
"Switch:Hawai:Bulgaria",
"Travel"]);

// worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
// "Add Stop:3:Nigeria",
// "Remove Stop:4:8",
// "Switch:Albania: Azərbaycan",
// "Travel"]);