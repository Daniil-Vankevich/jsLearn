let printValue = (x) => {
	// тут что-то сложное и ресурсоемкое
	return x * 2;
}

const cachingDecorator = (func) => {
	let cache = new Map();

	return function (x) {

		console.log(cache);

		if (cache.has(x)) {
			console.log('Берем данные из кеша');
			return cache.get(x);
		}

		let result = func(x);
		cache.set(x, result);

		console.log('Берем данные не из кеша');

		return result;
	};
};

printValue = cachingDecorator(printValue);

let printValuev2 = cachingDecorator(printValue)

console.log(printValue(5));
console.log(printValue(5));

console.log(printValuev2(5));


// примеры вложенных функций............................

// let func = () => {
// 	return function (x) {
// 		return 'hello from anon func'
// 	}
// }
// console.log(func);
// // console.log(func());
// // console.log(func()());

// let func_result = func();
// console.log(func_result);

// let anon_result = func_result();
// console.log(anon_result);

// // или же можно использовать следующий вызов.................................

// console.log(func, func(), func()());



// примеры вложенных функций2............................

// const func1 = (a) => {

// 	console.log(a + 1)
	
// 	let func2 = (b) => {
// 		console.log(b * 2)
		
// 		let func3 = (c) => {
// 			console.log( c - 5)
			
// 			return 'hello from func3'
// 		}
		
// 		return func3;
// 	}
	
// 	return func2;
// }
// // console.log(func1, func1(6),  func1(6)(7),  func1(6)(7)(8));

// let func1_result = func1(6)

// console.log(func1_result)

// let func2_result = func1_result(6)

// console.log(func2_result)

// let func3_result = func2_result(6)

// console.log(func3_result)