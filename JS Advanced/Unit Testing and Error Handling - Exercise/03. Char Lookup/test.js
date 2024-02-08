import { lookupChar } from "./solution.js";
import { expect } from "chai";

describe("test", function () {
    it("returns undefined if the first parameter is a number", () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });

    it("returns undefined if the first parameter is a boolean", () => {
        expect(lookupChar(true, 1)).to.equal(undefined);
    });

    it("returns undefined if the first parameter is an object", () => {
        expect(lookupChar({}, 1)).to.equal(undefined);
    });

    it("returns undefined if the first parameter is an array", () => {
        expect(lookupChar([], 1)).to.equal(undefined);
    });

    it("returns undefined if the second parameter is a string", () => {
        expect(lookupChar('', '')).to.equal(undefined);
    });

    it("returns undefined if the second parameter is a boolean", () => {
        expect(lookupChar('', true)).to.equal(undefined);
    });

    it("returns undefined if the second parameter is an array", () => {
        expect(lookupChar('', [])).to.equal(undefined);
    });

    it("returns undefined if the second parameter is an object", () => {
        expect(lookupChar('', {})).to.equal(undefined);
    });

    it("returns `Incorrect index` if index is a floating-point number", () => {
        expect(lookupChar('test', 1.1)).to.equal(undefined);
    });

    it("returns `Incorrect index` if index equals to the string length", () => {
        expect(lookupChar('test', 4)).to.equal(`Incorrect index`);
    });

    it("returns `Incorrect index` if index is bigger than the string length", () => {
        expect(lookupChar('test', 10)).to.equal(`Incorrect index`);
    });

    it("returns `Incorrect index` if index is a negative number", () => {
        expect(lookupChar('test', -1)).to.equal(`Incorrect index`);
    });

    it("returns 'e' if both values are correct", () => {
        expect(lookupChar('test', 0)).to.equal(`t`);
    });

    it("returns 't' if both values are correct", () => {
        expect(lookupChar('test', 3)).to.equal(`t`);
    });

    it("returns 'e' if both values are correct", () => {
        expect(lookupChar('test', 1)).to.equal(`e`);
    });
});