function cookingByNums(num, command1, command2, command3, command4, command5) {
    num = Number(num);

    function action(command) {
        switch (command) {
            case `chop`:
                num /= 2;
                break;

            case `dice`:
                num = Math.sqrt(num);
                break;

            case `spice`:
                num += 1;
                break;

            case `bake`:
                num *= 3;
                break;

            case `fillet`:
                num *= 0.8;
                break;
        }
        
        if (num % 1 != 0) {
            console.log(num.toFixed(1));
        } else {
            console.log(num);
        }
    }

    action(command1);
    action(command2);
    action(command3);
    action(command4);
    action(command5);
}

cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');