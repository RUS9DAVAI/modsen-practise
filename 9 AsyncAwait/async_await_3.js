// Пример асинхронной функции, которая загружает данные с удаленного сервера по указанному URL-адресу
async function fetchDataFromServer(url) {
    try {
        // Используем fetch для отправки GET-запроса к серверу и получения данных
        const response = await fetch(url);
        
        // Проверяем успешность запроса
        if (!response.ok) {
            throw new Error(`Ошибка загрузки данных с сервера: ${response.status} ${response.statusText}`);
        }
        
        // Извлекаем данные из тела ответа и возвращаем их
        return await response.json();
    } catch (error) {
        // Если произошла ошибка, выводим ее в консоль и пробрасываем ее дальше
        console.error(error);
        throw error;
    }
}

// Пример асинхронной функции, которая параллельно загружает данные с нескольких серверов
async function fetchDataFromMultipleServers(urls) {
    try {
        // Используем Promise.all для параллельной загрузки данных с нескольких серверов
        const responses = await Promise.all(urls.map(url => fetchDataFromServer(url)));
        
        // Возвращаем массив с данными, полученными с каждого сервера
        return responses;
    } catch (error) {
        // Если произошла ошибка, выводим ее в консоль и пробрасываем ее дальше
        console.error(error);
        throw error;
    }
}

// Пример использования функции
const serverUrls = ['https://api.example.com/data1', 'https://api.example.com/data2', 'https://api.example.com/data3'];
fetchDataFromMultipleServers(serverUrls)
    .then(data => {
        console.log("Данные с нескольких серверов:", data);
    })
    .catch(error => {
        console.error("Ошибка загрузки данных:", error);
    });
