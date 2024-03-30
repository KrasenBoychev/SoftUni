// const container = document.createElement('section');
// container.id = 'notification';

// document.body.appendChild(container);

export function notify(message) {
    const element = document.getElementById('errorBox');
    element.textContent = message;
    element.style.display = 'block';

    setTimeout(() => element.remove(), 3000);
}