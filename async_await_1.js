async function fetchData() {
    try {
        // Используем fetch для выполнения запроса к удаленному серверу
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        // Проверяем, был ли получен успешный ответ (код 200)
        if (!response.ok) {
            throw new Error('Ошибка загрузки данных');
        }
        
        // Используем метод json() для извлечения и преобразования полученных данных в JSON
        const data = await response.json();
        
        // Возвращаем полученные данные
        return data;
    } catch (error) {
        // Если возникла ошибка во время загрузки данных, обрабатываем её здесь
        console.error('Ошибка:', error.message);
        throw error; // Пробрасываем ошибку выше, чтобы вызывающий код мог её обработать
    }
}

// Пример использования:
async function getData() {
    try {
        const result = await fetchData();
        console.log('Полученные данные:', result);
    } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
    }
}

// Вызываем функцию getData для получения данных
getData();
