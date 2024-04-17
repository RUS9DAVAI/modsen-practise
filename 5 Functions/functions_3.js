function firstNonRepeatingCharacter(str) {
    // Создаем объект для подсчета количества вхождений каждого символа
    const charCount = {};

    // Проходимся по каждому символу строки и увеличиваем его счетчик в объекте charCount
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Проходимся по каждому символу строки еще раз и находим первый символ с счетчиком 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // Если все символы повторяются, возвращаем null
    return null;
}

// Пример использования функции
const str = "hello world";
console.log(firstNonRepeatingCharacter(str)); // Выводит "h"
