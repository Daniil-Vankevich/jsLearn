// let func = new Function([arg1, arg2, ...argN], functuionBody);

// example............

// let sum = new Function('a', 'b', 'return a + b');
// console.log( sum(1, 2) );

// exzmple no arguments......

// let sayHi = new Function('console.log	("Hello")')

// sayHi();



// ................................


// function getFunc() {
//   let value = "test";

//   let func = new Function('alert(value)');

//   return func;
// }

// getFunc()(); // ошибка: value не определено

// ...............................

function getFunc() {
  let value = "test";

  let func = function() { console.log(value); };

  return func;
}

getFunc()(); // "test", из лексического окружения функции getFunc


// new Function('a', 'b', 'return a + b'); // стандартный синтаксис
// new Function('a,b', 'return a + b'); // через запятую в одной строке
// new Function('a , b', 'return a + b'); // через запятую с пробелами в одной строке