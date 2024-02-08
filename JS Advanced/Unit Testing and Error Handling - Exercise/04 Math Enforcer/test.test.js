import { mathEnforcer } from "./solution.js";
import { expect } from "chai";

describe("math enforcer", function() {

    describe("add Five", function() {
        it("returns undefined if the parameter is a string", () => {
            expect(mathEnforcer.addFive('test')).to.equal(undefined);
        });

        it("returns undefined if the parameter is a boolean", () => {
            expect(mathEnforcer.addFive(true)).to.equal(undefined);
        });

        it("returns undefined if the parameter is an array", () => {
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        });

        it("returns undefined if the parameter is an object", () => {
            expect(mathEnforcer.addFive({})).to.equal(undefined);
        });

        it("returns result if the parameter is an integer", () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });

        it("returns result if the parameter is a floating-point number", () => {
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
        });

        it("returns result if the parameter is a negative number", () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
    });

    describe("subtract Ten", function() {
        it("returns undefined if the parameter is a string", () => {
            expect(mathEnforcer.subtractTen('test')).to.equal(undefined);
        });

        it("returns undefined if the parameter is a boolean", () => {
            expect(mathEnforcer.subtractTen(true)).to.equal(undefined);
        });

        it("returns undefined if the parameter is an array", () => {
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        });

        it("returns undefined if the parameter is an object", () => {
            expect(mathEnforcer.subtractTen({})).to.equal(undefined);
        });

        it("returns result if the parameter is an integer", () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });

        it("returns result if the parameter is a floating-point number", () => {
            expect(mathEnforcer.subtractTen(5.5)).to.equal(-4.5);
        });

        it("returns result if the parameter is a negative number", () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
    });

    describe("sum", function() {
        it("returns undefined if the first parameter is a string", () => {
            expect(mathEnforcer.sum("1", 1)).to.equal(undefined);
        });

        it("returns undefined if the second parameter is a string", () => {
            expect(mathEnforcer.sum(1, "1")).to.equal(undefined);
        });

        it("returns undefined if the first parameter is a boolean", () => {
            expect(mathEnforcer.sum(true, 1)).to.equal(undefined);
        });

        it("returns undefined if the second parameter is a boolean", () => {
            expect(mathEnforcer.sum(1, true)).to.equal(undefined);
        });

        it("returns undefined if the first parameter is an array", () => {
            expect(mathEnforcer.sum([], 1)).to.equal(undefined);
        });

        it("returns undefined if the second parameter is an array", () => {
            expect(mathEnforcer.sum(1, [])).to.equal(undefined);
        });

        it("returns undefined if the first parameter is an object", () => {
            expect(mathEnforcer.sum({}, 1)).to.equal(undefined);
        });

        
        it("returns undefined if the second parameter is an object", () => {
            expect(mathEnforcer.sum(1, {})).to.equal(undefined);
        });

        it("returns result if both parameters are integers", () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });

        it("returns result if both parameters are floating-point numbers", () => {
            expect(mathEnforcer.sum(1.1, 1.1)).to.equal(2.2);
        });

        it("returns result if both parameters are negative numbers", () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        });
    });
})