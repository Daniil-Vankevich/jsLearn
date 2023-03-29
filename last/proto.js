// const user = {
// 	name: "Daniil",
// 	age: 20,
// 	lvl: 1,
// 	coins: 0,
// };

// const admin = {
// 	isAdmin: true,

// }; 

// console.log(user);

// установка к объекту админ прототипа user
// admin.__proto__ = user;

// console.log(admin.age);


// ...............................................

// пример прототипного наследования для большого числа объектов......................................
// ...............................................

// const animal = {
// 	eat: "yes",
// };

// const cat = {
// 	jump: true,
// };

// const tiger = {
// 	run: false,
// };

// console.log(animal);
// console.log(cat);
// console.log(tiger);

// cat.__proto__ = animal;
// console.log(cat.eat);

// tiger.__proto__ = cat;
// console.log(tiger);
// console.log(tiger.jump);
// console.log(tiger.eat);

// еще один способ добавления прототипа к объекту

// const cow = {
// 	chocolate: false,
// 	__proto__: animal,
// };

// console.log(cow);
// console.log(cow.eat);

// после добавления прототипа к объекту, можно изменять значения добавленного свойства, будет меняться значение внутри самого объекта, прототип никак затрагиваться не будет

// for(let key in tiger) {
// 	let isOwn = tiger.hasOwnProperty(key);
// 	isOwn ? console.log(tiger[key], key) : false;
// }



// пример прототипного наследования при использовании конструктора объектов..........................................
// ...............................................

// const animal = {
// 	eat: true,
// };

// function Rabbit(name) {
// 	this.name = name;
// }

// Rabbit.prototype = animal;

// const rabbit = new Rabbit("Pick");

// console.log(Rabbit === Rabbit.prototype.constructor);

// console.log(rabbit);



// ...............................................

// const animal1 = {
// 	run: true,
// }

// function Bat(name) {
// 	this.name = name;
// }

// // Bat.prototype = animal1;

// const bat = new Bat("Dimon");

// // console.log(Rabbit === Rabbit.prototype.constructor);

// console.log(Bat === Bat.prototype.constructor);

// .........новый способ прототипного наследования: Object.create(animal, {
// 	jump: {
// 		value: true,
// 	},
// });............

const animal = {
	eat: true,
};

const cat = Object.create(animal, {
	jump: {
		value: true,
	},
});

console.log(cat);

// метод getPrototypeOf позволяет узнать есть ли у объекта прототип и получить его значение

// метод setPrototypeOf передает два аргумента: первый это наш ключевой cat, а второй, который мы хотим установить в качестве аргумента например animal или пустой объект....................................................................