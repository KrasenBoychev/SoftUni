function createComputerHierarchy() {
    class Keyboard {
        constructor(manufacturer, responseTime) {
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        }
    }

    class Monitor {
        constructor(manufacturer, width, height) {
            this.manufacturer = manufacturer;
            this.width = width;
            this.height = height;
        }
    }

    class Battery {
        constructor(manufacturer, expectedLife) {
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        }
    }

    class Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (this.constructor == Computer) {
                throw new TypeError;
            }

            this.manufacturer = manufacturer;
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery;
            this._battery = this.battery;
        }

        get battery() {
            return this._battery;
        }

        set battery(battery) {
            if (battery instanceof Battery) {
                this._battery = battery;
            } else {
                throw new TypeError(``);
            } 
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
            this._keyboard = this.keyboard;
            this._monitor = this.monitor;
        }

        get keyboard() {
            return this._keyboard;
        }

        set keyboard(keyboard) {
            if (keyboard instanceof Keyboard) {
                this._keyboard = keyboard;
            } else {
                throw new TypeError(``);
            } 
        }

        get monitor() {
            return this._monitor;
        }

        set monitor(monitor) {
            if (monitor instanceof Monitor) {
                this._monitor = monitor;
            } else {
                throw new TypeError(``);
            } 
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}

let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;


let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);

// let keyboard = new Keyboard('Logitech',70);
// let monitor = new Monitor('Benq',28,18);
// let desktop = new Desktop("JAR Computers",3.3,8,1,keyboard,monitor);

// console.log(desktop.manufacturer);
// console.log(desktop.processorSpeed);
// console.log(desktop.ram);
// console.log(desktop.hardDiskSpace);
// console.log(desktop.keyboard);
// console.log(desktop.monitor);

// expect(desktop.manufacturer).to.equal("JAR Computers",'Expected manufacturer did not match.');
// expect(desktop.processorSpeed).to.be.closeTo(3.3,0.01,'Expected processor speed did not match.');
// expect(desktop.ram).to.equal(8,'Expected RAM did not match.');
// expect(desktop.hardDiskSpace).to.equal(1,'Expected hard disk space did not match.');
// expect(desktop.keyboard).to.equal(keyboard,'Expected keyboard did not match.');
// expect(desktop.monitor).to.equal(monitor,'Expected monitor did not match.');