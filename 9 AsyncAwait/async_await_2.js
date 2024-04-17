async function loadDataFromServer1() {
    return new Promise((resolve, reject) => {
      // Симулируем загрузку данных с сервера 1
      setTimeout(() => {
        const data = { id: 1, name: "Data from Server 1" };
        resolve(data);
      }, 1000); // Задержка в 1 секунду
    });
  }
  
  async function sendDataToServer2(data) {
    return new Promise((resolve, reject) => {
      // Симулируем отправку данных на сервер 2
      setTimeout(() => {
        const response = { status: "success", message: "Data sent to Server 2 successfully" };
        resolve(response);
      }, 1000); // Задержка в 1 секунду
    });
  }
  
  async function loadDataAndSendToServer() {
    try {
      // Загружаем данные с сервера 1
      const dataFromServer1 = await loadDataFromServer1();
      console.log("Data from Server 1:", dataFromServer1);
  
      // Отправляем данные на сервер 2
      const responseFromServer2 = await sendDataToServer2(dataFromServer1);
      console.log("Response from Server 2:", responseFromServer2);
    } catch (error) {
      // Выводим сообщение об ошибке, если что-то пошло не так
      console.error("Error:", error);
    }
  }
  
  // Вызываем функцию loadDataAndSendToServer для выполнения загрузки данных и отправки на сервер
  loadDataAndSendToServer();
  