// // let obj = {};
// // console.log( obj ); // "[object Object]" ?

// let obj = {};

// alert(obj.__proto__ === Object.prototype); // true
// // obj.toString === obj.__proto__.toString === Object.prototype.toString


// // Обратите внимание, что по цепочке прототипов выше Object.prototype больше нет свойства [[Prototype]]:
// alert(Object.prototype.__proto__); // null

function User(name) {
	this.name = name;
}
User.prototype = {sayHi() { console.log('hello') }}

let user = new User('John');
console.log(user.__proto__)

// console.log(Object.getOwnPropertyNames(Array.prototype))
console.log([1, 2, 3].sort())










// ..................................................

// let animal = {
// 	eats: true,
// };

// let rabbit = {
// 	jumps: true,
// };

// rabbit.__proto__ = animal;

// animal.walk = function() {
// 	console.log("Animal walk")
// };

// // метод автоматически берется из прототипа
// console.log(rabbit.walk());


// let parrot = {
// 	fly: true,
// 	__proto__: rabbit,
// }

// console.log(Object.getPrototypeOf(parrot));

// let cat = {
// 	fight: true,
// };

// console.log(Object.setPrototypeOf(cat, parrot));


//Операция записи и удаления не использует прототип. Прототип используется только для чтения свойства.

// let animal = {
//   eats: true,
//   walk() {
//     /* этот метод не будет использоваться в rabbit */
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.walk = function() {
//   console.log("Rabbit! Bounce-bounce!");
// };

// // Теперь вызов rabbit.walk() находит метод непосредственно в объекте и выполняет его, не используя прототип:
// rabbit.walk(); // Rabbit! Bounce-bounce!


// юю.....................................................................

// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// alert(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper"; // (**)
// alert(admin.name); // Alice
// alert(admin.surname); // Cooper




// Например, здесь animal представляет собой «хранилище методов», и rabbit использует его.

// Вызов rabbit.sleep() устанавливает this.isSleeping для объекта rabbit:

// методы animal
// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       alert(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = true;
//   }
// };

// let rabbit = {
//   name: "White Rabbit",
//   __proto__: animal
// };

// // модифицирует rabbit.isSleeping
// rabbit.sleep();

// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

// Если бы у нас были другие объекты, такие как bird, snake и т.д., унаследованные от animal, они также получили бы доступ к методам animal. Но this при вызове каждого метода будет соответствовать объекту (перед точкой), на котором происходит вызов, а не animal. Поэтому, когда мы записываем данные в this, они сохраняются в этих объектах. В результате методы являются общими, а состояние объекта — нет.

// Цикл for..in проходит не только по собственным, но и по унаследованным свойствам объекта.Например:

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// // Object.keys возвращает только собственные ключи
// alert(Object.keys(rabbit)); // jumps

// // for..in проходит и по своим, и по унаследованным ключам
// for(let prop in rabbit) alert(prop); // jumps, затем eats

// Если унаследованные свойства нам не нужны, то мы можем отфильтровать их при помощи встроенного метода obj.hasOwnProperty(key): он возвращает true, если у obj есть собственное, не унаследованное, свойство с именем key.

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// for(let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     alert(`Our: ${prop}`); // Our: jumps
//   } else {
//     alert(`Inherited: ${prop}`); // Inherited: eats
//   }
// }