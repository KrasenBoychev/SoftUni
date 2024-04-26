"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(type, capacity) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.capacity > this.clothes.length) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        for (let i = 0; i < this.clothes.length; i++) {
            const cloth = this.clothes[i];
            if (cloth.color == color) {
                this.clothes.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    getSmallestCloth() {
        const sortedBySize = this.clothes.sort((a, b) => a.size - b.size);
        return sortedBySize[0];
    }
    getCloth(color) {
        const cloth = this.clothes.find((x) => x.color == color);
        return cloth;
    }
    getClothCount() {
        return this.clothes.length;
    }
    report() {
        let result = [];
        result.push(`${this.type} magazine contains:`);
        const sortedBySize = this.clothes.sort((a, b) => a.size - b.size);
        for (const cloth of sortedBySize) {
            result.push(cloth);
        }
        return result.join('\n');
    }
}
exports.Magazine = Magazine;
