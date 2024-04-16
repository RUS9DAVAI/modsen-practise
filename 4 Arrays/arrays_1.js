function increaseByTenPercent(numbers) {
    // Создаем новый массив для результата
    const result = [];

    // Проходимся по каждому числу в массиве
    for (let number of numbers) {
        // Увеличиваем число на 10 процентов и добавляем в новый массив
        result.push(number * 1.1);
    }

    return result;
}

// Пример использования:
const numbers = [10, 20, 30];
const increasedNumbers = increaseByTenPercent(numbers);
console.log(increasedNumbers); // Выведет [11, 22, 33]
