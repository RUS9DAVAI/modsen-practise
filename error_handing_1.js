function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Введенное значение не является целым числом");
    }
}

// Пример использования:
try {
    checkInteger(5); // Это целое число, так что никакой ошибки не будет
    checkInteger(3.14); // Это не целое число, поэтому будет выброшена ошибка
} catch (error) {
    console.error(error.message);
}
