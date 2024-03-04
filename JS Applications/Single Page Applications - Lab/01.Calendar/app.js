years('years');

const months = {
    "Jan": 1,
    "Feb": 2,
    "Mar": 3,
    "Apr": 4,
    "May": 5,
    "Jun": 6,
    "Jul": 7,
    "Aug": 8,
    "Sept": 9,
    "Oct": 10,
    "Nov": 11,
    "Dec": 12
}

const currDetails = {
    year: "",
    month: ""
}

function years(id) {
    const currSection = showCurrSection(id);
  
    currSection.querySelectorAll('td div').forEach(div => {
        div.addEventListener('click', openMonth);
    });
}

function openMonth(event) {
    currDetails.year = event.target.textContent.split(` `);
    
    if (currDetails.year.length > 1) {
        currDetails.year = currDetails.year[1];
    } else {
        currDetails.year = currDetails.year[0];
    }

    const currYear = showCurrSection(`year-${currDetails.year}`);

    currYear.querySelector('caption').addEventListener('click', () => years('years'));

    currYear.querySelectorAll('td div').forEach(div => {
        div.addEventListener('click', openDays);
    });
}

function openDays(event) {
    currDetails.month = event.target.textContent;

    const currMonth = showCurrSection(`month-${currDetails.year}-${months[currDetails.month]}`);

    currMonth.querySelector('caption').addEventListener('click', openMonth)
}


function showCurrSection(sectionId) {
    document.querySelectorAll('section').forEach(s => {
        s.style.display = 'none';
    });

    const section = document.getElementById(sectionId);
    section.style.display = 'block';

    return section;
   // currSection.querySelector('caption').addEventListener('click', openPreviousCalendar);
}



