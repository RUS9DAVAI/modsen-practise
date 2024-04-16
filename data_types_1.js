function compareObjects(obj1, obj2) {
    // Проверяем количество свойств у обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    // Проверяем каждое свойство первого объекта
    for (let key of keys1) {
        // Если свойство отсутствует во втором объекте
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }
        // Если значения свойств не эквивалентны
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // Если все свойства первого объекта эквивалентны соответствующим свойствам второго объекта
    return true;
}

// Пример использования:
const obj1 = {a: 1, b: 2, c: 3};
const obj2 = {a: 1, b: 2, c: 3};
const obj3 = {a: 1, b: 2, c: 4};

console.log(compareObjects(obj1, obj2)); // Выведет true, так как obj1 и obj2 содержат эквивалентные значения свойств
console.log(compareObjects(obj1, obj3)); // Выведет false, так как obj1 и obj3 содержат разные значения свойств
