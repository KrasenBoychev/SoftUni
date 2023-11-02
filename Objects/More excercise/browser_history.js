function browserHistory(infoObject, commandsArr) {
    let values = Object.values(infoObject);
    let browserName = values[0];
    let openTabs = values[1];
    let recentlyClosed = values[2];
    let browserLogs = values[3];

    commandsArr.forEach(command => {
        let [action, website] = command.split(` `);
        let isValid = false;
        switch (action) {
            case "Open": openTabs.push(website);
                         isValid = true;
                break;
            case "Close": close();
                break;
            case "Clear": clear();
                break;
        }
        logs();

        function close() {
           if(openTabs.includes(website)) {
                let index = openTabs.indexOf(website);
                openTabs.splice(index, 1);
                recentlyClosed.push(website);
                isValid = true;
           }
        }

        function logs() {
            if(isValid == true) {
                browserLogs.push(command);
            }
        }

        function clear() {
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
        }
    });
    
    console.log(browserName);
    console.log(`Open Tabs: ${openTabs.join(`, `)}`);
    console.log(`Recently Closed: ${recentlyClosed.join(`, `)}`);
    console.log(`Browser Logs: ${browserLogs.join(`, `)}`);
}
browserHistory(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", 
   "Dropbox"],
    "Browser Logs":["Open Gmail", 
   "Close Gmail", "Open Dropbox", 
   "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);