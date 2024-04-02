function evenPositionEl(arr: Array<string>): string {
    let result: Array<string> = [];

    for (let i: number = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }

    return result.join(' ');
}

console.log(evenPositionEl(['20', '30', '40', '50', '60']));
