function generateRandomNumber() {
    return new Promise((resolve, reject) => {
        // Генерируем случайное число от 1 до 10
        const randomNumber = Math.floor(Math.random() * 10) + 1;
        
        // Задержка функции setTimeout в секундах, равная сгенерированному числу
        const delayInSeconds = randomNumber;
        
        // Выводим сообщение о задержке
        console.log(`Генерируем случайное число ${randomNumber} с задержкой в ${delayInSeconds} секунд...`);
        
        // Используем функцию setTimeout для задержки выполнения промиса
        setTimeout(() => {
            // Если сгенерировано число от 1 до 5, промис выполняется успешно
            if (randomNumber <= 5) {
                resolve(randomNumber);
            } else {
                // Если сгенерировано число от 6 до 10, промис завершается с ошибкой
                reject(new Error(`Сгенерировано число ${randomNumber} от 6 до 10`));
            }
        }, delayInSeconds * 1000); // Умножаем задержку на 1000, чтобы получить миллисекунды
    });
}

// Пример использования функции
generateRandomNumber()
    .then(randomNumber => {
        console.log(`Сгенерировано случайное число от 1 до 5: ${randomNumber}`);
    })
    .catch(error => {
        console.error("Ошибка:", error.message);
    });
