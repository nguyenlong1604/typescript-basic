const products1: { name: string, price: number, quantity: number }[] = [
    { name: 'Sản phẩm A', price: 10, quantity: 20 },
    { name: 'Sản phẩm B', price: 15, quantity: 10 },
    { name: 'Sản phẩm C', price: 5, quantity: 30 },
];

let copiedproducts1 = [...products1];

const newProduct = { name: 'Sản phẩm D', price: 12, quantity: 25 };

copiedproducts1.push(newProduct);

console.log('Danh sách sản phẩm ban đầu:');
console.log(products1);

console.log('Danh sách sản phẩm sau khi thêm sản phẩm mới:');
console.log(copiedproducts1);