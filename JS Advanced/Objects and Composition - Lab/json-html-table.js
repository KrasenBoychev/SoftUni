function jsonToHtmlTable(json) {
    let arr = JSON.parse(json);
    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let result = `  <tr>`;
        Object.keys(arr[0]).forEach(key => {
            result += `<th>${escapeHtml(key)}</th>`;
        });
        result += `</tr>`;
        return result;
    }

    function makeValueRow(obj) {
        let result = `  <tr>`;
        Object.values(obj).forEach(value => {
            result += `<td>${escapeHtml(value)}</td>`;
        });
        result += `</tr>`;
        return result;
    };

    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };

        return str.toString().replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }
    console.log(outputArr.join('\n'));
}

jsonToHtmlTable(`[{"Name":"Stamat", "Score":5.5}, 
                  {"Name":"Rumen", "Score":6}]`);