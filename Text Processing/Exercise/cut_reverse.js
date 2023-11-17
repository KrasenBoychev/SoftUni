function cutReverse(text) {
    let firstHalf = text.slice(0, (text.length / 2));
    firstHalf = firstHalf.split(``).reverse().join(``);
    console.log(firstHalf);

    let secondHalf = text.slice((text.length / 2));
    secondHalf = secondHalf.split(``).reverse().join(``);
    console.log(secondHalf);
}
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');