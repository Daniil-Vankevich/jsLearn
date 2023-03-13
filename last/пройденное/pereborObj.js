// использование Symbol.iterator: 1 varient

// let range = {
//   from: 1,
//   to: 5
// };

// // 1. вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function() {

//   // ...она возвращает объект итератора:
//   // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() вызывается на каждой итерации цикла for..of
//     next() {
//       // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// // теперь работает!
// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }



// 2 varient

// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }

// строка - перебираемый объект!

// for (let char of "test") {
//   // срабатывает 4 раза: по одному для каждого символа
//   alert( char ); // t, затем e, затем s, затем t
// }

// let str = '𝒳😂';
// for (let char of str) {
//     alert( char ); // 𝒳, а затем 😂
// }



// пример явного вызова итератора: пример со строкой

// let str = "Hello";

// // делает то же самое, что и
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   alert(result.value); // выводит символы один за другим
// }


// Пример псевдомассива, который нельзя итерировать, т.к отстутствует Symbol.iterator

// let arrayLike = { // есть индексы и свойство length => псевдомассив
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// // Ошибка (отсутствует Symbol.iterator)
// for (let item of arrayLike) {}


// Есть универсальный метод Array.from, который принимает итерируемый объект или псевдомассив и делает из него «настоящий» Array. После этого мы уже можем использовать методы массивов.

// let arrayLike = {
//   0: "Hello",
//   1: "World",
//   length: 2
// };

// let arr = Array.from(arrayLike); // (*)
// alert(arr.pop()); // World (метод работает)


// То же самое происходит с итерируемым объектом:
// // range взят из примера выше
// let arr = Array.from(range);
// alert(arr); // 1,2,3,4,5 (преобразование массива через toString работает)

let range = {
	  from: 1,
	  to: 5,
	
	  [Symbol.iterator]() {
	    this.current = this.from;
	    return this;
	  },
	
	  next() {
	    if (this.current <= this.to) {
	      return { done: false, value: this.current++ };
	    } else {
	      return { done: true };
	    }
	  }
	};
	
	for (let num of range) {
	  alert(num); // 1, затем 2, 3, 4, 5
	}

	let arr = Array.from(range);
alert(arr); // 1,2,3,4,5 (преобразование массива через toString работает)

let arr12 = Array.from(range, num => num * num);

alert(arr12); // 1,4,9,16,25


// Здесь мы используем Array.from, чтобы превратить строку в массив её элементов:

// let str = '𝒳😂';

// // разбивает строку на массив её элементов
// let chars = Array.from(str);

// alert(chars[0]); // 𝒳
// alert(chars[1]); // 😂
// alert(chars.length); // 2
// alert(chars);


// let str = '𝒳😂';

// let chars = []; // Array.from внутри себя выполняет тот же цикл
// for (let char of str) {
//   chars.push(char);
// }

// alert(chars);

// function slice(str, start, end) {
//   return Array.from(str).slice(start, end).join('');
// }

// let str = '𝒳😂𩷶';

// alert( slice(str, 1, 3) ); // 😂𩷶

// // а вот встроенный метод не поддерживает суррогатные пары
// alert( str.slice(1, 3) ); // мусор (две части различных суррогатных пар)