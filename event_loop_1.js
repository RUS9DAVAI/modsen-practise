function delayExecution(callback) {
    setTimeout(callback, 2000); // Задержка в 2000 миллисекунд (2 секунды)
}

// Пример использования:
function myCallback() {
    console.log("Функция была вызвана после задержки в 2 секунды");
}

delayExecution(myCallback);
