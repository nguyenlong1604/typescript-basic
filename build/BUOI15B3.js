"use strict";
/*
interface Shape {
    area(): number;
    perimeter(): number;
}

// Lớp Circle thực hiện interface Shape
class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

// Lớp Rectangle thực hiện interface Shape
class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

// Sử dụng lớp Circle
const circle = new Circle(5);
console.log("Diện tích hình tròn:", circle.area());
console.log("Chu vi hình tròn:", circle.perimeter());

// Sử dụng lớp Rectangle
const rectangle = new Rectangle(4, 6);
console.log("Diện tích hình chữ nhật:", rectangle.area());
console.log("Chu vi hình chữ nhật:", rectangle.perimeter());

*/
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    perimeter() {
        return 2 * (this.width + this.height);
    }
}
const circle = new Circle(5);
console.log("Diện tích hình tròn:", circle.area());
console.log("Chu vi hình tròn:", circle.perimeter());
const rectangle = new Rectangle(4, 6);
console.log("Diện tích hình chữ nhật:", rectangle.area());
console.log("Chu vi hình chữ nhật:", rectangle.perimeter());
