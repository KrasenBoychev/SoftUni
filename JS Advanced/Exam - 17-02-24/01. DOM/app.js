window.addEventListener("load", solve);

function solve() {
  let inputs = {
    name: document.getElementById('snowman-name'),
    height: document.getElementById('snowman-height'),
    location: document.getElementById('location'),
    creator: document.getElementById('creator-name'),
    specialAttribute: document.getElementById('special-attribute')
  }

  let addBtn = document.querySelector('.add-btn');
  addBtn.addEventListener('click', add);

  let snowBallList = document.querySelector('.snowman-preview');
  let snowList = document.querySelector('.snow-list');
  let main = document.getElementById('hero');
  let body = document.querySelector('.body');
  let backImg = document.getElementById('back-img');

  function add(event) {
    event.preventDefault();

    let name = inputs.name.value;
    let height = inputs.height.value;
    let location = inputs.location.value;
    let creator = inputs.creator.value;
    let attribute = inputs.specialAttribute.value;

    for (let [key, value] of Object.entries(inputs)) {
      if (value.value === '' || typeof(value.value) !== 'string') {
        return;
      }
    }

    if (typeof(Number(height)) !== 'number' || height <= 0) {
      return;
    }

    let newList = createList(name, height, location, creator, attribute);
    newList.className = 'snowman-info';

    let divEl = createEl('div');
    divEl.className = 'btn-container';

    let editBtn = createEl('button', 'Edit');
    editBtn.className = 'edit-btn';
    editBtn.addEventListener('click', () => edit(name, height, location, creator, attribute));

    let nextBtn = createEl('button', 'Next');
    nextBtn.className = 'next-btn';
    nextBtn.addEventListener('click', () => next(name, height, location, creator, attribute));

    divEl.appendChild(editBtn);
    divEl.appendChild(nextBtn);

    newList.appendChild(divEl);
    snowBallList.appendChild(newList);

    for (let [key, value] of Object.entries(inputs)) {
      value.value = '';
    }

    addBtn.disabled = true;
  }

  function edit(name, height, location, creator, attribute) {
    inputs.name.value = name;
    inputs.height.value = height;
    inputs.location.value = location;
    inputs.creator.value = creator;
    inputs.specialAttribute.value = attribute;
    addBtn.disabled = false;

    snowBallList.textContent = '';
  }

  function next(name, height, location, creator, attribute) {
    let newList = createList(name, height, location, creator, attribute);
    newList.className = 'snowman-content';

    let sendBtn = createEl('button', 'Send');
    sendBtn.className = 'send-btn';
    sendBtn.addEventListener('click', send);

    let articleEl = newList.children[0];
    articleEl.appendChild(sendBtn);

    snowList.appendChild(newList);

    snowBallList.textContent = '';
  }

  function send() {
    main.remove();

    let backBtn = createEl('button', 'Back');
    backBtn.className = 'back-btn';
    backBtn.addEventListener('click', back);
    body.appendChild(backBtn);
    
    backImg.hidden = false;
  }

  function back() {
    window.addEventListener("load", solve);
  }

  function createList(name, height, location, creator, attribute) {
    let liEl = createEl('li');

    let articleEl = createEl('article');
    liEl.appendChild(articleEl);

    let p1 = createEl('p', `Name: ${name}`);
    let p2 = createEl('p', `Height: ${Number(height)}`);
    let p3 = createEl('p', `Location: ${location}`);
    let p4 = createEl('p', `Creator: ${creator}`);
    let p5 = createEl('p', `Attribute: ${attribute}`);
    articleEl.appendChild(p1);
    articleEl.appendChild(p2);
    articleEl.appendChild(p3);
    articleEl.appendChild(p4);
    articleEl.appendChild(p5);

    return liEl;
  }

  function createEl(type, content) {
    let newEl = document.createElement(type);
    if (content) {
      newEl.textContent = content;
    }
    return newEl;
  }
}
