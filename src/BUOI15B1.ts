/*
//b1
class Person {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age
    }

    introduce(): void {
        console.log(`hello, tôi là ${this.name} và tôi ${this.age} tuổi.`)
    }
}


let person1 = new Person("Long", 20);
let person2 = new Person("Long1", 201);
person1.introduce();
person2.introduce();


//b2

class Students extends Person {
    studentID: number;

    constructor(name: string, age: number, studentID: number){
        super(name, age);
        this.studentID = studentID;
        
    }
    study(): void{
        console.log(`TÔi là ${this.name} với mã số sinh viên ${this.studentID}`)
    }
}

let student1 = new Students("AAAAAAA", 22, 12345);
student1.introduce();
student1.study(); 
*/

class Person {

    name: string;
    age: string;
    constructor(name: string, age: string) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `toi ten la ${this.name} va toi ${this.age} tuoi`
    }
}

const PS1 = new Person(`long`, `28`);
console.log(PS1.introduce())

class Students extends Person {
    studentID: number;

    constructor(name: string, age: string, studentID: number) {
        super(name, age)
        this.studentID = studentID;
    }

    study() {
        return `Toi ten la ${this.name} nam nay toi ${this.age} va toi co ma sinh vien la ${this.studentID}`
    }
}

const student1 = new Students(`long`, `18`, 1);
student1.study();