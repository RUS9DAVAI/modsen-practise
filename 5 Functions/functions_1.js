function repeatOperation(operation, interval, repetitions) {
    let counter = 0;

    // Запускаем интервал
    const intervalId = setInterval(() => {
        // Выполняем заданную операцию
        operation();

        // Увеличиваем счетчик
        counter++;

        // Проверяем, достигнут ли лимит повторений
        if (counter === repetitions) {
            // Останавливаем интервал
            clearInterval(intervalId);
        }
    }, interval);
}

// Пример использования:
function myOperation() {
    console.log("Выполнена операция");
}

// Выполнить операцию myOperation() 5 раз через интервал в 1 секунду
repeatOperation(myOperation, 1000, 5);
