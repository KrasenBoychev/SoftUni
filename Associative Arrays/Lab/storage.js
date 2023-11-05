function storage(input) {
    let list = new Map();

    for (let element of input) {
        let [item, qty] = element.split(` `);
        qty = Number(qty);

        if (!list.has(item)) {
            list.set(item, qty);
        } else {
            let currQty = list.get(item);
            let newQty = currQty + qty;
            list.set(item, newQty);
        }
    }

    for (let [item, qty] of list) {
        console.log(item, `->`, qty);
    }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40']);