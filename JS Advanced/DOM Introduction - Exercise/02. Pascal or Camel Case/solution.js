function solve() {
  let input = document.getElementById('text').value;
  let namingConvention = document.getElementById('naming-convention').value;

  input = input.toLowerCase();
  let words = input.split(` `);

  let [caseType] = namingConvention.split(` `);
  let result = ``;

  if (caseType == "Camel") {
    result = words[0];
    for (let i = 1; i < words.length; i++) {
      let newFirstLetter = words[i][0].toUpperCase();
      words[i] = words[i].replace(words[i][0], newFirstLetter);
      result += words[i];
    }

  } else if (caseType == "Pascal") {
    for (let word of words) {
      let newFirstLetter = word[0].toUpperCase();
      word = word.replace(word[0], newFirstLetter);
      result += word;
    }

  } else {
    result = `Error!`
  }

  document.getElementById('result').textContent = result;
}