// Попытка обращения к переменной до её объявления с использованием var
console.log(x); // undefined
var x = 10;

// Попытка обращения к переменной до её объявления с использованием let
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

// Попытка обращения к переменной до её объявления с использованием const
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
