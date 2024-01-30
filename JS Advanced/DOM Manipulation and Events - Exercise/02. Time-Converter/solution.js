function attachEventsListeners() {
    const buttons = Array.from(document.querySelectorAll('div input[type="button"]'));

    for (const button of buttons) {
        button.addEventListener('click', calc);
    }

    function calc(event) {
        let el = event.currentTarget.parentElement.children[1];
        value = Number(el.value);
        const currUnit = el.id;

        switch (currUnit) {
            case "days": convert(value);
                break;
            case "hours": convert(value / 24);
                break;
            case "minutes": convert(value / 24 / 60);
                break;
            case "seconds": convert(value / 24 / 60 / 60);
                break;

        }

        function convert(days) {
            const inputs = document.querySelectorAll('input[type="text"]');
            inputs[0].value = days;
            inputs[1].value = days * 24;
            inputs[2].value = days * 24 * 60;
            inputs[3].value = days * 24 * 60 * 60;
        }
    }

}