const url = 'http://localhost:3030/jsonstore/collections/myboard/';

console.log('wiii');

document.querySelector('form').addEventListener('submit', createTopic); 

async function createTopic(event) {
    event.preventDefault();

    try {
        const formData = new FormData(event.target);
        const data = Object.entries(formData.entries());
debugger
        if (!response.ok) {
            const err = response.json();
            alert(err.message);
        }

        


    } catch(err) {
        alert(err.message);
    }
}