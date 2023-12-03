function passwordGenerator(input) {
    let vowels = [`a`, `o`, `i`, `e`, `u`];
    let password = input[0] + input[1];
    let replacementStr = input[2].toUpperCase();
    let count = 0;

    for (let i = 0; i < password.length; i++) {
        let letter = password[i];

        if (vowels.includes(letter)) {
            password = password.replace(letter, replacementStr[count]);
            count++;
            if (count == replacementStr.length) {
                count = 0;
            }
        }
    }
    password = password.split(``).reverse().join(``);
    console.log(`Your generated password is ${password}`);
}

passwordGenerator([
    'ilovepizza', 
    'ihatevegetables',
    'orange'
    ]);

passwordGenerator([
    'easymoneyeazylife', 
    'atleasttencharacters', 
    'absolute'
    ]);

passwordGenerator([
    'areyousureaboutthisone', 
    'notquitebutitrustyou', 
    'disturbed'
    ]);