function arenaTier(input) {
    let gladiatorList = {};

    let newline = input.shift();
    while (newline != `Ave Cesar`) {

        if (newline.includes(` -> `)) {
            let [newGladiator, newTechnique, newSkill] = newline.split(` -> `);
            newSkill = Number(newSkill);

            if (newGladiator in gladiatorList) {
                let techniques = Object.keys(gladiatorList[newGladiator]);
                if (techniques.includes(newTechnique)) {
                    if (gladiatorList[newGladiator][newTechnique] < newSkill) {
                        gladiatorList[newGladiator][newTechnique] = newSkill;
                    }

                } else {
                    gladiatorList[newGladiator][newTechnique] = newSkill;
                }

            } else {
                gladiatorList[newGladiator] = {};
                gladiatorList[newGladiator][newTechnique] = newSkill;
            }

        } else if (newline.includes(` vs `)) {
            let [gladiatorOne, gladiatorTwo] = newline.split(` vs `);

            if (gladiatorOne in gladiatorList && gladiatorTwo in gladiatorList) {

                let techniquesGladiatorOne = Object.keys(gladiatorList[gladiatorOne]);
                let techniquesGladiatorTwo = Object.keys(gladiatorList[gladiatorTwo]);

                let sameTechniques = 0;
                for (let i = 0; i < techniquesGladiatorOne.length; i++) {
                    for (let j = 0; j < techniquesGladiatorTwo.length; j++) {

                        if (techniquesGladiatorOne[i] == techniquesGladiatorTwo[j]) {
                            sameTechniques++;
                        }
                    }
                }

                if (sameTechniques > 0) {

                    let skillPointsGladiatorOne = Object.values(gladiatorList[gladiatorOne]);
                    let totalPointsOne = skillPointsGladiatorOne.reduce((acc, value) => acc + value);

                    let skillPointsGladiatorTwo = Object.values(gladiatorList[gladiatorTwo]);
                    let totalPointsTwo = skillPointsGladiatorTwo.reduce((acc, value) => acc + value);

                    if (totalPointsOne > totalPointsTwo) {
                        delete gladiatorList[gladiatorTwo];
                    } else {
                        delete gladiatorList[gladiatorOne];
                    }
                }
            }

        }

        newline = input.shift();
    }

    let gladiators = Object.entries(gladiatorList);
    gladiators.forEach(gladiator => {
        let skillPoints = Object.values(gladiator[1]);
        let totalSkillPoints = skillPoints.reduce((acc, value) => acc + value);
        
        gladiatorList[gladiator[0]][`totalSkillPoints`] = totalSkillPoints;
    });

    let sortedGladiators = gladiators.sort((a, b) => b[1][`totalSkillPoints`] - a[1][`totalSkillPoints`] || a[0].localeCompare(b[0]));

    sortedGladiators.forEach(gladiator => {
        console.log(`${gladiator[0]}: ${gladiator[1][`totalSkillPoints`]} skill`);

        let techniquesAndSkills = Object.entries(gladiator[1]);
        let sortedTechniques = techniquesAndSkills.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        
        sortedTechniques.forEach(element => {
            if (element[0] != `totalSkillPoints`) {
                console.log(`- ${element[0]} <!> ${element[1]}`);
            }
        });
    });

}
// arenaTier([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ]);

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);