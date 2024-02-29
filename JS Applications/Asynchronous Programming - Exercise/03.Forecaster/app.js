function attachEvents() {
    const forecastArea = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');

    const weather = {
        'Sunny': '&#x2600',
        'Partly sunny': '&#x26C5',
        'Overcast': '&#x2601',
        'Rain': '&#x2614',
        'Degrees': '&#176'
    }

    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', submit);

    const mainUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
    const todayUrl = `http://localhost:3030/jsonstore/forecaster/today/`;
    const nextDaysUrl = `http://localhost:3030/jsonstore/forecaster/upcoming/`;

    async function submit() {
        if (current.children.length > 1 && upcoming.children.length > 1) {
            current.removeChild(current.children[1]);
            upcoming.removeChild(upcoming.children[1]);
        }

        const currLocation = document.getElementById('location').value;
        forecastArea.style.display = 'block';

        try {
            const response = await fetch(mainUrl);
            const data = await response.json();
    
            let findLocation = data.find(l => l.name == currLocation);
            let locationCode = findLocation.code;

            await today(locationCode);
            await nextDays(locationCode);

        } catch (error) {
            forecastArea.textContent = 'Error';
            throw error;
        }
    }

    async function today(code) {
        const forecasts = createElement('div', 'forecasts');
        current.appendChild(forecasts);
            
            const response = await fetch(todayUrl + code);
            const data = await response.json();

            const [forecast, name] = Object.values(data);
            const [condition, high, low] = Object.values(forecast);

            const conditionSymbol = createElement('span', 'condition symbol', weather[condition]);
            forecasts.appendChild(conditionSymbol);

            const conditionElement = createElement('span', 'condition');
            forecasts.appendChild(conditionElement);

            const currLocation = createElement('span', 'forecast-data', name);
            const currDegrees = createElement('span', 'forecast-data', `${low}${weather['Degrees']}/${high}${weather['Degrees']}`);
            const currCondition = createElement('span', 'forecast-data', condition);

            conditionElement.appendChild(currLocation);
            conditionElement.appendChild(currDegrees);
            conditionElement.appendChild(currCondition);
    }

    async function nextDays(code) {
        const forecastInfo = createElement('div', 'forecast-info');
        upcoming.appendChild(forecastInfo);

            const response = await fetch(nextDaysUrl + code);
            const data = await response.json();
            
            const [forecast, name] = Object.values(data);
            
            for (const day of forecast) {
                const [condition, high, low] = Object.values(day);
                let newSpanEl = createSpanElement(condition, high, low);
                forecastInfo.appendChild(newSpanEl);
            }
    }

    function createSpanElement(condition, high, low) {
        const upcomingSpan = createElement('span', 'upcoming');

        const currSymbol = createElement('span', 'symbol', weather[condition]);
        const currDegrees = createElement('span', 'forecast-data', `${low}${weather['Degrees']}/${high}${weather['Degrees']}`);
        const currCondition = createElement('span', 'forecast-data', condition);

        upcomingSpan.appendChild(currSymbol);
        upcomingSpan.appendChild(currDegrees);
        upcomingSpan.appendChild(currCondition);

        return upcomingSpan;
    }

    function createElement(type, className, content) {
        let newEl = document.createElement(type);
        newEl.className = className;
        if (content) {
            newEl.innerHTML = content;
        }
        return newEl;
    }
}

attachEvents();