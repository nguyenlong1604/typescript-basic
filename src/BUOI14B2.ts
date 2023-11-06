
const products: { name: string, price: number, quantity: number }[] = [
    { name: 'Sản phẩm A', price: 10, quantity: 20 },
    { name: 'Sản phẩm B', price: 15, quantity: 10 },
    { name: 'Sản phẩm C', price: 5, quantity: 30 },
];


let totalValue = 0;
for (let i = 0; i < products.length; i++) {
    totalValue += products[i].price
    
}

console.log(`Tổng giá trị của tất cả sản phẩm: $${totalValue}`);


