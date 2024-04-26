import { Cloth } from "./Cloth";

export class Magazine {
    private type: string;
    private capacity: number;
    private clothes: Cloth[];

    constructor(type: string, capacity: number) {
        this.type = type;
        this.capacity = capacity;
        this.clothes = [];
    }

    addCloth(cloth: Cloth): void {
        if (this.capacity > this.clothes.length) {
            this.clothes.push(cloth);
        }
    }

    removeCloth(color: string): boolean {
        for (let i = 0; i < this.clothes.length; i++) {
            const cloth = this.clothes[i];

            if (cloth.color == color) {
                this.clothes.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    getSmallestCloth(): Cloth {
        const sortedBySize = this.clothes.sort((a, b) => a.size - b.size);
        return sortedBySize[0];
    }

    getCloth(color: string): Cloth {
        const cloth = this.clothes.find((x) => x.color == color);
        return cloth;
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        let result: Array<string | Cloth> = [];
        result.push(`${this.type} magazine contains:`);

        const sortedBySize = this.clothes.sort((a, b) => a.size - b.size);
        for (const cloth of sortedBySize) {
            result.push(cloth);
        }

        return result.join('\n');
    }
}