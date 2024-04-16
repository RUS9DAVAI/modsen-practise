class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`);
    }
}

// Создание экземпляров класса "Человек"
const person1 = new Person("John", 30, "USA");
const person2 = new Person("Alice", 25, "Canada");

// Отображение информации о людях
person1.displayInfo();
person2.displayInfo();
