import { expect } from "chai";
import { PaymentPackage } from "./PaymentPackage.js";

describe("Test Payment Package Class", function() {
    it("throws an error if only name provided", function() {
        const hrPack = new PaymentPackage('HR Services');
        expect(hrPack).to.throw(`Value must be a non-negative number`);
    });

    it("throws an error if only name provided", function() {
        const result = new PaymentPackage('HR Services', 1500);
        expect(result).to.equal(`PaymentPackage {_name: 'HR Services', _value: 1500, _VAT: 20, _active: true}`);
    });
    
});