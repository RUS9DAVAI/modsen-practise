"use strict";

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Пример использования:
console.log(factorial(5)); // Выведет 120
