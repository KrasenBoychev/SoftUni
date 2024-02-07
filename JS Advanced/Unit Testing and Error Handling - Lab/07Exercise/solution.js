function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}

createCalculator().add(5);
console.log(createCalculator().get());

// result.subtract(-5);
// console.log(result.get());

export { createCalculator };