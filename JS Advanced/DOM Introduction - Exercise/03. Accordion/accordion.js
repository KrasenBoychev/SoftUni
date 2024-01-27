function toggle() {
    let command = document.getElementsByClassName('button')[0].textContent;

    if (command == `More`) {
        document.getElementById('extra').style.display = 'block';
        document.getElementsByClassName('button')[0].textContent = 'Less';

    } else if (command == `Less`) {
        document.getElementById('extra').style.display = 'none';
        document.getElementsByClassName('button')[0].textContent = 'More';
    }   
}