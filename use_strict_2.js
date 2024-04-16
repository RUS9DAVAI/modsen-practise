"use strict";

function containsValue(arr, value) {
    return arr.includes(value);
}

// Пример использования:
const array = [1, 2, 3, 4, 5];
console.log(containsValue(array, 3)); // Выведет true, так как значение 3 присутствует в массиве
console.log(containsValue(array, 6)); // Выведет false, так как значение 6 отсутствует в массиве
