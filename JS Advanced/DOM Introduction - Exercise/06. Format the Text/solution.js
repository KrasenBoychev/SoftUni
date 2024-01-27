function solve() {
  let text = document.getElementById('input').value;
  let splitText = text.split(`.`);
  let output = document.getElementById('output');

  let count = 1;
  let result = ``;

  for (let sentence of splitText) {

    if (sentence.length > 0) {

      if (count > 3) {
        output.innerHTML += `<p> ${result} </p>`;
        result = ``;
        count = 1;
      }

      result += `${sentence}.`;
      count++;
    }
  }

  if (result.length > 0) {
    output.innerHTML += `<p>${result}</p>`;
  }
}