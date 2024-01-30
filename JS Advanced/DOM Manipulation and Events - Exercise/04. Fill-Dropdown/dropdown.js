function addItem() {
    const addBtn = document.querySelector('input[type="button"]');
    const item = document.getElementById('newItemText');
    const value = document.getElementById('newItemValue');

    const option = document.createElement("option");
    option.text = item.value;
    option.value = value.value;

    const selectElement = document.getElementById('menu');
    selectElement.appendChild(option);

    item.value = ``;
    value.value = ``;
}
