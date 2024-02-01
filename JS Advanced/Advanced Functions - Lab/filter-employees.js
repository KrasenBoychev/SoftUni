function solve(data, criteria) {
    const [keyCriteria, valueCriteria] = criteria.split(`-`);
    const parseData = JSON.parse(data);
    let count = 0;

    parseData.map(person => {
        if (person[keyCriteria] == valueCriteria || valueCriteria == 'all') {
            console.log(`${count}. ${person['first_name']} ${person['last_name']} - ${person.email}`);
            count++;
        }
    });

}

// Alternative solution

function solve(data, criteria) {

    let [prefix, value] = criteria.split('-');
    let counter = 0;
    JSON.parse(data).forEach(person => selectByCriteria.call(person));

    function selectByCriteria() {

        if (this[prefix] === value || criteria === 'all') {

            return console.log(`${counter++}. ${this.first_name} ${this.last_name} - ${this.email}`);
        }
    }
}


solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
    'last_name-Johnson')