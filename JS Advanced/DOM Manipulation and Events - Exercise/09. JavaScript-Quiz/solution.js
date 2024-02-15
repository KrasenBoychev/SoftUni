function solve() {
  let correctAnswers = 0;
  let sections = document.querySelectorAll('#quizzie section');

  let results = document.getElementById('results');
  let headline = results.children[0].children[0];

  let paragraphs = document.querySelectorAll('.answer-text');
  for (const paragraph of paragraphs) {
    paragraph.addEventListener('click', clickParagraph);
  }

  function clickParagraph(event) {
    let text = event.target.textContent;

    if (text == 'onclick' || text == 'JSON.stringify()' || text == 'A programming API for HTML and XML documents') {
      correctAnswers += 1;
    }

    if (text == 'onclick' || text == 'onmouseclick') {
      sections[0].style.display = 'none';
      sections[1].style.display = 'block';
    }
    else if (text == 'JSON.stringify()' || text == 'JSON.toString()') {
      sections[1].style.display = 'none';
      sections[2].style.display = 'block';
    }
    else {
      sections[2].style.display = 'none';
      results.style.display = 'block';

      if (correctAnswers == 3) {
        headline.textContent = 'You are recognized as top JavaScript fan!';
      }
      else {
        headline.textContent = `You have ${correctAnswers} right answers`;
      }
    }
  }
}
