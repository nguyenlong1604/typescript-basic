"use strict";
function tinhLoiNhuan(doanhSoBanHang, chiPhi) {
    const loiNhuan = doanhSoBanHang - chiPhi;
    return loiNhuan;
}
// Sử dụng hàm để tính lợi nhuận
const doanhSoBanHang = 10000; // Số tiền từ doanh số bán hàng
const chiPhi = 6000; // Số tiền từ chi phí
const loiNhuan = tinhLoiNhuan(doanhSoBanHang, chiPhi);
console.log(`Lợi nhuận là: ${loiNhuan}`);
function findMinMaxInArray(max, min, ...numbers) {
    let maxResult = max;
    let minResult = min;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > maxResult) {
            maxResult = numbers[i];
        }
        if (numbers[i] < minResult) {
            minResult = numbers[i];
        }
    }
    return { max: maxResult, min: minResult };
}
const { max, min } = findMinMaxInArray(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log("Giá trị lớn nhất:", max);
console.log("Giá trị nhỏ nhất:", min);
