// использование глобальной переменной
let a = 10;
function f1() {
	console.log('(global) a = '+a);
}
// f1();

// использоование локальной переменной

function f2 () {
	let	a = 69
	console.log('(local) a = '+a);
}
// f2();
// f1();



// ........................................
// иногда переменные нужны снаружи
// ........................................

// let count = 0;
// function step() {
// 	count++;
// 	console.log(count);
// }

// step();
// step();
// step();
// step();
// step();


// ...........................................
// первый пример замыкания)))))))))))))))))))
// ...........................................

// function createStep(){
// 	let count = 0;
// 	return function () {
// 	count++;
// 	console.log(count);
// 	}
// }
// let step1 = createStep();
// console.log(step1);
// step1();
// step1();
// step1();
// step1();
// step1();

// замыкание - это приём в программировании, когда создается функция, внутри которой помещаются нужные данные и способы манипулирования ими. Из-за того, что все помещено в функцию и функция будет выполнена, то создасться изолированной область, где данные переменные будут находиться и функции, прописанные внутри нашего замыкания получают к ним доступ. Прелесть в том, что создаются изолированные области, где можно выполнять один и тот же код, но с разными переменными.


// function createStep(n = 0){
// 	let count = n;
// 	return function () {
// 	count++;
// 	console.log(count);
// 	}
// }
// let step1 = createStep();
// let step2 = createStep(200);
// step1();
// step1();
// step1();
// step2();
// step1();
// step1();


// ...........................................
// задача на попрошайку с рекурсией)))))))))))))))))))
// ...........................................

// function randomInteger(min, max) {
// 	// получить случайное число от (min-0.5) до (max+0.5);
// 	let rand = min - 0.5 + Math.random() * (max - min + 1);
// 	return Math.round(rand);
// }

// let s = 0;
// function beggar() {
// 	s += randomInteger(0, 100);
// 	console.log(s);
// 	if (s >= 250) return;
// 	beggar();
// }

// beggar();



// ...........................................
// задача на попрошайку с рекурсией и применением замыкания)))))))))))))))))))
// ...........................................


function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5);
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}

function createBeggar() {
	let s = 0;
	return function beggar() {
		s += randomInteger(0, 100);
		console.log(s);
		if (s >= 250) return;
		beggar();
	}
}

let begg1 = createBeggar();
begg1();

let p;