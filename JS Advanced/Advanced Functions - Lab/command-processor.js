function solution() {
    let text = '';

    let append = (string) => {
        text += string;
    }

    let removeStart = (n) => {
        text = text.slice(n);
    }

    let removeEnd = (n) => {
        text = text.slice(0, -n);
    }

    let print = () => {
        console.log(text);
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();