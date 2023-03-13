// let city = 'Shakhty';

// let user = {
// 	name: "John",
// 	age: 30,
// 	city
// }

// user.sayHi = function() {
// 	console.log('Hello');
// };

// console.log(user);

// user.sayHi();

// function alert(message) {
// 	return
// }



// эти объекты делают одно и то же

// user = {
// 	sayHi: function() {
// 		console.log('Hello')
// 	}
// };
// user.sayHi();

// // сокращённая запись выглядит лучше, не так ли?

// user_1 = {
// 	sayHi() {
// 		console.log('You are welcome')
// 	}
// };
// user_1.sayHi();

// Значение this – это объект «перед точкой», который используется для вызова метода.
// Здесь во время выполнения кода user.sayHi() значением this будет являться user (ссылка на объект user).

// let user = {
// 	name: "John",
// 	age: 30,
// 	sayHi() {
// 		console.log(this.name);
// 	}
// }
// user.sayHi();


// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     console.log( user.name );
//   }

// };


// let admin = user;
// user = null; // перезапишем переменную для наглядности, теперь она не хранит ссылку на объект.

// user.sayHi(); // TypeError: Cannot read property 'name' of null



// У стрелочных функций нет "this";

// let user = {
//   firstName: "Ilya",
//   sayHi() {
//     let arrow = () => console.log(this.firstName);
//     arrow();
//   }
// };

// user.sayHi(); // Ilya



// function sayHi() {
//   alert( this.name );
// }

// ________this не является фиксированным _______________this  можно использовать в любой функции___даже если это не метод объекта_____


let user = { name: "John"};
let admin = { name: "Admin"};

function sayHi() {
  console.log(this.name);
}

user.f = sayHi;
admin.f = sayHi;

console.log(user);
console.log(admin);

user.f();
admin.f();

admin['f']();

// если использовать строгий режим "use strict", то в этом случае this == undefined, если зис используются без какого либо метода. Если попытаться обратиться к методу .нейм, то тогда будет ошибка................ если же мы работаем не вс трогом режиме то обращение к зис через например console.log: this == глобвльный объект window в браузере можно посмотреть все методы объекта виндов.