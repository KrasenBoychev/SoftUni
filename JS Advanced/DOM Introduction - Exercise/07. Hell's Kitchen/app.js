function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {

      let userInput = JSON.parse(document.querySelector('textarea').value);
      let restaurants = {};

      for (let restaurant of userInput) {
         let [restaurantName, workers] = restaurant.split(` - `);
         let splitWorkers = workers.split(`, `);

         if (!(restaurantName in restaurants)) {
            restaurants[restaurantName] = {
               sumSalaries: 0,
               avgSalary: 0,
               bestSalary: 0,
               workers: []
            };
         }

         let sumSalaries = 0;

         splitWorkers.forEach(worker => {
            let [workerName, salary] = worker.split(` `);
            salary = Number(salary);
            restaurants[restaurantName].workers.push({workerName, salary});
            sumSalaries += salary;
            if (restaurants[restaurantName].bestSalary < salary) {
               restaurants[restaurantName].bestSalary = salary;
            }
         });

         restaurants[restaurantName].sumSalaries += sumSalaries;
         restaurants[restaurantName].avgSalary = (restaurants[restaurantName].sumSalaries / restaurants[restaurantName].workers.length);
      }

      let sortedByAvgSalary = Object.entries(restaurants).sort((a, b) => b[1].avgSalary - a[1].avgSalary);
      let bestRestaurant = sortedByAvgSalary[0];

      document.querySelector('#bestRestaurant p').textContent = `Name: ${bestRestaurant[0]} Average Salary: ${(bestRestaurant[1].avgSalary.toFixed(2))} Best Salary: ${(bestRestaurant[1].bestSalary).toFixed(2)}`;

      let sortedWorkers = restaurants[bestRestaurant[0]].workers.sort((a, b) => b.salary - a.salary);
      let result = [];

      sortedWorkers.forEach(worker => {
         result.push(`Name: ${worker.workerName} With Salary: ${worker.salary}`);
      });
      
      document.querySelector('#workers p').textContent = result.join(` `);
   }
}

//["PizzaHut - Peter 500, George 300, Mark 800", "TheLake - Bob 20, Joe 780, Jane 8", "PizzaHut - krasi 1"]
