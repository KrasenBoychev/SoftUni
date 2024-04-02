"use strict";
function evenPositionEl(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result.join(' ');
}
console.log(evenPositionEl(['20', '30', '40', '50', '60']));
//# sourceMappingURL=evenPositionEl.js.map