class Rectangle {
    constructor(width, height) {
      this.width = width;
      this.height = height;
    }
  
    // Метод для вычисления площади прямоугольника
    area() {
      return this.width * this.height;
    }
  
    // Метод для вычисления периметра прямоугольника
    perimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // Создаем экземпляр класса "Прямоугольник"
  const rectangle = new Rectangle(5, 10);
  
  // Вычисляем площадь и периметр
  const area = rectangle.area();
  const perimeter = rectangle.perimeter();
  
  console.log("Площадь прямоугольника:", area);
  console.log("Периметр прямоугольника:", perimeter);
  