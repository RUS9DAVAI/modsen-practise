function sumOfFirstHalf(arr) {
    const length = arr.length;
    
    // Определяем количество элементов в первой половине массива
    const halfLength = Math.ceil(length / 2);

    // Суммируем элементы первой половины массива
    const sum = arr.slice(0, halfLength).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum;
}

// Пример использования:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumOfFirstHalf(array)); // Выведет сумму первой половины элементов массива: 1 + 2 + 3 + 4 + 5 = 15
