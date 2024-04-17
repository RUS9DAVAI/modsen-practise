// Класс "Сотрудник"
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Метод расчета годовой зарплаты
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Подкласс "Менеджер", наследующий от класса "Сотрудник"
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    // Переопределение метода расчета годовой зарплаты для учета бонусов
    calculateAnnualSalary() {
        // Для примера добавляем бонус в 20% от базовой зарплаты
        const bonus = this.salary * 0.2;
        return super.calculateAnnualSalary() + bonus;
    }
}

// Создание экземпляров класса "Менеджер"
const manager1 = new Manager("John Doe", 50000, "Sales");
const manager2 = new Manager("Jane Smith", 60000, "Marketing");

// Расчет годовой зарплаты для менеджеров
console.log(manager1.calculateAnnualSalary()); // Выводит 66000 (50000 * 12 + 20% бонус)
console.log(manager2.calculateAnnualSalary()); // Выводит 72000 (60000 * 12 + 20% бонус)
