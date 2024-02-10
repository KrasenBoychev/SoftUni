class List {

    constructor() {
        this.storeNums = [];
        this.size = this.storeNums.length;
    }

    ascendingOrder() {
        this.storeNums.sort((a, b) => a - b);
    }

    updateSize() {
        this.size = this.storeNums.length;
    }

    add(element) {
        this.storeNums.push(element);
        this.ascendingOrder();
        this.updateSize();
    }

    remove(index) {
        if (index < 0 || index >= this.storeNums.length) {
            throw new Error;
        }
        this.storeNums.splice(index, 1);
        this.ascendingOrder();
        this.updateSize();
    }

    get(index) {
        if (index < 0 || index >= this.storeNums.length) {
            throw new Error;
        }
        return this.storeNums[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
console.log(list.hasOwnProperty(`size`));
console.log(list.size);