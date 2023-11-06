"use strict";
class Animals {
    run() {
        console.log(`di bang 4 chan`);
    }
}
class Dog extends Animals {
    constructor() {
        super();
        this.run();
    }
}
class Cat extends Animals {
    constructor() {
        super();
        this.run();
    }
}
let Mic = new Dog;
let Meo = new Cat;
