import { expect } from 'chai';
import { sum } from './solution.js';

describe('Suite', function() {
    it('works with number array', () => {
        const arr = [1, 1, 1];

        expect(sum(arr)).to.equal(3);
    });

    it('throws error for non-array params', () => {
        expect(() => sum(1)).to.throw();
    });

    it(`returns 0 for empty array`, () => {
        expect(sum([])).to.equal(0);
    });

    it('returns 1 for array with 1 element', () => {
        expect(sum([1])).to.equal(1);
    });
});
