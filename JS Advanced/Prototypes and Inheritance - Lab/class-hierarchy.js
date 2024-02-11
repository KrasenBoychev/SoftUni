function classHierarchy() {

    class Figure {
        constructor() {
            this.units = "cm";
        }

        get area() {

        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${units}`;
        }
    }


    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
            this.orrRadius = radius;
        }

        get area() {
            this.radius = this.orrRadius;

            switch (this.units) {
                case "m": this.radius = this.radius / 100;
                    break;
                case "mm": this.radius = this.radius * 10;
                    break;
            }
            let calc = Math.PI * this.radius * this.radius;
            return calc;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`;
        }
    }


    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.units = units;
            this.width = width;
            this.orrWidth = width;
            this.height = height;
            this.orrHeight = height;
        }

        get area() {
            this.width = this.orrWidth;
            this.height = this.orrHeight;

            switch (this.units) {
                case "m": this.width = this.width / 100;
                    this.height = this.height / 100;
                    break;
                case "mm": this.width = this.width * 10;
                    this.height = this.height * 10;
                    break;
            }
            let calc = this.width * this.height;
            return calc;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }

    }



    // let c = new Circle(5);
    // console.log(c.area); // 78.53981633974483
    // console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    // let r = new Rectangle(3, 4, 'mm');
    // console.log(r.area); // 1200 
    // console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    // r.changeUnits('cm');
    // console.log(r.area); // 12
    // console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    // c.changeUnits('mm');
    // console.log(c.area); // 7853.981633974483
    // console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50

    return {
        Figure,
        Circle,
        Rectangle
    }
}

classHierarchy();



