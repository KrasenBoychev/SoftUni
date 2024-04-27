type City = {
    name: string,
    population: number,
    treasury: number,
    taxRate: number,
    collectTaxes: Function,
    applyGrowth: Function,
    applyRecession: Function
}

function cityTaxes(name: string, population: number, treasury: number): City {

    const cityObj: City = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes: function(): void {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth: function(percentage: number): void {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession: function(percentage: number) : void {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        }
    }
   
    return cityObj;
}


// test1
const test1 = cityTaxes('Tortuga', 7000, 15000);
console.log(test1);

//test2
const test2 = cityTaxes('Tortuga', 7000, 15000);

test2.collectTaxes();
console.log(test2.treasury);

test2.applyGrowth(5);
console.log(test2.population);

test2.applyRecession(20);
console.log((test2.treasury));
