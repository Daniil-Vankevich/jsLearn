// контекст = область видимости + переменная this...............

// this - это ссылка на объект, который вызывает код в данный момент.............
// методы call, apply and bind позволяют вручную устанавливать те значения, которые хотим видеть в this

// function printName() {
// 	console.log(this.firstName);
// }

// const user = {
// 	firstName: 'Daniil',
// }

// printName.call(user);


// ..........................

// function printName(text, text2) {
// 	console.log(text + text2 + this.firstName);
// }

// const user = {
// 	firstName: 'Daniil',
// }

// printName.call(user, 'Hello ', 'strong ');

// метод apply идентичен call, за исключением того, что при вызове функции аргументы указываются не через запятую, а в квадратных скобках в виде массива одним аргументом..... может быть максимум два аргумента в apply и второй аргумент принимает массив значений

// function printName(text, text2) {
// 	console.log(text + text2 + this.firstName);
// }

// const user = {
// 	firstName: 'Daniil',
// }

// printName.apply(user, ['Hello ', 'strong ']);



// если мы хотим передать параметры, но использовать функцию позже, то необходимо использовать параметр bind. 

// function printName(text, text2) {
// 	console.log(text + text2 + this.firstName);
// }

// const user = {
// 	firstName: 'Daniil',
// }


// let foo = printName.bind(user, 'Hello ');

// foo('strong ');


// ................................

function mul(a, b) {
	console.log(a * b);
}

let double = mul.bind(null, 2);
let tripple = mul.bind(null, 3);

double(3);
double(4);
double(5);

tripple(3);
tripple(4);
tripple(5);