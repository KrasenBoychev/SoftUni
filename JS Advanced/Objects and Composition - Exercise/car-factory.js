function carFactory(requirements) {

    const engines = {
        'small-engine': { power: 90, volume: 1800 },
        'normal-engine': { power: 120, volume: 2400 },
        'monster-engine': { power: 200, volume: 3500 },
    }

    function engineNeeded () {
        if (requirements.power <= engines['small-engine'].power) {
            return engines['small-engine']; 
        } else if (requirements.power <= engines[`normal-engine`].power) {
            return engines['normal-engine']; 
        } else if (requirements.power <= engines[`monster-engine`].power) {
            return engines['monster-engine']; 
        }
    }

    const carriage = {
        hatchback: {type: 'hatchback', color: requirements.color},
        coupe: {type: 'coupe', color: requirements.color}
    }

    wheels = (requestedSize) => {
        if (requestedSize % 2 == 0) {
            requestedSize -= 1;
        }
        return [requestedSize, requestedSize, requestedSize, requestedSize];
    }

    const car = {
        model: requirements.model,
        engine: engineNeeded(),
        carriage: carriage[requirements.carriage],
        wheels: wheels(requirements.wheelsize)
    }

   return car;
}

carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});