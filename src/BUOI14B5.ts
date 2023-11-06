enum ShapeType {
    Circle,
    Square,
    Triangle,
  }
  
  type Circle1 = {
    type: ShapeType.Circle;
    radius: number;
  };
  
  type Square1 = {
    type: ShapeType.Square;
    sideLength: number;
  };
  
  type Triangle1 = {
    type: ShapeType.Triangle;
    base: number;
    height: number;
  };
  
  type Shape1 = Circle1 | Square1 | Triangle1;
  
  function getShapeDescription(shape: Shape1): string {
    switch (shape.type) {
      case ShapeType.Circle:
        return `Hình tròn có bán kính ${shape.radius}`;
      case ShapeType.Square:
        return `Hình vuông có cạnh dài ${shape.sideLength}`;
      case ShapeType.Triangle:
        return `Hình tam giác có cơ sở ${shape.base} và chiều cao ${shape.height}`;
      default:
        return "Không xác định kiểu hình học";
    }
  }
  
  const circlee: Circle1 = {
    type: ShapeType.Circle,
    radius: 5,
  };
  
  const square: Square1 = {
    type: ShapeType.Square,
    sideLength: 4,
  };
  
  const triangle: Triangle1 = {
    type: ShapeType.Triangle,
    base: 3,
    height: 6,
  };
  
  console.log(getShapeDescription(circlee));    // Output: Hình tròn có bán kính 5
  console.log(getShapeDescription(square));    // Output: Hình vuông có cạnh dài 4
  console.log(getShapeDescription(triangle));  // Output: Hình tam giác có cơ sở 3 và chiều cao 6
  

/*
enum Geometry {
    HinhTron,
    HinhVuong,
    HinhTamGiac,
}

const hinhHoc: Geometry = Geometry.HinhTron;
console.log(`Hình này là hình: ${Geometry[hinhHoc]}`);
*/

enum BookStatus {
    ConHang,
    HetHang,
    DatHang, 
}

type Book = {
    title: string;
    author: string;
    status: BookStatus;
}

const bookInventory: Book[] = [];

function addBook(title: string, author:string, status: BookStatus) {
    const book: Book = {title, author, status};
    bookInventory.push(book);
}

function getBookStatus(book: Book): string {
    switch (book.status) {
      case BookStatus.ConHang:
        return "Còn hàng";
      case BookStatus.HetHang:
        return "Hết hàng";
      case BookStatus.DatHang:
        return "Đặt hàng";
      default:
        return "Trạng thái không xác định";
    }
  }
  
  // Thêm và hiển thị trạng thái của sách
  addBook("Cuốn Sách 1", "Tác giả 1", BookStatus.ConHang);
  addBook("Cuốn Sách 2", "Tác giả 2", BookStatus.HetHang);
  addBook("Cuốn Sách 3", "Tác giả 3", BookStatus.DatHang);
  
  bookInventory.forEach((book, index) => {
    console.log(`Sách ${index + 1}: ${book.title} của tác giả ${book.author} - Trạng thái: ${getBookStatus(book)}`);
  });