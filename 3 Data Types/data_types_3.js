function sumFirstAndLastDigit(number) {
    // Преобразуем число в строку для удобства работы с ним
    const numStr = number.toString();

    // Получаем первую цифру числа
    const firstDigit = parseInt(numStr.charAt(0));

    // Получаем последнюю цифру числа
    const lastDigit = parseInt(numStr.charAt(numStr.length - 1));

    // Вычисляем сумму первой и последней цифры
    const sum = firstDigit + lastDigit;

    // Выводим результат в консоль
    console.log(`Сумма первой и последней цифры числа ${number} равна ${sum}`);
}

// Пример использования функции
sumFirstAndLastDigit(12345); // Сумма первой и последней цифры числа 12345 равна 6
sumFirstAndLastDigit(987);   // Сумма первой и последней цифры числа 987 равна 16
