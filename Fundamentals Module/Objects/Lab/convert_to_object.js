function convertToObject(inputStr) {
    let inputObject = JSON.parse(inputStr);
    let elements = Object.entries(inputObject);
    for (let [key, value] of elements) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');