function fetchDataFromAPIs(apiUrls) {
    // Создаем массив для хранения Promise-объектов
    const promises = [];
    
    // Проходим по каждому URL-адресу API
    apiUrls.forEach(url => {
        // Создаем новый Promise для каждого URL-адреса API
        const promise = new Promise((resolve, reject) => {
            // Имитируем запрос к API с помощью setTimeout
            setTimeout(() => {
                // Здесь вы можете сделать реальный запрос к API, используя fetch или другой метод
                // В данном примере просто возвращаем фиктивные данные
                resolve(`Данные с ${url}`);
            }, Math.random() * 2000); // Случайная задержка от 0 до 2 секунд для имитации запроса
        });
        // Добавляем Promise в массив
        promises.push(promise);
    });
    
    // Возвращаем Promise, который ждет завершения всех запросов к API
    return Promise.all(promises);
}

// Пример использования функции
const apiUrls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
fetchDataFromAPIs(apiUrls)
    .then(results => {
        console.log("Результаты запросов:", results);
    })
    .catch(error => {
        console.error("Ошибка:", error);
    });
