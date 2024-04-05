function towns(input: Array<string>) {
    type Town = {
        town: string,
        latitude: string,
        longitude : string
    }

    input.forEach(townInfo => {
        const [townValue, latitude, longitude] = townInfo.split(` | `);
        const latitudeValue = Number(latitude).toFixed(2);
        const longitudeValue = Number(longitude).toFixed(2);

        const newTown: Town = {
            town: townValue,
            latitude: latitudeValue.toString(),
            longitude: longitudeValue.toString()
        }

        console.log(newTown);
        
    })
}

towns(['Sofia | 42.696552 | 23.32601',

'Beijing | 39.913818 | 116.363625']);
