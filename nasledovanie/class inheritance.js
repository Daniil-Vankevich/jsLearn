// ключевое слово "extends"

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	run() {
		let obj = Object.getPrototypeOf(this).constructor;
		console.log(`${obj.name},${this.name}, ${this.age}, бежит `);

	}
}

class Rabbit extends Animal {
	run() {
		super.run();
		console.log("Остановился");
	}
}
let animal1 = new Animal("Valentin", 25);
let rabbit1 = new Rabbit("Vasiliy", 20)

rabbit1.run();
