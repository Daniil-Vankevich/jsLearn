// два способа мышления:

// итеративный способ цикл for:

// function pow(x, n) {
// 	let result = 1;
// 	 // умножаем result на x n раз в цикле
// 	for (let i = 0; i < n; i++) {
// 		result *= x;
// 	}
// 	return result;
// }

// console.log( pow(2, 3));

// Рекурсивный способ: упрощение задачи и вызов функцией самой себя:

// function pow(x, n) {
// 	if (n==1) {
// 		return x;
// 	} else {
// 		return x*pow(x, n -1);
// 	}
// }
// console.log(pow(2, 3));

// Мы можем представить pow(x, n) в виде: x * pow(x, n - 1). Что в математике записывается как: xn = x * xn-1. Эта ветвь – шаг рекурсии: мы сводим задачу к более простому действию (умножение на x) и более простой аналогичной задаче (pow с меньшим n). Последующие шаги упрощают задачу всё больше и больше, пока n не достигает 1.

// можно использовать ? вместо условия if

// function pow(x, n) {
// 	return (n==1) ? x : (x * pow(x, n-1));
// }
// console.log(pow(2, 3));

// const fruits = ["banaan", "Orange", "Apple"];

// let result = Array.isArray(fruits);
// console.log(result);


// Рекурсивные обходы...................

// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // Функция для подсчёта суммы зарплат

// function sumSalaries(department) {
// 	if (Array.isArray(department)) { // случай (1) простой» отдел с массивом – тогда мы сможем суммировать зарплаты в простом цикле
// 		return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
// 	} else { // случай (2) объект с N подотделами – тогда мы можем сделать N рекурсивных вызовов, чтобы получить сумму для каждого из подотделов, и объединить результаты.
// 		let sum = 0;
// 		for (let subdep of Object.values(department)) {
// 			sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
// 		}
// 		return sum;
// 	}
// }
// console.log(sumSalaries(company));






// Рекурсивные структтуры -> СВЯЗАННЫЙ СПИСОК!..............................


// Элемент связанного списка определяется рекурсивно как объект с: value, next – свойство, ссылающееся на следующий элемент связанного списка или null, если это последний элемент.

// Пример:

// let list = {
// 	value: 1,
// 	next: {
// 		value: 2,
// 		next: {
// 			value: 3,
// 			next: {
// 				value: 4,
// 				next:  null,
// 			}
// 		}
// 	}
// };
// console.log(list.value);
// console.log(list.next.value);
// console.log(list.next.next.next.value);

// Альернативный код для создания связанного списка...............

// let list1 = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };

// // Список можно легко разделить на несколько частей и впоследствии объединить обратно:

// let secondList = list1.next.next;
// list1.next.next = null;

// // для объединения:

// list1.next.next = secondList;

// вставка и удаление элемента связанного списка:

// let list1 = { value: 1 };
// list1.next = { value: 2 };
// list1.next.next = { value: 3 };
// list1.next.next.next = { value: 4 };


// list1 = {value: "new item", next: list1};

// console.log(list1.next.next.next.value);

// // Чтобы удалить элемент из середины списка, нужно изменить значение next предыдущего элемента:

// list1.next = list1.next.next;

// console.log(list1);




// __________________________________


// HomeWork..........................

// 1) использование цикла:

// function sumTo(n) {
// 	let sum = 0;
// 	for( let i = 0; i <= n; i++) {
// 		sum+= i;
// 	}
// 	return sum;
// }

// console.log( sumTo(100));

// // 2) использование рекурсии:

// function SumRec(n) {
// 	if(n==1) return 1;
// 	return n + SumRec(n-1);
// }
// console.log(SumRec(100));

// // 3) решение по формуле геометрической прогрессии:

// function sumToo(n) {
// 	return n * (n + 1) / 2;
// }
// console.log(sumToo(100));



// факториал:........................

// function factorial(n) {
// 	if(n==1) return 1;
// 	return n * factorial(n - 1);
// }
// console.log(factorial(4));

// числа Фибоначчи (1) через рекурсию....

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// fib(77); // вычисляется очень долго

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// }

// alert( fib(3) ); // 2
// alert( fib(7) ); // 13
// alert( fib(77) ); // 5527939700884757

// Вывод односвязного списка: через условие

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   let tmp = list;

//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }

// }

// printList(list);


// Вывод односвязного списка: через рекурсию

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {

//   console.log(list.value); // выводим текущий элемент

//   if (list.next) {
//     printList(list.next); // делаем то же самое для остальной части списка
//   }

// }

// printList(list);


// Вывод односвязного списка в обратном порядке с использованием цикла)

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printReverseList(list) {
//   let arr = [];
//   let tmp = list;

//   while (tmp) {
//     arr.push(tmp.value);
//     tmp = tmp.next;
//   }

//   for (let i = arr.length - 1; i >= 0; i--) {
//     alert( arr[i] );
//   }
// }

// printReverseList(list);

// Вывод односвязного списка в обратном порядке с использованием цикла;

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function printReverseList(list) {

  if (list.next) {
    printReverseList(list.next);
  }

  console.log(list.value);
}

printReverseList(list);
