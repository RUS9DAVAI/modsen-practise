function bubbleSort(arr) {
    const length = arr.length;
    
    // Внешний цикл для проходов по массиву
    for (let i = 0; i < length - 1; i++) {
        // Внутренний цикл для сравнения элементов и перестановки
        for (let j = 0; j < length - 1 - i; j++) {
            // Сравниваем соседние элементы и переставляем их, если нужно
            if (arr[j] > arr[j + 1]) {
                // Переставляем элементы
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Пример использования:
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log(bubbleSort(array)); // Выведет отсортированный массив
