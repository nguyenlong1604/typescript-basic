"use strict";
//b1
function tinhTong(...soNguyen) {
    let sum = 0;
    for (let i = 0; i < soNguyen.length; i++) {
        sum += soNguyen[i];
    }
    return sum;
}
let soNguyen = tinhTong(1, 2, 3, 4, 5);
console.log(`Tổng các số là: ${soNguyen}`);
//b2
function danhSachMonHoc(...monHoc) {
    for (let i = 0; i < monHoc.length; i++) {
        console.log(`${monHoc[i]}`);
    }
}
danhSachMonHoc('Toán', 'Vật lý', 'Hóa học');
