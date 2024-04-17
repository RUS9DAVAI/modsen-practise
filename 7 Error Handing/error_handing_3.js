function divideNumbers(a, b) {
    if (b === 0) {
        throw new Error("Деление на ноль недопустимо");
    }
    return a / b;
}

// Примеры использования функции
try {
    console.log(divideNumbers(10, 2)); // Выводит 5
    console.log(divideNumbers(10, 0)); // Генерирует ошибку "Деление на ноль недопустимо"
} catch (error) {
    console.error(error.message);
}
