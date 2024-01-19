function pieceOfPie(pieFlavours, firstFlavour, secondFlavour) {
    let startIndex = pieFlavours.indexOf(firstFlavour);
    let lastIndex = pieFlavours.indexOf(secondFlavour);
    let result = pieFlavours.slice(startIndex, lastIndex + 1);
    return result;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');