class Student {

    private fullname: string;
    email: string;
    phone: string | number;
    age: number;

    constructor(fullname: string, email:string, phone:string | number, age: number ) {
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.age = age;    
    }

    Studys() {
        console.log(`${this.fullname} Study`)
    }

    Gos() {
        console.log(`${this.fullname} Go`)
    }

    Speak() {
        console.log(`${this.fullname} Speak`)
    }

    printInfo() {
        console.log(`Fullname: ${this.fullname}`)
        console.log(`Fullname: ${this.email}`)
        console.log(`Fullname: ${this.age}`)
        console.log(`Fullname: ${this.phone}`)
    }

}


let sinhviens: Array<Student> = [];

sinhviens.push(new Student("Quyet", "quyettv.it@gmail.com", "09235645655", 19));
sinhviens.push(new Student("Sang", "sang.it@gmail.com", "09256645655", 19));
sinhviens.push(new Student("Long", "long.it@gmail.com", "09555645655", 20));
sinhviens.push(new Student("Phuong", "phuong.it@gmail.com", "0545235645655", 16));

let sv: Student | undefined = sinhviens.pop()

if (sv instanceof Student) {
    sv.printInfo();
    
}





