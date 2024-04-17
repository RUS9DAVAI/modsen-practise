function getProperty(obj, propertyName) {
    try {
      return obj[propertyName];
    } catch (error) {
      if (error instanceof TypeError) {
        console.error("Ошибка TypeError: свойство не определено");
      } else {
        throw error; // Перебрасываем ошибку, если это не TypeError
      }
    }
  }
  
  // Пример использования
  const obj = { name: "John" };
  console.log(getProperty(obj, "name")); // Выведет "John"
  console.log(getProperty(obj, "age")); // Выведет сообщение об ошибке TypeError
  