function rectangle(width, height, color) {

    const result = { width, height, color };

    let newColor = color.replace(color[0], color[0].toUpperCase());
    result.color = newColor;

    result.calcArea = () => {
        return result.width * result.height;
    };

    return result;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

