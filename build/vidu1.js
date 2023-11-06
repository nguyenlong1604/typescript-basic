"use strict";
let sum = (...arrays) => {
    let totalSum = 0;
    for (let i = 0; i < arrays.length; i++) {
        totalSum += arrays[i];
    }
    return totalSum;
};
let sumOfNumber = sum(1, 2, 3, 4);
console.log(sumOfNumber);
