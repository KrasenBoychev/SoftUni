import { expect } from "chai";
import { petAdoptionAgency } from "./petAdoptionAgency.js";

describe("Tests Suite", function() {

    describe("isPetAvailable(pet, availableCount, vaccinated) function", function() {

        it("returns a message if availableCount is less than 0", function() {
            expect(petAdoptionAgency.isPetAvailable("dog", -1, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`);
        });

        it("returns a message if availableCount is 0", function() {
            expect(petAdoptionAgency.isPetAvailable("dog", 0, true)).to.equal(`Sorry, there are no dog(s) available for adoption at the agency.`);
        });

        it("returns a message if vaccinated is true", function() {
            expect(petAdoptionAgency.isPetAvailable("dog", 1, true)).to.equal(`Great! We have 1 vaccinated dog(s) available for adoption at the agency.`);
        });

        it("returns a message if vaccinated is false", function() {
            expect(petAdoptionAgency.isPetAvailable("dog", 1, false)).to.equal(`Great! We have 1 dog(s) available for adoption, but they need vaccination.`);
        });

        it("throws an error if pet is a number", function() {
            expect(() => petAdoptionAgency.isPetAvailable(1, 1, false)).to.throw(`Invalid input`);
        });

        it("throws an error if pet is a boolean", function() {
            expect(() => petAdoptionAgency.isPetAvailable(true, 1, false)).to.throw(`Invalid input`);
        });
        
        it("throws an error if availableCount is a string", function() {
            expect(() => petAdoptionAgency.isPetAvailable("dog", "1", false)).to.throw(`Invalid input`);
        });

        it("throws an error if availableCount is a boolean", function() {
            expect(() => petAdoptionAgency.isPetAvailable("dog", false, false)).to.throw(`Invalid input`);
        });

        it("throws an error if vaccinated is a string", function() {
            expect(() => petAdoptionAgency.isPetAvailable("dog", false, "1")).to.throw(`Invalid input`);
        });

        it("throws an error if vaccinated is a number", function() {
            expect(() => petAdoptionAgency.isPetAvailable("dog", false, 1)).to.throw(`Invalid input`);
        });
     });

     describe("getRecommendedPets(petList, desiredTraits) function", function() {

        it("returns a message if pets in the petList have traits matching the desiredTraits", function() {
            expect(petAdoptionAgency.getRecommendedPets([{name: "Recks", traits: "eat"}, {name: "Chocki", traits: "eat"}, {name: "Mare", traits: "play"}], "eat")).to.equal(`Recommended pets with the desired traits (eat): Recks, Chocki`);
        });

        it("returns a message if pets in the petList do not have traits matching the desiredTraits", function() {
            expect(petAdoptionAgency.getRecommendedPets([{name: "Recks", traits: "jump"}, {name: "Chocki", traits: "run"}, {name: "Mare", traits: "play"}], "eat")).to.equal(`Sorry, we currently have no recommended pets with the desired traits: eat.`);
        });

        it("throws an error if petList is a string", function() {
            expect(() => petAdoptionAgency.getRecommendedPets("dog","1")).to.throw(`Invalid input`);
        });

        it("throws an error if petList is a number", function() {
            expect(() => petAdoptionAgency.getRecommendedPets(1,"1")).to.throw(`Invalid input`);
        });

        it("throws an error if petList is an array", function() {
            expect(() => petAdoptionAgency.getRecommendedPets(1,"1")).to.throw(`Invalid input`);
        });

        it("throws an error if desiredTraits is a number", function() {
            expect(() => petAdoptionAgency.getRecommendedPets([{name: "Recks", traits: "eat"}], 1)).to.throw(`Invalid input`);
        });

        it("throws an error if desiredTraits is an array", function() {
            expect(() => petAdoptionAgency.getRecommendedPets([{name: "Recks", traits: "eat"}], [])).to.throw(`Invalid input`);
        });
    });

    describe("adoptPet(pet, adopterName) function", function() {

        it("returns a message if the input is valid", function() {
            expect(petAdoptionAgency.adoptPet("dog", "Krasen")).to.equal(`Congratulations, Krasen! You have adopted dog from the agency. Enjoy your time with your new furry friend!`);
        });

        it("throws an error if pet is a number", function() {
            expect(() => petAdoptionAgency.adoptPet(1, "1")).to.throw(`Invalid input`);
        });

        it("throws an error if adopterName is a number", function() {
            expect(() => petAdoptionAgency.adoptPet("1", 1)).to.throw(`Invalid input`);
        });
    });
});