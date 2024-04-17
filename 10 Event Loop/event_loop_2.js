async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const signal = controller.signal;
  
    // Устанавливаем таймер для отмены запроса
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, timeout);
  
    try {
      const response = await fetch(url, { signal });
      clearTimeout(timeoutId); // Отменяем таймер, если запрос завершен до истечения таймаута
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      if (error.name === "AbortError") {
        console.error("Request aborted:", error);
      } else {
        console.error("Error fetching data:", error);
      }
    }
  }
  
  // Пример использования
  const apiUrl = "https://api.example.com/data";
  const timeoutDuration = 5000; // Таймаут в миллисекундах (5 секунд)
  
  fetchDataWithTimeout(apiUrl, timeoutDuration)
    .then(data => {
      console.log("Data from API:", data);
    })
    .catch(error => {
      console.error("Failed to fetch data:", error);
    });
  