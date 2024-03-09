export function newElement(type, content) {
    const element = document.createElement(type);

    if(content) {
        element.textContent = content;
    }

    return element;
}