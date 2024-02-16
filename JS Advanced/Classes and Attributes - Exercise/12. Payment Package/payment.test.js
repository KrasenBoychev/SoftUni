import { expect } from "chai";
import { PaymentPackage } from "./PaymentPackage.js";

describe("Test Payment Package Class", function () {

    describe("create instance", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Aleksandar", 10);
        });

        it("name should be correct", () => {
            expect(paymentPackage._name).to.equal('Aleksandar');
        });

        it("value should be correct", () => {
            expect(paymentPackage._value).to.equal(10);
        });

        it("VAT should be correct", () => {
            paymentPackage._VAT = 20;
            expect(paymentPackage._VAT).to.equal(20);
        });

        it("active should be correct", () => {
            expect(paymentPackage._active).to.equal(true);
        })
    });

    describe("test Accessor", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Aleksandar", 10);
        })

        it("instance correct get and set name", () => {
            expect(paymentPackage._name).to.equal('Aleksandar');
            paymentPackage.name = "toshko"
            expect(paymentPackage._name).to.equal('toshko');
        })

        it("instance correct get and set value", () => {
            expect(paymentPackage._value).to.equal(10);
            paymentPackage.value = 20;
            expect(paymentPackage._value).to.equal(20);
            paymentPackage.value = 0;
            expect(paymentPackage._value).to.equal(0);
        })

        it("instance correct get and set VAT", () => {
            expect(paymentPackage._VAT).to.equal(20);
            paymentPackage.VAT = 0;
            expect(paymentPackage._VAT).to.equal(0);
            paymentPackage.VAT = 50;
            expect(paymentPackage._VAT).to.equal(50);
        })

        it("instance correct get and set active", () => {
            expect(paymentPackage._active).to.equal(true);
            paymentPackage.active = false
            expect(paymentPackage._active).to.equal(false);
        })
    });

    describe("test set incorrect value", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Aleksandar", 10);
        })

        it('throws an error if name or value are incorrect', () => {
            expect(() => new PaymentPackage("", 10)).to.throw();
            expect(() => new PaymentPackage("Aleksandar", "10")).to.throw();
        });

        it('throws an error if VAT is incorrect', () => {
            expect(() => paymentPackage.VAT = -1).to.throw();
            expect(() => paymentPackage.VAT = "").to.throw();
        });

        it('throws an error if active is incorrect', () => {
            expect(() => paymentPackage.active = -1).to.throw();
            expect(() => paymentPackage.active = "").to.throw();
            expect(() => paymentPackage.active = "sth").to.throw();
        });
    });

    describe("toString", () => {
        let paymentPackage;
        beforeEach(() => {
            paymentPackage = new PaymentPackage("Aleksandar", 10);
        });

        it("test active property with active state", () => {
            let result = ["Package: Aleksandar",
                "- Value (excl. VAT): 10",
                "- Value (VAT 20%): 12"].join("\n");

            expect(paymentPackage.toString()).to.equal(result);
        })

        it("test active property with inactive state", () => {
            paymentPackage.active = false;
            let result = ["Package: Aleksandar (inactive)",
                "- Value (excl. VAT): 10",
                "- Value (VAT 20%): 12"].join("\n")

            expect(paymentPackage.toString()).to.equal(result);
        })
    });
});