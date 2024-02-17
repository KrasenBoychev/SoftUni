import { expect } from "chai";
import { planYourTrip } from "./planYourTrip.js";

describe("Tests Plan Your Trip", function() {
    describe("function choosingDestination (destination, season, year)", function() {
        it("If the year is different than 2024, throw an error", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023)).to.throw(`Invalid Year!`);
        });

        it("If the year is different than 2024, throw an error", function() {
            expect(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2025)).to.throw(`Invalid Year!`);
        });

        it("If the value of the string destination is different from Ski Resort, throw an error", function() {
            expect(() => planYourTrip.choosingDestination("Ski Hotel", "any", 2024)).to.throw(`This destination is not what you are looking for.`);
        });

        it("If the season is Winter, return string", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)).to.equal(`Great choice! The Winter is the perfect time to visit the Ski Resort.`);
        });

        it("If the season is not Winter, return string", function() {
            expect(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)).to.equal(`Consider visiting during the Winter for the best experience at the Ski Resort.`);
        });
     });
     

     describe("function exploreOptions (activities, activityIndex)", function() {
        it("must remove an element (activity) from the array that is located on the index specified as a parameter", function() {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1)).to.equal(`Skiing, Winter Hiking`);
        });

        it("must remove an element (activity) from the array that is located on the index specified as a parameter", function() {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 0)).to.equal(`Snowboarding, Winter Hiking`);
        });

        it("must remove an element (activity) from the array that is located on the index specified as a parameter", function() {
            expect(planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 2)).to.equal(`Skiing, Snowboarding`);
        });

        it("if activities is not an array throw an error", function() {
            expect(() => planYourTrip.exploreOptions("Skiing", 2)).to.throw(`Invalid Information!`);
        });

        it("if activities is not an array throw an error", function() {
            expect(() => planYourTrip.exploreOptions(1, 2)).to.throw(`Invalid Information!`);
        });

        it("if activities is not an array throw an error", function() {
            expect(() => planYourTrip.exploreOptions([], 1)).to.throw(`Invalid Information!`);
        });

        it("if activityIndex is not a number throw an error", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], "1")).to.throw(`Invalid Information!`);
        });

        it("if activityIndex is not a number throw an error", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], [])).to.throw(`Invalid Information!`);
        });

        it("if activityIndex is not a number throw an error", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 1.5)).to.throw(`Invalid Information!`);
        });

        it("if activityIndex is not a number throw an error", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], -1)).to.throw(`Invalid Information!`);
        });

        it("if activityIndex is not a number throw an error", function() {
            expect(() => planYourTrip.exploreOptions(["Skiing", "Snowboarding", "Winter Hiking"], 3)).to.throw(`Invalid Information!`);
        });
     });


     describe("function estimateExpenses (distanceInKilometers, fuelCostPerLiter) ", function() {
        it("If the total cost is less or equal to $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(2, 5)).to.equal(`The trip is budget-friendly, estimated cost is $10.00.`);
        });

        it("If the total cost is less or equal to $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(80, 5.1)).to.equal(`The trip is budget-friendly, estimated cost is $408.00.`);
        });

        it("If the total cost is less or equal to $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(49.2, 0.01)).to.equal(`The trip is budget-friendly, estimated cost is $0.49.`);
        });

        it("If the total cost is less or equal to $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(50.78, 2.69)).to.equal(`The trip is budget-friendly, estimated cost is $136.60.`);
        });

        it("If the total cost is less or equal to $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(499, 1)).to.equal(`The trip is budget-friendly, estimated cost is $499.00.`);
        });

        it("If the total cost is less or equal to $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(500, 1)).to.equal(`The trip is budget-friendly, estimated cost is $500.00.`);
        });

        
        it("If the total cost is more than $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(500.01, 1)).to.equal(`The estimated cost for the trip is $500.01, plan accordingly.`);
        });

        it("If the total cost is more than $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(501, 1)).to.equal(`The estimated cost for the trip is $501.00, plan accordingly.`);
        });

        it("If the total cost is more than $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(100.5, 5.2)).to.equal(`The estimated cost for the trip is $522.60, plan accordingly.`);
        });

        it("If the total cost is more than $500. return a message", function() {
            expect(planYourTrip.estimateExpenses(200, 10.5)).to.equal(`The estimated cost for the trip is $2100.00, plan accordingly.`);
        });

        it("If the distanceInKilometers is not a number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses("100", 10)).to.throw(`Invalid Information!`);
        });

        it("If the distanceInKilometers is not a number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses([], 10)).to.throw(`Invalid Information!`);
        });

        it("If the distanceInKilometers is not a number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses({}, 10)).to.throw(`Invalid Information!`);
        });
       
        it("If the distanceInKilometers is a negative number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(-100, 10)).to.throw(`Invalid Information!`);
        });

        it("If the distanceInKilometers is 0 throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(0, 10)).to.throw(`Invalid Information!`);
        });

        it("If the fuelCostPerLiter is not a number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(100, "10")).to.throw(`Invalid Information!`);
        });

        it("If the fuelCostPerLiter is not a number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(100, [])).to.throw(`Invalid Information!`);
        });

        it("If the fuelCostPerLiter is not a number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(100, {})).to.throw(`Invalid Information!`);
        });
       
        it("If the fuelCostPerLiter is a negative number throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(100, -10)).to.throw(`Invalid Information!`);
        });

        it("If the fuelCostPerLiter is 0 throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(100, 0)).to.throw(`Invalid Information!`);
        });

        it("If both are 0 throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(0, 0)).to.throw(`Invalid Information!`);
        });

        it("If both are negative throw an error", function() {
            expect(() => planYourTrip.estimateExpenses(-1, -1)).to.throw(`Invalid Information!`);
        });
     });
});