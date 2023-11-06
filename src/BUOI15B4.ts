abstract class Vehicle  {
    make: string;
    model: string
    constructor(make: string, model: string) {
        this.make = make,
        this.model = model
    }
    abstract start(): void;

}

class Car extends Vehicle {
    constructor(make: string, model: string){
    super(make, model);
    }
    start() {
        console.log(`Car ${this.make} ${this.model} is starting the engine. `);
    }
}

class Bicycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model);
    }
  
    start() {
      console.log(`Bicycle ${this.make} ${this.model} is ready to pedal.`);
    }
  }


const myCar = new Car("Toyota", "Camry");
const myBicycle = new Bicycle("Giant", "Defy");

myCar.start(); 
myBicycle.start(); 
