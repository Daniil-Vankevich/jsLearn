// чтобы реализовать планирование существует два метода: setTimeout, который позволяет вызвать функцию один раз через определенный интервал времени и setInterval, который позволяет вызывать функцию регулярно, повторяя вызов через определенный интервал времени

// setTimeout(функция или код, задержка, параметр,..... параметр);

// setTimeout(функция или код, задержка, параметр,..... параметр);



// ................................

// function showMessage(text, name) {
// 	console.log(`${text}, ${name}`);
// }
// setTimeout(showMessage, 3000, 'Hi', 'Daniil');

// function showMessage(text, name) {
// 	console.log(`${text}, ${name}`);
// }
// setInterval(showMessage, 5000, 'Hi', 'Daniil');

// можно заменить сетинтервал на рекурсивный сеттаймаут............. в итоге задержка будет более точная)

// function showMessage(text, name) {
// 	console.log(`${text}, ${name}`);
// 	setTimeout(showMessage, 500, 'Hi', 'Daniil');
// }
// setTimeout(showMessage, 500, 'Hi', 'Daniil');


// ...............................


// function showNumber(num) {
// 	console.log(num);
// 	if(num < 5) {
// 		setTimeout(showNumber, 1500, ++num);
// 	}
// }
// setTimeout(showNumber, 1500, 1);



// cleartimeout.....останавливает работу setTimeout.........

// function showNumber(num) {
// 	console.log(num);
// 	let timeId = setTimeout(showNumber, 1500, ++num);
// 	if(num === 5) {
// 		clearTimeout(timeId);
// 	}
// }
// setTimeout(showNumber, 1500, 1);

let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if(result === 5) {
		clearInterval(timeId);
	}
}

let timeId = setInterval(showNumber, 1000, 1);


// ________________________________

// функция соединения строк.......
// function createMessage(text, name) {
// 	return `${text}, ${name}!`;
// }

// функция вывода в консоль.......

// function showMessage(message) {
// 	console.log(message);
// }

//  // объединяющая функция, вызывающая обе функции............

// function initMessage(text, name) {
// 	showMessage(createMessage(text, name));
// }

// initMessage('Hello', 'beautiful Daniil Nikolaevich');


// DZ.....................

// let message;
// if (2 > 1) {
// message = function showMessage() {
// 		console.log('сообщение')
// 	}
// }
// message();

// function showName() {
// 	console.log('Vasya!');
// }
// setTimeout(showName, 1500);
// console.log('Kolya!');



// showMessage();
// function showMessage() {
// 	console.log('hello');
// }



// let showMessage = function() {
// 	console.log('salamy');
// }
// showMessage();