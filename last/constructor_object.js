// const user = {
// 	name: 'Daniil',
// 	age: 20,
// }
// данный синтаксис позволяет создавать только один объект. Но есть способ создавать много объектов - и это конструктор объектов

// function User(name, age) {
// 	// this = {} - неявно
// 	this.name = name;
// 	this.age = age;
// 	// return this
// 	// если написать return {}, то вернется пустой объект, а если возвращать любой примитив, то вернется все равно return this, а прописанный нами return будет инорироватьсяюю................ 
// }

// let user = new User('Daniil', 20);
// let user2 = new User('Egor', 21);

// console.log(user, user2);



// внутри функции конструктора можно сздавать методы


// function User(name, age) {
// 	// 	// this = {} - неявно
// 		this.name = name;
// 		this.age = age;
// 		this.sayHi = function() {
// 			alert('My name is ' + this.name);
// 		}
// 	};
	
// 	let user = new User('Daniil', 20);
// 	let user2 = new User('Egor', 21);

// 	user.sayHi();
	
// 	user2.sayHi();

// 	alert(user == user2);
	

	// console.log(user, user2);



// .................................................
	// Опциональная цепочка представляет собой безопасный способ доступа к свойствам вложенных объектов, в независимости от глубины вложенности.
	// .................................................................................................

	// const user1 = {
	// 	name: 'Daniil',
	// 	age: 20,
	// 	address: {
	// 		street: 'Industrialinay'
	// 	}
	// }

	// const user2 = {
	// 	name: 'Egor',
	// 	age: 21,
	// }

	// const getUserInfo = (obj) => {
	// 	console.log(obj.address ? obj.address.street : undefined);
	// }

	// getUserInfo(user1);

// .................................................

	// const user1 = {
	// 	name: 'Daniil',
	// 	age: 20,
	// 	address: {
	// 		street: {
	// 			name: 'Industrialinay'
	// 		}
	// 	}
	// }

	// const user2 = {
	// 	name: 'Egor',
	// 	age: 21,
	// }

	// const getUserInfo = (obj) => {
	// 	console.log(obj.address && obj.address.street ? obj.address.street.name : undefined);
	// }

	// getUserInfo(user1);
	// getUserInfo(user2);


	// .................................................
	// Опциональная цепочка представляет собой безопасный способ доступа к свойствам вложенных объектов, в независимости от глубины вложенности.
	// ..................................................пример применения опциональной цепочки......obj.address?.street?.name........после свойства сначала знак вопроса, а затем точка для доступа к следующему свойству...............................

	// 	const user1 = {
	// 	name: 'Daniil',
	// 	age: 20,
	// 	address: {
	// 		street: {
	// 			name: 'Industrialinay'
	// 		}
	// 	}
	// }

	// const user2 = {
	// 	name: 'Egor',
	// 	age: 21,
	// }

	// const getUserInfo = (obj) => {
	// 	console.log(obj.address?.street?.name);
	// }

	// getUserInfo(user1);
	// getUserInfo(user2);

	// ..................................................пример применения опциональной цепочки....в случае метода внутри объекта. 	с             user1.sayHi?.();......если метод существует, то будем его запускать, иначе он не будет запущен...........................................

	// 	const user1 = {
	// 	name: 'Daniil',
	// 	age: 20,
	// 	sayHi() {
	// 		alert('Hello, dear friend ');
	// 	},
	// }

	// user1.sayHi?.();

	// опциональная цепочка: "?."  может использоваться и в случае когда имя свойства - строка. Тогда запись в консоле будет следующая: ['address-a']?.  


	// const user1 = {
	// 	name: 'Daniil',
	// 	age: 20,
	// 	'address-a': {
	// 		street: {
	// 			name: 'Industrialinay'
	// 		}
	// 	},
	// }
	// const getUserInfo = (obj) => {
	// 	console.log(obj['address-a']?.street?.name);
	// }

	// getUserInfo(user1);





		const user1 = {
		name: 'Daniil',
		age: 20,
		'address-a': {
			street: {
				name: 'Industrialinay'
			}
		},
	}
	console.log(user1);

	delete user1?.["address-a"];

	console.log(user1);
