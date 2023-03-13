// let user = {
//   name: "John",
//   age: 30
// };

// alert(Object.entries(user));


// .......................................

// let user = {
//   name: "John",
//   age: 30
// };

// // перебор значений
// for (let value of Object.values(user)) {
//   alert(value); // John, затем 30
// }



// трансформации объекта:

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // преобразовать в массив, затем map, затем fromEntries обратно объект
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// alert(doublePrices.meat); // 8



// ........................................

// function sumSalaries(salaries) {

//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }

//   return sum; // 650
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// Еще один вариант решения!:

// reduce перебирает массив значений salaries,
// складывает их
// и возвращает результат
// function sumSalaries(salaries) {
//   return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
// }




// ..................................

let user = {
  name: 'John',
  age: 30
};

function count(obj) {
  return Object.keys(obj).length;
}

alert( count(user) ); // 2



