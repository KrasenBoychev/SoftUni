let myArr = [1, 2, 3];

(function solve() {

Array.prototype.last = function () {
    return this[this.length - 1];
};

Array.prototype.skip = function (n) {
    let newArr = [];
    for (let i = n; i < this.length; i++) {
        newArr.push(this[i]);
    }
    return newArr;
};

Array.prototype.take = function (n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(this[i]);
    }
    return newArr;
};

Array.prototype.sum = function () {
    let sum = this.reduce((a, b) => a + b, 0);
    return sum;
};

Array.prototype.average = function () {
    let sum = this.reduce((a, b) => a + b, 0);
    let avg = sum / this.length;
    return avg;
};

})();