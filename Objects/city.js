function city(city) {
    let town = Object.entries(city);
    for (let [key, value] of town) {
        console.log(`${key} -> ${value}`);
    }
}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
   });