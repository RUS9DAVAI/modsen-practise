function sequentialAsyncOperations(operations) {
    // Создаем Promise-цепочку, начиная с Promise.resolve(), чтобы начать выполнение
    let sequence = Promise.resolve();

    // Проходимся по каждой операции в массиве
    operations.forEach(operation => {
        // Добавляем текущую операцию к цепочке
        sequence = sequence.then(() => {
            // Возвращаем новый Promise для текущей операции
            return new Promise((resolve, reject) => {
                // Выполняем асинхронную операцию
                operation()
                    .then(result => {
                        // Если операция выполнена успешно, вызываем resolve
                        resolve(result);
                    })
                    .catch(error => {
                        // Если произошла ошибка, вызываем reject
                        reject(error);
                    });
            });
        });
    });

    // Возвращаем Promise-цепочку
    return sequence;
}

// Пример использования:
function asyncOperation1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Async operation 1");
            resolve();
        }, 1000);
    });
}

function asyncOperation2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Async operation 2");
            resolve();
        }, 1500);
    });
}

function asyncOperation3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Async operation 3");
            resolve();
        }, 2000);
    });
}

// Выполнение операций последовательно
sequentialAsyncOperations([asyncOperation1, asyncOperation2, asyncOperation3])
    .then(() => {
        console.log("All operations completed");
    })
    .catch(error => {
        console.error("Error:", error);
    });
