window.addEventListener('load', solution);

function solution() {
  const inputs = {
    employee: document.getElementById(`employee`),
    category: document.getElementById(`category`),
    urgency: document.getElementById(`urgency`),
    assignedTeam: document.getElementById(`team`),
    description: document.getElementById(`description`)
  }

  let previewList = document.querySelector(".preview-list");
  let pendingList = document.querySelector(".pending-list");
  let resolvedList = document.querySelector(".resolved-list");

  let addBtn = document.getElementById(`add-btn`);
  addBtn.addEventListener('click', add);

  function add(event) {
    event.preventDefault();
    
    for (let [name, field] of Object.entries(inputs)) {
      if (field.value == '') {
        return;
      }
    }

    let employee = inputs.employee.value;
    let category = inputs.category.value;
    let urgency = inputs.urgency.value;
    let assignedTeam = inputs.assignedTeam.value;
    let description = inputs.description.value;

    let newList = createList(employee, category, urgency, assignedTeam, description);
    newList.className = 'problem-content';
    let editBtn = createElement('button', 'Edit');
    editBtn.className = 'edit-btn';
    newList.appendChild(editBtn);
    let continueBtn = createElement('button', 'Continue');
    continueBtn.className = 'continue-btn';
    newList.appendChild(continueBtn);

    previewList.appendChild(newList);

    addBtn.parentElement.reset();
    addBtn.disabled = true;

    editBtn.addEventListener('click', () => editEvent(employee, category, urgency, assignedTeam, description));
    continueBtn.addEventListener('click', () => continueEvent(employee, category, urgency, assignedTeam, description));
  }

  function editEvent(employee, category, urgency, assignedTeam, description) {
    inputs.employee.value = employee;
    inputs.category.value = category;
    inputs.urgency.value = urgency;
    inputs.assignedTeam.value = assignedTeam;
    inputs.description.value = description;

    addBtn.disabled = false;

    previewList.textContent = '';
  }

  function continueEvent(employee, category, urgency, assignedTeam, description) {
    previewList.textContent = '';

    let newList = createList(employee, category, urgency, assignedTeam, description);
    newList.className = 'problem-content';
    let resolveBtn = createElement('button', 'Resolve');
    resolveBtn.className = 'resolve-btn';
    newList.appendChild(resolveBtn);

    pendingList.appendChild(newList);

    resolveBtn.addEventListener('click', () => resolveEvent(employee, category, urgency, assignedTeam, description));
  }

  function resolveEvent(employee, category, urgency, assignedTeam, description) {
    pendingList.textContent = '';

    let newList = createList(employee, category, urgency, assignedTeam, description);
    newList.className = 'problem-content';
    let clearBtn = createElement('button', 'Clear');
    clearBtn.className = 'clear-btn';
    newList.appendChild(clearBtn);

    resolvedList.appendChild(newList);

    clearBtn.addEventListener('click', () => clear());
  }

  function clear() {
    resolvedList.textContent = '';
  }

  function createList(employee, category, urgency, assignedTeam, description) {
    let liElement = createElement('li');
    let articleElement = createElement('article');
    liElement.appendChild(articleElement);

    let p1 = createElement('p', `From: ${employee}`);
    let p2 = createElement('p', `Category: ${category}`);
    let p3 = createElement('p', `Urgency: ${urgency}`);
    let p4 = createElement('p', `Assigned to: ${assignedTeam}`);
    let p5 = createElement('p', `Description: ${description}`);

    articleElement.appendChild(p1);
    articleElement.appendChild(p2);
    articleElement.appendChild(p3);
    articleElement.appendChild(p4);
    articleElement.appendChild(p5);

    return liElement;
  }

  function createElement(type, content) {
    let newEl = document.createElement(type);
    if (content) {
      newEl.textContent = content;
    }
    return newEl;
  }

}






