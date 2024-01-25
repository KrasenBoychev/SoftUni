function extractText() {
    const list = document.getElementById('items');
    const items = Array.from(list.children);
    let result = [];

    for (let item of items) {
        result.push(item.textContent);
    }

    const textArea = document.getElementById('result');
    textArea.value = result.join(`\n`);
}