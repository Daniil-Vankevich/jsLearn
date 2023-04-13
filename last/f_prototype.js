let animal = {
	eats: true
};

function Rabbit(name) {
	this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit");

console.log(rabbit.__proto__);

console.log(rabbit.__proto__ === Rabbit.prototype);


// ...........................................

// let animal = {
// 	eats: true
// };

// const rabbit = Object.create(animal, {
// 	jump: {
// 		value: true,
// 	},
// });

// let cat = {
// 	dance: true
// };

// console.log(Object.setPrototypeOf(cat, rabbit));

// ...........................................

// function Rabbit() {}
// по умолчанию:
// Rabbit.prototype = { constructor: Rabbit }

// console.log( Rabbit.prototype.constructor == Rabbit ); // true

// ...........................................




// Мы можем использовать свойство constructor существующего объекта для создания нового.Пример:

// function Rabbit(name) {
//   this.name = name;
//   alert(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");

// Это удобно, когда у нас есть объект, но мы не знаем, какой конструктор использовался для его создания (например, он мог быть взят из сторонней библиотеки), а нам необходимо создать ещё один такой объект.

// Но, пожалуй, самое важное о свойстве "constructor" это то, что…

// …JavaScript сам по себе не гарантирует правильное значение свойства "constructor".

// Да, оно является свойством по умолчанию в "prototype" у функций, но что случится с ним позже – зависит только от нас.


// .............................................................


// В частности, если мы заменим прототип по умолчанию на другой объект, то свойства "constructor" в нём не будет. Например:

// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true
// };

// let rabbit = new Rabbit();
// alert(rabbit.constructor === Rabbit); // false

// Таким образом, чтобы сохранить верное свойство "constructor", мы должны добавлять/удалять/изменять свойства у прототипа по умолчанию вместо того, чтобы перезаписывать его целиком:

// function Rabbit() {}

// // Не перезаписываем Rabbit.prototype полностью,
// // а добавляем к нему свойство
// Rabbit.prototype.jumps = true
// // Прототип по умолчанию сохраняется, и мы всё ещё имеем доступ к Rabbit.prototype.constructor



// Или мы можем заново создать свойство constructor:

// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit
// };

// теперь свойство constructor снова корректное, так как мы добавили его

// ...........................................

// const animal1 = {
// 	run: true,
// }

// function Bat(name) {
// 	this.name = name;
// }

// // Bat.prototype = animal1;

// console.log(Bat === Bat.prototype.constructor);

// Bat.prototype.fly = true;

// const bat = new Bat("Dimon");

// console.log(bat.constructor === Bat);

// const bat2 = new bat.constructor("Inokentie");

// console.log(bat2.constructor === Bat);

// console.log('LOL');

// console.log(Object.getPrototypeOf(bat))
// console.log(Object.getPrototypeOf(bat2))




// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // ?


// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // ?



// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); 



// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats );

// ...............................

// let cat = {
// 	jump: true,
// };

// function Puma(name) {
// 	this.name = name;
// }

// let pantera = new Puma("Umka");

// let pantera2 = new pantera.constructor("Burka");

// console.log(pantera2.name);

// ..................................


// мы можем использовать такой способ, если мы уверены в том, что свойство "constructor" существующего объекта имеет корректное значение.

// Например, если мы не меняли "prototype", используемый по умолчанию, то код ниже, без сомнений, сработает:

// function User(name) {
//   this.name = name;
// }

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// alert( user2.name ); // Pete (сработало!)
// Всё получилось, потому что User.prototype.constructor == User.

// …Но если кто-то перезапишет User.prototype и забудет заново назначить свойство "constructor", чтобы оно указывало на User, то ничего не выйдет.

// Например:

// function User(name) {
//   this.name = name;
// }
// User.prototype = {}; // (*)

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// alert( user2.name ); // undefined
