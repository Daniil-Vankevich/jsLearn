// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	sayHi() {
// 		alert(this.name);
// 	}

// 	sayBy() {
// 		alert("Goodbye " + this.name);
// 	}
// }

// let user = new User("Daniil");
// // user.sayHi();
// // user.sayBy();
// // alert(user.name)

// User.prototype.age = 20;

// let user1 = new User('Kirill');

// // user1.sayHi();

// // alert(user.age)

// // alert(user1.age)

// // for (let key in user) {
// // 	alert( key + "=" + user[key]);
// // }

// alert(Object.getOwnPropertyNames(Object.getPrototypeOf(user)));

// .............................................

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	sayHi() {
// 		console.log(this.name);
// 	}

// 	sayBy() {
// 		console.log("Goodbye " + this.name);
// 	}
// }

// let user = new User("Daniil");
// user.sayHi();
// user.sayBy();
// // alert(user.name)

// User.prototype.age = 20;

// let user1 = new User('Kirill');

// // user1.sayHi();

// // alert(user.age)

// // alert(user1.age)

// for (let key in user) {
// 	console.log( key + "=" + user[key]);
// }

// console.log(user.__proto__.constructor);
// console.log(Object.getPrototypeOf(user));




// ...........What is a class?......................

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	sayHi() {
// 		console.log(this.name);
// 	}
// }
// // докзательство того, что User - это функция:

// console.log(typeof User); //function

// let user_login = new User("Daniil");

// от что на самом деле делает конструкция class User {...}:

// Создаёт функцию с именем User, которая становится результатом объявления класса. Код функции берётся из метода constructor (она будет пустой, если такого метода нет).
// Сохраняет все методы, такие как sayHi, в User.prototype.
// При вызове метода объекта new User он будет взят из прототипа, как описано в главе F.prototype. Таким образом, объекты new User имеют доступ к методам класса..................................... Можно проверить вышесказанное и при помощи кода:

// class Autor {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	sayHi() {
// 		console.log(this.name);
// 	}
// }
// // класс - это функция
// console.log(typeof Autor); // function

// // ...или, если точнее, это метод constructor
// console.log(Autor === Autor.prototype.constructor); // true

// // Методы находятся в Autor.prototype, например:
// console.log(Autor.prototype.sayHi); // sayHi() { alert(this.name); }

// // в прототипе ровно 2 метода
// console.log(Object.getOwnPropertyNames(Autor.prototype)); // constructor, sayHi


// Иногда говорят, что class – это просто «синтаксический сахар» в JavaScript (синтаксис для улучшения читаемости кода, но не делающий ничего принципиально нового), потому что мы можем сделать всё то же самое без конструкции class:

// перепишем класс User на чистых функциях

// 1. Создаём функцию constructor
// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}
// 	// каждый прототип функции имеет свойство constructor по умолчанию,
// 	// поэтому нам нет необходимости его создавать
// 	// 2. Добавляем метод в прототип
// 	sayHi() {
// 		alert(this.name);
// 	}
// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();




// ............Class.Expression...........................................

// Class Expression
// Как и функции, классы можно определять внутри другого выражения, передавать, возвращать, присваивать и т.д.

// Пример Class Expression (по аналогии с Function Expression):

// let User = class {
//   sayHi() {
//     alert("Привет");
//   }
// };
// Аналогично Named Function Expression, Class Expression может иметь имя.

// Если у Class Expression есть имя, то оно видно только внутри класса:

// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
// let User = class MyClass {
//   sayHi() {
//     alert(MyClass); // имя MyClass видно только внутри класса
//   }
// };

// new User().sayHi(); // работает, выводит определение MyClass

// alert(MyClass); // ошибка, имя MyClass не видно за пределами класса



// .....динамическое создание класса................

// function makeClass(word) {
// 	return class {
// 		sayHi() {
// 			console.log('SalamAlekum ' + word);
// 		};
// 	};
// }

// let User = makeClass('birds');

// new User().sayHi();


//..................................................Геттеры/сеттеры, другие сокращения. Как и в литеральных объектах, в классах можно объявлять вычисляемые свойства, геттеры/сеттеры и т.д.       Вот пример user.name, реализованного с использованием get/set:

// class User {
// 	constructor(name) {
// 		this.name = name;
// 	}

// 	get name() {
// 		return this._name;
// 	}

// 	set name(value) {
// 		if(value.length < 4) {
// 			console.log("Имя слишком короткое.");
// 			return;
// 		};
// 		this._name = value;
// 	};	
// }

// let user = new User("Daniil");
// console.log(user.name);
// user = new User('');
// console.log(user.name);


// ////////////////////////////////////////////////////





// При объявлении класса геттеры/сеттеры создаются на User.prototype, вот так:

// Object.defineProperties(User.prototype, {
//   name: {
//     get() {
//       return this._name
//     },
//     set(name) {
//       // ...
//     }
//   }
// });
// Пример с вычисляемым свойством в скобках [...]:

// class User {

//   ['say' + 'Hi']() {
//     alert("Привет");
//   }

// }

// new User().sayHi();

// //////////////////////////////////////////////////////////////////////////////////////////////


// В приведённом выше примере у класса User были только методы. Давайте добавим свойство:

class User {
  name = "Аноним";

  sayHi() {
    alert(`Привет, ${this.name}!`);
  }
}

new User().sayHi();
// Свойство name не устанавливается в User.prototype. Вместо этого оно создаётся оператором new перед запуском конструктора, это именно свойство объекта.