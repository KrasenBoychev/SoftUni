import { expect } from "chai";
import { StringBuilder } from "./string-builder.js";

describe("Test Class String Builder", () => {
    let stringBuidler = '';
    beforeEach(() => {
        stringBuidler = new StringBuilder("hello");
    });

    it("Can be instantiated with a passed in string argument or without anything", function() {
        expect(stringBuidler.toString()).to.equal('hello');
        stringBuidler = new StringBuilder("");
        expect(stringBuidler.toString()).to.equal('');
        stringBuidler = new StringBuilder();
        expect(stringBuidler.toString()).to.equal('');
    });
    
    it ("append(string) converts the passed in string argument to an array and adds it to the end of the storage", function () {
        stringBuidler.append(', there');
        expect(stringBuidler.toString()).to.equal('hello, there');
    });

    it ("prepend(string) converts the passed in string argument to an array and adds it to the beginning of the storage", function () {
        stringBuidler.prepend('User, ');
        expect(stringBuidler.toString()).to.equal('User, hello');
    });

    it (" insertAt converts the passed in string argument to an array and adds it at the given index", function () {
        stringBuidler.insertAt('woop', 4);
        expect(stringBuidler.toString()).to.equal('hellwoopo');
        stringBuidler.insertAt('woop', 0);
        expect(stringBuidler.toString()).to.equal('woophellwoopo');
        stringBuidler.insertAt('woop', 1);
        expect(stringBuidler.toString()).to.equal('wwoopoophellwoopo');
        stringBuidler.insertAt('woop', 5);
        expect(stringBuidler.toString()).to.equal('wwoopwoopoophellwoopo');
    });

    it (" remove -  removes elements from the storage, starting at the given index", function () {
        stringBuidler.remove(0, 0);
        expect(stringBuidler.toString()).to.equal('hello');
        stringBuidler.remove(1, 0);
        expect(stringBuidler.toString()).to.equal('hello');
        stringBuidler.remove(0, 1);
        expect(stringBuidler.toString()).to.equal('ello');
    });

        it (" remove -  removes elements from the storage, starting at the given index", function () {
        stringBuidler.remove(1, 1);
        expect(stringBuidler.toString()).to.equal('hllo');
    });

        it (" remove -  removes elements from the storage, starting at the given index", function () {
        stringBuidler.remove(0, 2);
        expect(stringBuidler.toString()).to.equal('llo');
    });

        it (" remove -  removes elements from the storage, starting at the given index", function () {
        stringBuidler.remove(0, 5);
        expect(stringBuidler.toString()).to.equal('');
    });

        it (" remove -  removes elements from the storage, starting at the given index", function () {
        stringBuidler.remove(4, 1);
        expect(stringBuidler.toString()).to.equal('hell');
    });

        it (" remove -  removes elements from the storage, starting at the given index", function () {
        stringBuidler.remove(2, 2);
        expect(stringBuidler.toString()).to.equal('heo');
    });

    it ("All passed in arguments should be strings. If any of them are not, throws a type error", function () {
        expect(() => new StringBuilder(2)).to.throw(`Argument must be a string`);
        expect(() => new StringBuilder([])).to.throw(`Argument must be a string`);
        expect(() => new StringBuilder({})).to.throw(`Argument must be a string`);
        expect(() =>  stringBuidler.append(1)).to.throw(`Argument must be a string`);
        expect(() =>  stringBuidler.prepend(1)).to.throw(`Argument must be a string`);
        expect(() =>  stringBuidler.insertAt(1, 1)).to.throw(`Argument must be a string`);
    });
});