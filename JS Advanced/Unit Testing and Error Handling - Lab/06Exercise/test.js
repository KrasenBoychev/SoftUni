import { expect } from "chai";
import { rgbToHexColor } from "./solution.js";

describe ("RGB to Hex", function() {

    it("returns undefined if red is a string", () => {
        expect(rgbToHexColor("1", 1, 1)).to.equal(undefined);
    });
    it("returns undefined if green is a string", () => {
        expect(rgbToHexColor(1, "1", 1)).to.equal(undefined);
    });
    it("returns undefined if blue is a string", () => {
        expect(rgbToHexColor(1, 1, "1")).to.equal(undefined);
    });
    it("returns undefined if red is not an integer", () => {
        expect(rgbToHexColor(1.1, 1, 1)).to.equal(undefined);
    });
    it("returns undefined if green is not an integer", () => {
        expect(rgbToHexColor(1, 1.1, 1)).to.equal(undefined);
    });
    it("returns undefined if blue is not an integer", () => {
        expect(rgbToHexColor(1, 1, 1.1)).to.equal(undefined);
    });
    
    it("returns #000000 if all nums are 0", () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal(`#000000`);
    });

    it("returns #FFFFFF if all nums are 255", () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal(`#FFFFFF`);
    });

    it("returns undefined if red is a string", () => {
        expect(rgbToHexColor("1", 1, 1)).to.equal(undefined);
    });

    it("returns undefined if red is less than 0", () => {
        expect(rgbToHexColor(-1, 1, 1)).to.equal(undefined);
    });
    it("returns undefined if green is less than 0", () => {
        expect(rgbToHexColor(1, -1, 1)).to.equal(undefined);
    });
    it("returns undefined if blue is less than 0", () => {
        expect(rgbToHexColor(1, 1, -1)).to.equal(undefined);
    });

    it("returns undefined if red is more than 255", () => {
        expect(rgbToHexColor(256, 1, 1)).to.equal(undefined);
    });
    it("returns undefined if green is more than 255", () => {
        expect(rgbToHexColor(1, 256, 1)).to.equal(undefined);
    });
    it("returns undefined if blue is more than 255", () => {
        expect(rgbToHexColor(1, 1, 256)).to.equal(undefined);
    });
    it("returns undefined if green is more than 255", () => {
        expect(rgbToHexColor(1, 256, 1)).to.equal(undefined);
    });
    it("returns a string if the values are truthy", () => {
        expect(typeof(rgbToHexColor(1, 1, 1))).to.equal(`string`);
    });
    it("returns true if the values are truthy", () => {
        expect(rgbToHexColor(1, 1, 1)).to.equal(`#010101`);
    });
    it("returns 7 symbols", () => {
        expect(rgbToHexColor(1, 1, 1).length).to.equal(7);
    });
    it("retuns true if the result starts with #", () => {
        expect(rgbToHexColor(1, 1, 1).startsWith(`#`)).to.equal(true);
    });
    it("returns true if the letter are capital", () => {
        expect(rgbToHexColor(190, 190, 190) === rgbToHexColor(190, 190, 190).toUpperCase()).to.equal(true);
    });
});