// применение геттера(это и есть функция, получаем информацию из существующих свойств объекта user) Мы может только прочитывать значения заданных свойств. Нет возможности изменять значения свойства
// const user = {
// 	name: "Daniil ",
// 	secondName: "Vankone",
// 	age: 20,
// 	get fullName() {
// 		return this.name + this.secondName;
// 	}
// }
// console.log(user.fullName);
// ............................................................................................................................................................
// сеттер может принимать только один параметр, позволяет изменять значения свойств..............................................

// const user = {
// 	name: "Daniil ",
// 	secondName: "Vankone",
// 	age: 20,
// 	set setName(value) {
// 		this.name = value;
// 	}
// }
// user.setName = "Daniilka";
// console.log(user);

// ..................................................

// const user = {
// 	name: "Daniil ",
// 	secondName: "Vankone",
// 	age: 20,
// 	set fullName(value) {
// 		[name, secondName, age] = value;
// 		this.name = name;
// 		this.secondName = secondName;
// 		this.age = age;
// 	}
// }
// user.fullName = ["Danonchik", "Vankevidze", "69"];
// console.log(user);

//....................................................


// геттеры и сеттеры могут работать вместе!!! и при этом иметь одинаковое название!!!!!
const user = {
	name: "Daniil ",
	secondName: "Vankone",
	age: 20,
	get fullName() {
	return this.name + this.secondName;
	},
	set fullName(value) {
		[name, secondName, age] = value;
		this.name = name;
		this.secondName = secondName;
		this.age = age;
	}
}

console.log(user.fullName);

user.fullName = ["Danonchik ", "Vankevidze", "69"];

console.log(user);