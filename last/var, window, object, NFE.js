// если пременная объявляется при помощи var внутри функции, то за пределом этой функции, к данной переменой обратиться не получиться. Если же var используются внутри условия: if() {main} else, то тогда обратиться к переменной получится, но опять же если это условие перенести в функцию, то не получится обратиться к объявленной переменной.

// const printMessage = () => {
// 	var message = "Hey";
// 	console.log(message);
// }
// printMessage();
// console.log(message);


// условие..........................

// if(true) {
// 	var message = "Hello";
// }
// console.log(message);




// ...........................................

// использование var для объявления переменной это более гибкий способ, т.к можно объявлять одну и ту же переменную но с разными данными, которые в ней хранятся. let такой трюк не позволяет, но оно и к лучшему)))))))


// .....................................

// const printMessage1 = () => {
// 	 message = "Hey";
// 	console.log(message);
// 	var message;
// }
// printMessage1();

// ......................................
// выдаст undefined

// const printMessage = () => {
// 		console.log(message);
// 		var message = "Hello";
// 	}
// 	printMessage();

	// ......................................

	// const printMessage2 = () => {
	// 	message = "Hello";
	// 	console.log(message);
	// 	if(false) {
	// 		var message;
	// 	}
	// }
	// printMessage2();



	// глобальный объект window.............

	// window.alert("Text");

	// var message = 'Hello';

	// alert(window.message);




	// объект функции.......................

	// const printMessage = (a, b) => {
	// 	// console.log(a, b);
	// 	let counter = 7;
	
	// 	printMessage.counter++;

	// 	console.log(counter);
	// 	console.log(printMessage.counter);
	// }
	// printMessage.counter = 0;

	// printMessage();

// console.log(printMessage.name);
// console.log(printMessage.length);
// console.log(printMessage.counter);


// пример function expression........ 

// let square = function(number) { 
// 	return number*number; 
// }
// let x = square(4)
// console.log(x)


// ..............Named Function Expression или NFE – это термин для Function Expression, у которого есть имя...........................


// Есть две важные особенности имени func, ради которого оно даётся:
// Оно позволяет функции ссылаться на себя же.
// Оно не доступно за пределами функции.

// let sayHi = function func(who) {
// 	if(who) {
// 		console.log(`Hello, ${who}`);
// 	} else {
// 		func("Guest"); // использует func, чтобы снова вызвать себя же
// 	}

// };

// sayHi("Danilka");
// sayHi();
// func(); // Ошибка, func не определена (недоступна вне функции)



// Почему просто не использовать sayHi для вложенного вызова? Вообще, обычно мы можем так поступить:
// Однако, у этого кода есть проблема, которая заключается в том, что значение sayHi может быть изменено. Функция может быть присвоена другой переменной, и тогда код начнёт выдавать ошибки:

// let sayHi = function(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     sayHi("Guest"); // Ошибка: sayHi не является функцией
//   }
// };

// let welcome = sayHi;
// sayHi = null;

// welcome(); // Ошибка, вложенный вызов sayHi больше не работает!


let sayHi = function func(who) {
  if (who) {
    alert(`Hello, ${who}`);
  } else {
    func("Guest"); // Теперь всё в порядке
  }
};

let welcome = sayHi;
sayHi = null;

welcome(); // Hello, Guest (вложенный вызов работает)

// Теперь всё работает, потому что имя "func" локальное и находится внутри функции. Теперь оно взято не снаружи (и недоступно оттуда). Спецификация гарантирует, что оно всегда будет ссылаться на текущую функцию. Внешний код все ещё содержит переменные sayHi и welcome, но теперь func – это «внутреннее имя функции», таким образом она может вызвать себя изнутри.