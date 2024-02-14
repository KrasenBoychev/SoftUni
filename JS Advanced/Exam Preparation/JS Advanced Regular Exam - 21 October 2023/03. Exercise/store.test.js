import { expect } from "chai";
import { onlineStore } from "./onlineStore.js";

describe("Tests Suite", function() {
    describe("isProductAvailable(product, stockQuantity)", function() {

        it("returns a message if stockQuantity is less than 0", function() {
            expect(onlineStore.isProductAvailable("toy", -1)).to.equal(`Sorry, toy is currently out of stock.`);
        });

        it("returns a message if stockQuantity is 0", function() {
            expect(onlineStore.isProductAvailable("toy", 0)).to.equal(`Sorry, toy is currently out of stock.`);
        });

        it("returns a message if stockQuantity is 1", function() {
            expect(onlineStore.isProductAvailable("toy", 1)).to.equal(`Great! toy is available for purchase.`);
        });

        it("throws an error if product is a number", function() {
            expect(() => onlineStore.isProductAvailable(1, 1)).to.throw(`Invalid input.`);
        });

        it("throws an error if stockQuantity is a string", function() {
            expect(() => onlineStore.isProductAvailable("toy", "1")).to.throw(`Invalid input.`);
        });
     });

     describe("canAffordProduct(productPrice, accountBalance)", function() {

        it("returns a message if the result is less than 0", function() {
           expect(onlineStore.canAffordProduct(10, 5)).to.equal(`You don't have sufficient funds to buy this product.`);
        });

        it("returns a message if the result is 0", function() {
            expect(onlineStore.canAffordProduct(10, 10)).to.equal(`Product purchased. Your remaining balance is $0.`);
         });

         it("returns a message if the result is greater than 0", function() {
            expect(onlineStore.canAffordProduct(5, 10)).to.equal(`Product purchased. Your remaining balance is $5.`);
         });

         it("throws an error if the productPrice is a string", function() {
            expect(() => onlineStore.canAffordProduct("5", 10)).to.throw(`Invalid input.`);
         });

         it("throws an error if the accountBalance is a string", function() {
            expect(() => onlineStore.canAffordProduct(5, "10")).to.throw(`Invalid input.`);
         });
     });

     describe("getRecommendedProducts(productList, category) function", function() {

        it("returns a message if product names match the specified category", function() {
           expect(onlineStore.getRecommendedProducts([
            { name: "Camera", category: "Photography" }, 
           { name: "Phone", category: "Photography" }, 
           { name: "Laptop", category: "Record" }], "Photography")).to.equal(`Recommended products in the Photography category: Camera, Phone`)
        });

        it("returns a message if product names does not match the specified category", function() {
            expect(onlineStore.getRecommendedProducts([
             { name: "Camera", category: "Photography" }, 
            { name: "Phone", category: "Photography" }, 
            { name: "Laptop", category: "Record" }], "Jump")).to.equal(`Sorry, we currently have no recommended products in the Jump category.`)
         });

         it("throws and error if productList is a number", function() {
            expect(() => onlineStore.getRecommendedProducts(1, "Photography")).to.throw(`Invalid input.`);
         });

         it("throws and error if category is a number", function() {
            expect(() => onlineStore.getRecommendedProducts([], 1)).to.throw(`Invalid input.`);
         });
     });
});