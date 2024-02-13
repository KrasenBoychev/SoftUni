import { expect } from "chai";
import { motorcycleRider } from "./Motorcycle Rider.js";

describe("Tests Suite", function() {
    
    describe("licenseRestriction functionality", () => {
        it("return correct output for AM", () => {
           expect(motorcycleRider.licenseRestriction(`AM`)).to.equal(`Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.`);
        });

        it("return correct output for A1", () => {
            expect(motorcycleRider.licenseRestriction(`A1`)).to.equal(`Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.`);
         });

         it("return correct output for A2", () => {
            expect(motorcycleRider.licenseRestriction(`A2`)).to.equal(`Motorcycles with maximum power of 35KW. and the minimum age is 18.`);
         });

         it("return correct output for A", () => {
            expect(motorcycleRider.licenseRestriction(`A`)).to.equal(`No motorcycle restrictions, and the minimum age is 24.`);
         });

         it("throws an error for incorrrect string", () => {
            expect(() => motorcycleRider.licenseRestriction(`z`)).to.throw(`Invalid Information!`);
         });

         it("throws an error for number", () => {
            expect(() => motorcycleRider.licenseRestriction(1)).to.throw(`Invalid Information!`);
         });
     });
    

     describe("motorcycleShowroom functionality", () => {
        it("returns 4 motorcycles when engineVolume has 7 elements (4 valid, 3 invalid)", () => {
            expect(motorcycleRider.motorcycleShowroom([0, 49, 50, 51, 60, 100, 101], 100)).to.equal(`There are 4 available motorcycles matching your criteria!`);
         });

         it("returns 0 motorcycles when engineVolume has 3 elements (3 invalid)", () => {
            expect(motorcycleRider.motorcycleShowroom([0, 49, 101], 100)).to.equal(`There are 0 available motorcycles matching your criteria!`);
         });

         it("returns 1 motorcycles when engineVolume has 1 valid element(50) and maximumEngineVolume is 50", () => {
            expect(motorcycleRider.motorcycleShowroom([50], 50)).to.equal(`There are 1 available motorcycles matching your criteria!`);
         });

        it("throws an error if engineVolume is a number", () => {
           expect(() => motorcycleRider.motorcycleShowroom(1, 1)).to.throw(`Invalid Information!`);
        });

        it("throws an error if engineVolume is a string", () => {
            expect(() => motorcycleRider.motorcycleShowroom("1", 1)).to.throw(`Invalid Information!`);
         });

         it("throws an error if engineVolume has 0 elements", () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 1)).to.throw(`Invalid Information!`);
         });

         it("throws an error if maximumEngineVolume is a string", () => {
            expect(() => motorcycleRider.motorcycleShowroom([1], "1")).to.throw(`Invalid Information!`);
         });

         it("throws an error if maximumEngineVolume is an array", () => {
            expect(() => motorcycleRider.motorcycleShowroom([1], [])).to.throw(`Invalid Information!`);
         });

         it("throws an error if maximumEngineVolume equals 49", () => {
            expect(() => motorcycleRider.motorcycleShowroom([1], 49)).to.throw(`Invalid Information!`);
         });

     });


     describe("otherSpendings functionality", () => {
        it("returns $200 if equipment consists helmet and discount is false", () => {
            expect(motorcycleRider.otherSpendings(["helmet", "sth"], [], false)).to.equal(`You spend $200.00 for equipment and consumables!`);
         });

         it("returns $300 if equipment consists helmet and discount is false", () => {
            expect(motorcycleRider.otherSpendings(["jacked", "sth"], [], false)).to.equal(`You spend $300.00 for equipment and consumables!`);
         });

         it("returns $70 if equipment consists helmet and discount is false", () => {
            expect(motorcycleRider.otherSpendings([], ["engine oil", "sth"], false)).to.equal(`You spend $70.00 for equipment and consumables!`);
         });

         it("returns $30 if equipment consists helmet and discount is false", () => {
            expect(motorcycleRider.otherSpendings([], ["oil filter", "sth"], false)).to.equal(`You spend $30.00 for equipment and consumables!`);
         });

         it("returns $540.00 if equipment consists helmet and discount is true", () => {
            expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["oil filter", "engine oil"], true)).to.equal(`You spend $540.00 for equipment and consumables with 10% discount!`);
         });

         it("returns $0.00 if discount is true, but the arrays are empty", () => {
            expect(motorcycleRider.otherSpendings([], [], true)).to.equal(`You spend $0.00 for equipment and consumables with 10% discount!`);
         });

         it("returns $0.00 if discount is false, but the arrays are empty", () => {
            expect(motorcycleRider.otherSpendings([], [], false)).to.equal(`You spend $0.00 for equipment and consumables!`);
         });

         it("throws error if equipment is a string", () => {
            expect(() => motorcycleRider.otherSpendings("1", [], true)).to.throw();
         });

         it("throws error if equipment is a number", () => {
            expect(() => motorcycleRider.otherSpendings(1, [], true)).to.throw();
         });

         it("throws error if consumables is a number", () => {
            expect(() => motorcycleRider.otherSpendings([], 1, true)).to.throw();
         });

         it("throws error if consumables is a string", () => {
            expect(() => motorcycleRider.otherSpendings([], "1", true)).to.throw();
         });

         it("throws error if discount is a string", () => {
            expect(() => motorcycleRider.otherSpendings([], [], "true")).to.throw();
         });

         it("throws error if discount is a number", () => {
            expect(() => motorcycleRider.otherSpendings([], [], 1)).to.throw();
         });

         it("throws error if discount is an array", () => {
            expect(() => motorcycleRider.otherSpendings([], [], [])).to.throw();
         });
     });
});


