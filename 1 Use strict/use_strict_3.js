"use strict";

function countVowels(str) {
    // Приведем строку к нижнему регистру, чтобы учесть как гласные, так и согласные буквы
    str = str.toLowerCase();
    
    // Определим гласные буквы
    const vowels = 'aeiou';
    
    // Счетчик гласных букв
    let count = 0;
    
    // Пройдемся по каждому символу строки
    for (let char of str) {
        // Если символ является гласной буквой, увеличим счетчик
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// Пример использования:
console.log(countVowels("Hello World")); // Вернет 3
