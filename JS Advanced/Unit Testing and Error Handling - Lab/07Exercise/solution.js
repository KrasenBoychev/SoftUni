function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

const result = createCalculator();
result.add(5);
console.log(result.get());

export { createCalculator };