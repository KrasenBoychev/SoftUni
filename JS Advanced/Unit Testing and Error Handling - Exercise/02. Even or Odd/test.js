import {isOddOrEven} from './solution.js';
import { expect } from 'chai';

describe ("Even or Odd", function() {
    it("returns undefined if the input is a number", () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });

    it("returns undefined if the input is an array", () => {
        expect(isOddOrEven([])).to.equal(undefined);
    });

    it("returns undefined if the input is an object", () => {
        expect(isOddOrEven({})).to.equal(undefined);
    });

    it("returns 'even' if the input is 'test'", () => {
        expect(isOddOrEven('test')).to.equal('even');
    });

    it("returns 'odd' if the input is 'test1'", () => {
        expect(isOddOrEven('test1')).to.equal('odd');
    });
});