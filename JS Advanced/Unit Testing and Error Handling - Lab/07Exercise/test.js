import { expect } from "chai";
import { createCalculator } from "./solution.js";

describe("Add / Subtract", function () {

    it("returns object", () => {
        expect(typeof(createCalculator())).to.equal(`object`);
    });

    it("returns function add", () => {
        expect(typeof(createCalculator().add)).to.equal(`function`);
    });

    it("returns function subtract", () => {
        expect(typeof(createCalculator().subtract)).to.equal(`function`);
    });

    it("returns function get", () => {
        expect(typeof(createCalculator().get)).to.equal(`function`);
    });

    it("returns 0 by default", () => {
        expect(createCalculator().get()).to.equal(0);
    });

    it("returns 5 when add(5)", () => {
        let result = createCalculator();
        result.add(5);
        expect(result.get()).to.equal(5);
    });

    it("returns 0 when subtract(5)", () => {
        let result = createCalculator();
        result.subtract(5);
        expect(result.get()).to.equal(-5);
    });

    it("returns 5 when add('5')", () => {
        let result = createCalculator();
        result.add('5');
        expect(result.get()).to.equal(5);
    });

    it("returns 0 when subtract('5')", () => {
        let result = createCalculator();
        result.subtract('5');
        expect(result.get()).to.equal(-5);
    });

});
