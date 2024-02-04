import { expect } from "chai";
import {isSymmetric} from "./solution.js";

describe("Check for Symmetry", function() {

    it("returns false for boolean params", () => {
        expect(isSymmetric(true)).to.equal(false);
    });

    it("returns false for boolean params", () => {
        expect(isSymmetric(false)).to.equal(false);
    });

    it("returns false for object params", () => {
        expect(isSymmetric({})).to.equal(false);
    });

    it("returns false for num params", () => {
        expect(isSymmetric(1)).to.equal(false);
    });

    it("returns false for string params", () => {
        expect(isSymmetric("1")).to.equal(false);
    });

    it("returns true for symmetric array", () => {
        expect(isSymmetric(["1", "2", "1"])).to.equal(true);
    });

    it("returns false for no symmetric array", () => {
        expect(isSymmetric(["1", 1])).to.equal(false);
    });

    it("returns false for no symmetric array", () => {
        expect(isSymmetric(["2", "2", "1"])).to.equal(false);
    });

});