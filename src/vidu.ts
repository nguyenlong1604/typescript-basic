function displayValue(value: number | string): void {
    console.log(value);
}

displayValue(45);
displayValue("hello");


//let numbers: number[] = [1, 2, 3];

let numbers: Array<number> = [1, 2, 3]

numbers.push(4);

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}


