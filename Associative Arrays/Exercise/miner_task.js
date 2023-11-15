function minerTask(input) {
    let resources = {};

    for (let i = 0; i < input.length; i += 2) {
        let str = input[i];

        if (str in resources) {
            resources[str] = resources[str] + Number(input[i + 1]);
        } else {
            resources[str] = Number(input[i + 1]);
        }
    }

    for (const [resource, value] of Object.entries(resources)) {
        console.log(resource, `->`, value);
    }
}
minerTask(
    [
        'gold',
        '155',
        'gold',
        '15',
        'silver',
        '10',
        'copper',
        '17'
    ]
);