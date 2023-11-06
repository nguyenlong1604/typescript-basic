console.log(`hello world`)


type Contact = { name: string; contact: string | number }[];
const contacts: Contact = [];

function addContact(name: string, contact: string | number) {
  contacts.push({ name, contact });
}

addContact("Alice", "alice@example.com");
addContact("Bob", 123456789);

console.log(contacts);



type TinhTong = {number: string | number};

function TinhTong(number: string | number) {
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


