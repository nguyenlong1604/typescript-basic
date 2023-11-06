"use strict";
console.log(`hello world`);
const contacts = [];
function addContact(name, contact) {
    contacts.push({ name, contact });
}
addContact("Alice", "alice@example.com");
addContact("Bob", 123456789);
console.log(contacts);
function TinhTong(number) {
    const numStr = typeof number === 'number' ? number.toString() : number;
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    return sum;
}
console.log(TinhTong(123456789));
/*
// Định nghĩa một mảng sản phẩm với các phần tử là các đối tượng có tên, giá và số lượng tồn kho.
const products: { name: string, price: number, quantity: number }[] = [
    { name: 'Sản phẩm A', price: 10, quantity: 20 },
    { name: 'Sản phẩm B', price: 15, quantity: 10 },
    { name: 'Sản phẩm C', price: 5, quantity: 30 },
];

// Tính tổng giá trị của tất cả sản phẩm trong danh sách
const totalValue = products.reduce((total, product) => total + (product.price * product.quantity), 0);

console.log(`Tổng giá trị của tất cả sản phẩm: $${totalValue}`);
*/
