function fetchURLs(urls) {
    // Создаем массив промисов для каждого URL
    const promises = urls.map(url => {
      // Возвращаем новый Promise для загрузки содержимого URL
      return new Promise((resolve, reject) => {
        // Используем XMLHttpRequest для загрузки содержимого URL
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
          if (xhr.status === 200) {
            // Если запрос успешный, вызываем resolve с полученным содержимым
            resolve(xhr.responseText);
          } else {
            // Если возникла ошибка, вызываем reject с текстом ошибки
            reject(new Error(`Ошибка при загрузке ${url}: ${xhr.statusText}`));
          }
        };
        xhr.onerror = function() {
          // Если возникла ошибка, вызываем reject с текстом ошибки
          reject(new Error(`Ошибка сети при загрузке ${url}`));
        };
        // Отправляем запрос
        xhr.send();
      });
    });
  
    // Возвращаем Promise.all, чтобы дождаться загрузки всех URL
    return Promise.all(promises);
  }
  
  // Пример использования
  const urls = ["https://example.com/url1", "https://example.com/url2"];
  fetchURLs(urls)
    .then(contents => {
      // contents содержит массив содержимого для каждого URL
      console.log(contents);
    })
    .catch(error => {
      // Выводим сообщение об ошибке, если что-то пошло не так
      console.error(error);
    });
  