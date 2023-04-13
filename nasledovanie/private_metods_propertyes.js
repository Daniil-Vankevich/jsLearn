// class CoffeMachine {
// 	waterAmount = 0;

// 	constructor(power) {
// 		this.power = power;
// 		console.log(`Кофеварка превосходная с мощностью: ${power}W`);
// 	}

// }
// let coffeMachine = new CoffeMachine(150);

// coffeMachine.waterAmount = 250;

// console.log(coffeMachine.waterAmount);



// Защищённые свойства обычно начинаются с префикса _

// class CoffeMachine {
// 	_waterAmount = 0;

// 	set waterAmount(value) {
// 		if(value < 0) throw new Error('Отрицательное количество видички');
// 		this._waterAmount = value;
// 	}

// 	get waterAmount() {
// 		return this._waterAmount;
// 	}

// 	constructor(power) {
// 		this._power = power;
// 	}

// }

// // create new coffeMachine

// let coffeMachine = new CoffeMachine(150);

// // set waterAmount 

// coffeMachine.waterAmount = 10;

// console.log(coffeMachine.waterAmount);

// ..................................................

//Свойство только для чтения «power»

// class CoffeMachine{
// 	//.....

// 	constructor(power) {
// 		this._power = power;
// 	}

// 	get power() {
// 		return this._power;
// 	}

// }

// let coffeMachine = new CoffeMachine(150);

// console.log(`Мощность: ${coffeMachine.power}W`);

// coffeMachine.power = 25;

// console.log(`Мощность: ${coffeMachine.power}W`);



// class CoffeeMachine {
//   _waterAmount = 0;

// 	constructor(power) {
//     this._power = power;
//   }

//   setWaterAmount(value) {
//     if (value < 0) throw new Error("Отрицательное количество воды");
//     this._waterAmount = value;
//   }

//   getWaterAmount() {
//     return this._waterAmount;
//   }
// }

// new CoffeeMachine().setWaterAmount(100);

// Это выглядит немного длиннее, но функции более гибкие. Они могут принимать несколько аргументов (даже если они нам сейчас не нужны). Итак, на будущее, если нам надо что-то отрефакторить, функции – более безопасный выбор.

// С другой стороны, синтаксис get/set короче, решать вам.


//Приватное свойство «#waterLimit»


// Приватные свойства и методы должны начинаться с #. Они доступны только внутри класса.

// Например, в классе ниже есть приватное свойство #waterLimit и приватный метод #checkWater для проверки количества воды:

// class CoffeeMachine {
//   #waterLimit = 200;

//   #checkWater(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     if (value > this.#waterLimit) throw new Error("Слишком много воды");
//   }
// }

// let coffeeMachine = new CoffeeMachine();

// // снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error


//Приватное свойство «#waterAmount»

// class CoffeeMachine {

//   #waterAmount = 0;

//   get waterAmount() {
//     return this.#waterAmount;
//   }

//   set waterAmount(value) {
//     if (value < 0) throw new Error("Отрицательный уровень воды");
//     this.#waterAmount = value;
//   }
// }

// let machine = new CoffeeMachine();

// machine.waterAmount = 100;
// // alert(machine.#waterAmount); // Error

// console.log(machine.waterAmount);

// Приватные поля особенные.

// Как мы помним, обычно мы можем получить доступ к полям объекта с помощью this[name]:

// class User {
//   sayHi() {
//     let fieldName = "Daniil";
//     alert(`Hello, ${this[fieldName]}`);
//   }
// }

// new User().sayHi();

// С приватными свойствами такое невозможно: this['#name'] не работает. Это ограничение синтаксиса сделано для обеспечения приватности.