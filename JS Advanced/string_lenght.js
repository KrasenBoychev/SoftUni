function stringLength(a, b, c) {
    
    let sum = a.length + b.length + c.length;
    let avg = Math.floor(sum / 3);

    console.log(sum);
    console.log(avg);
}

stringLength('chocolate', 'ice cream', 'cake')