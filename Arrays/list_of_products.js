function listOfProducts(inputArr) {
    let sorted = inputArr.sort();
    for (let i = 0; i < inputArr.length; i++){
        console.log(`${i + 1}.${sorted[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);