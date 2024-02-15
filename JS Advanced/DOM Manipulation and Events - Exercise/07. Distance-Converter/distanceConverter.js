function attachEventsListeners() {
    let inputDistance = document.getElementById('inputDistance');
    let inputUnits = document.getElementById('inputUnits');
    let outputDistance = document.getElementById('outputDistance');
    let outputUnits = document.getElementById('outputUnits');
    let btn = document.getElementById('convert');

    btn.addEventListener('click', convert);

    function convert() {
        let inputDistanceValue = Number(inputDistance.value);
        let inputUnitsValue = inputUnits.value;
        let outputUnitsValue = outputUnits.value;

        let inputValueinM = 0;
        switch (inputUnitsValue) {
            case "km": inputValueinM = inputDistanceValue * 1000;
                break;
            case "m": inputValueinM = inputDistanceValue;
                break;
            case "cm": inputValueinM = inputDistanceValue * 0.01;
                break;
            case "mm": inputValueinM = inputDistanceValue * 0.001;
                break;
            case "mi": inputValueinM = inputDistanceValue * 1609.34;
                break;
            case "yrd": inputValueinM = inputDistanceValue * 0.9144;
                break;
            case "ft": inputValueinM = inputDistanceValue * 0.3048;
                break;
            case "in": inputValueinM = inputDistanceValue * 0.0254;
                break;
        }

        let result = 0;
        switch (outputUnitsValue) {
            case "km": result = inputValueinM / 1000;
                break;
            case "m": result = inputValueinM;
                break;
            case "cm": result = inputValueinM / 0.01;
                break;
            case "mm": result = inputValueinM / 0.001;
                break;
            case "mi": result = inputValueinM / 1609.34;
                break;
            case "yrd": result = inputValueinM / 0.9144;
                break;
            case "ft": result = inputValueinM / 0.3048;
                break;
            case "in": result = inputValueinM / 0.0254;
                break;
        }

        outputDistance.value = result;
    }
}