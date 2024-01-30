function solve() {
  const buttons = document.querySelectorAll('#exercise button');
  const generate = buttons[0];
  generate.addEventListener('click', generateItem);
  const buy = buttons[1];
  buy.addEventListener('click', buyItem);

  const textareas = document.querySelectorAll('#exercise textarea');

  function generateItem() {
    const userInput = textareas[0].value;
    const allItems = JSON.parse(userInput);

    const table = document.querySelector('table[class="table"] tbody');

    for (const userInputToArray of allItems) {

      const tableRow = document.createElement("tr");
      table.appendChild(tableRow);

      const tdImg = document.createElement("td");
      tableRow.appendChild(tdImg);
      const img = document.createElement("img");
      img.src = userInputToArray.img;
      tdImg.appendChild(img);

      const tdName = document.createElement("td");
      tableRow.appendChild(tdName);
      const pName = document.createElement("p");
      pName.textContent = userInputToArray.name;
      tdName.appendChild(pName);

      const tdPrice = document.createElement("td");
      tableRow.appendChild(tdPrice);
      const pPrice = document.createElement("p");
      pPrice.textContent = userInputToArray.price;
      tdPrice.appendChild(pPrice);

      const tdDecFactor = document.createElement("td");
      tableRow.appendChild(tdDecFactor);
      const pDecFactor = document.createElement("p");
      pDecFactor.textContent = userInputToArray.decFactor;
      tdDecFactor.appendChild(pDecFactor);

      const tdCheckBox = document.createElement("td");
      tableRow.appendChild(tdCheckBox);
      const inputCheckBox = document.createElement("input");
      inputCheckBox.type = 'checkbox';
      tdCheckBox.appendChild(inputCheckBox);

    }
  }

  function buyItem() {
    const tickedItems = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));

    let itemsNameCollector = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    for (const item of tickedItems) {

      const row = item.parentElement.parentElement;
      const itemName = row.children[1].children[0].textContent;
      itemsNameCollector.push(itemName);

      const itemPrice = row.children[2].children[0].textContent;
      totalPrice += Number(itemPrice);

      const itemDecFactor = row.children[3].children[0].textContent;
      totalDecFactor += Number(itemDecFactor);
    }

    const avgDecFactor = totalDecFactor / itemsNameCollector.length;

    textareas[1].value = `Bought furniture: ${itemsNameCollector.join(`, `)}\n`;
    textareas[1].value += `Total price: ${totalPrice.toFixed(2)}\n`;
    textareas[1].value += `Average decoration factor: ${avgDecFactor}`;
  }
}