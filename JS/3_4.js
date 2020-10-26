//Задача №4
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму
// зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

const countTotalSalary = function (employees) {
  "use strict";
  let total = 0;

  const fewSalary = Object.values(employees);

  for (const salary of fewSalary) {
    total += salary;
  }

  return total;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500