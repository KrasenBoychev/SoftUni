class CompareElements<T> {
    elements: T[];

    constructor(el: T[]) {
        this.elements = el;
    }

    compare(comparator: any) {
        let matches = 0;

        for (const element of this.elements) {
            if (element == comparator) {
                matches++;
            }
        }
        return matches;
    }
}


let c = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);

console.log(c.compare('b'));

let a = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(a.compare(1));