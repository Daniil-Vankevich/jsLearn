let printValue = (x) => {
	// тут что-то сложное и ресурсоемкое
	return x * 2;
};

const cachingDecorator = (func) => {
	let cache = new Map();

	return function (x) {
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

console.log(printValue(5));
console.log(printValue(5));