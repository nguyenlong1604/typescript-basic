"use strict";
/*
abstract class Shape {
    abstract getArea(): number;
    
    print(): void {
        console.log(`hello`);
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    print() {
        console.log("This is a circle");
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    print() {
        console.log("This is a rectangle");
    }
}

class tinhTamGiac extends Shape {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        super();
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getArea(): number {
        let p: number = (this.a + this.b + this.c) / 2;
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
    }

    print() {
        console.log("This is a triangle");
    }
}

const circle = new Circle(5);
const rectangle = new Rectangle(4, 6);
const tinhTamGiac1 = new tinhTamGiac(3, 4, 5);

console.log("Circle Area:", circle.getArea());
circle.print();

console.log("Rectangle Area:", rectangle.getArea());
rectangle.print();

console.log("Triangle Area:", tinhTamGiac1.getArea());
tinhTamGiac1.print();
*/
/*
namespace Transportation {
    export interface Runable {
        run(): string
    }

    abstract class Vehicle{
        protected abstract drive(): string;
    }

    export interface Stop {
        stop(): string
    }

    export class Bike extends Vehicle implements Stop, Runable {
        run(): string {
            return "Run by Bike"
        }

        public drive(): string {
            return "Drive by Bike"
        }

        stop(): string{
            return "Dung lai Bike"
        }

    }

    export class Car extends Vehicle implements Stop, Runable {
        run(): string {
            return "Run by Car"
        }

        public drive(): string {
            return "Drive by Car"
        }

        stop(): string{
            return "Dung lai Car"
        }

    }

}

const bike: Transportation.Bike = new Transportation.Bike;
const car: Transportation.Car = new Transportation.Car;

console.log(bike.run())
console.log(car.run())
console.log(bike.drive())
console.log(car.drive())
console.log(bike.stop())
console.log(car.stop())
*/
class Animal {
    makeSound() {
        console.log(`ABC`);
    }
}
class Cat1 extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    makeSound() {
        super.makeSound();
        console.log(`Meow`);
    }
}
const myCat = new Cat1('long');
myCat.makeSound();
