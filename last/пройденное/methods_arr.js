// let arr = ["I", "go", "home"];

// delete arr[1]; // удалить "go"

// alert( arr[1] ); // undefined

// // теперь arr = ["I",  , "home"];
// alert( arr.length ); // 3

// Вроде бы, элемент и был удалён, но при проверке оказывается, что массив всё ещё имеет 3 элемента arr.length == 3. Это нормально, потому что всё, что делает delete obj.key – это удаляет значение с данным ключом key.

// arr.splice(index[, deleteCount, elem1, ..., elemN])

// УДАЛЕНИЕ ЭЛЕМЕНТА МАССИВА!
// let arr = ["Я", "ИЗУЧАЮ", "JavaScript"];

// arr.splice(1, 1);
// alert( arr );

// Удаление и замена элементов!!!

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// arr.splice(0, 3, "Davai", "Dancing");
// alert( arr );

// УДАЛЕНИЕ ЭЛЕМЕНТОВ МАССИВА И ПРИСВОЕНИЕ ИХ НОВОЙ ПЕРЕМЕННОЙ(возврат удаленных элементов)!!!
// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// let removed = arr.splice(0, 2);

// alert( removed );

// Метод splice также может вставлять элементы без удаления, для этого достаточно установить deleteCount в 0:

// let arr = ["I", "Learning", "JavaScript"];

// arr.splice(2,0, "difficult", "language");

// alert( arr );



// Отрицательные индексы разрешены!!!

// let arr = [1, 2, 5];

// // начиная с индекса -1 (перед последним элементом)
// // удалить 0 элементов,
// // затем вставить числа 3 и 4
// arr.splice(-1, 0, 3, 4);

// alert( arr ); // 1,2,3,4,5

// let arr = ['t', 'e', 's', 't'];

// alert( arr.slice(1,3) );
// alert( arr.slice(-2) );

// Можно вызвать slice и вообще без аргументов: arr.slice() создаёт копию массива arr. Это часто используют, 
// чтобы создать копию массива для дальнейших преобразований, которые не должны менять исходный массив.

// let arr = [1, 2];

// // создать массив из: arr и [3,4]
// alert( arr.concat([3, 4]) ); // 1,2,3,4

// // создать массив из: arr и [3,4] и [5,6]
// alert( arr.concat([3, 4], [5, 6]) ); // 1,2,3,4,5,6

// // создать массив из: arr и [3,4], потом добавить значения 5 и 6
// alert( arr.concat([3, 4], 5, 6) ); // 1,2,3,4,5,6


// let arr = [1, 2];

// let arrayLike = {
//   0: "что-то",
//   length: 1
// };

// alert( arr.concat(arrayLike) ); // 1,2,[object Object]

// Symbol.toPrimitive

// let arr = [1, 2,3,4,5];

// let arrayLike = {
//   0: "что-то",
//   1: "ещё",
//   [Symbol.isConcatSpreadable]: true,
//   length: 2
// };

// alert( arr.concat(arrayLike) ); // 1,2,что-то,ещё

// Перебор: forEach - Метод arr.forEach позволяет запускать функцию для каждого элемента массива.

// ["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
//     alert(`${item} имеет позицию ${index} в ${array}`);
//   });


// indexOf/lastIndexOf и includes
// let arr = [1, 0, false];

// alert( arr.indexOf(0) ); // 1
// alert( arr.indexOf(false) ); // 2
// alert( arr.indexOf(null) ); // -1

// alert( arr.includes(1) ); // true

// Обратите внимание, что методы используют строгое сравнение ===. Таким образом, если мы ищем false, он находит именно false, а не ноль.
// const arr = [NaN];
// alert( arr.indexOf(NaN) ); // -1 (должен быть 0, но === проверка на равенство не работает для NaN)
// alert( arr.includes(NaN) );// true (верно)

// find и findIndex
// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   let user = users.findIndex(userName => userName.id === 1);
  
//   alert(user); // 0

  // let users2 = [
  //   {id: 1, name: "Вася"},
  //   {id: 2, name: "Петя"},
  //   {id: 3, name: "Маша"}
  // ];
  
  // let user2 = users2.find(item => item.id === 1);
  
  // // alert(user2); // Вася

  // console.log(user2);

//   FILTER - METHODS:

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   // возвращает массив, состоящий из двух первых пользователей
//   let someUsers = users.filter(item => item.id < 3);
  
//   alert(someUsers.length); // 2

// map - это метод, вызывающий функцию для каждого элемента массива,
// и возращающий массив результатов выполнения этой функции.

// let lenghts = ["bilbo", "Gandalf", "Nazgul"].map(item => item.length);

// alert( lenghts );

// Вызов arr.sort() сортирует массив на месте, меняя в нём порядок элементов.

// let arr = [1, 2, 15];

// arr.sort();

// alert( arr );

// По умолчанию элементы сортируются как строки.
// Буквально, элементы преобразуются в строки при сравнении. Для строк применяется лексикографический порядок, и действительно выходит, что "2" > "15".
// Чтобы использовать наш собственный порядок сортировки, нам нужно предоставить функцию в качестве аргумента arr.sort().

// функция должна для пары значений возвращать:

// function compare(a,b) {
//   if (a > b) return 1; // если первое значение больше второго
//   if (a == b) return 0; // если равны
//   if (a < b) return -1; // если первое значение меньше второго
// }

// Пример сортировки чисел:

// function compareNumeric(a,b) {
//   if (a > b) return 1; // если первое значение больше второго
//   if (a == b) return 0; // если равны
//   if (a < b) return -1; // если первое значение меньше второго
// }
// let arr = [1, 2, 4, 8, 15];

// arr.sort(compareNumeric);

// alert( arr );

// просмотр того, какие элементы сравниваются
// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + " <> " + b );
//   return a - b;
// });

// более короткий вариант сортировки!
// let arr = [ 1, 2, 15 ];

// arr.sort(function(a, b) { return a - b; });

// alert(arr);  // 1, 2, 15

// let arr = [1, 2, 15];

// arr.sort((a, b) => a-b);

// alert( arr );

// Для строк:

// let countries = ['Österreich', 'Andorra', 'Vietnam'];

// alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (неправильно)

// alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (правильно!)

// let arr = [1, 2, 3, 4, 5];
// arr.reverse();

// alert( arr ); // 5,4,3,2,1


// method - split; получение из строки массива
// let str = 'Ваня, Иштван, Оля';

// let arr = str.split(',');
// console.log(arr);

// let arrTwo = str.split(',', 2);
// console.log(arrTwo);

// let arr = ['Ваня', 'Иштван', 'Оля'];

// let str = arr.join(';')

// console.log( str );


// let arrTwo = ['Ваня', 'Иштван', 'Оля'];

// console.log(String(arrTwo));


// reduce / reduceRight

// let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

// let array = [1, 2, 3, 4, 5];

// let result = array.reduce((sum, current) => sum + current, 0);

// alert( result );

// Array.isArray - метод позволяет отличить массив от объекта

// alert(Array.isArray({})); // false

// alert(Array.isArray([])); // true




// Большинство методов поддерживают «thisArg»

// let army = {
//   minAge: 18,
//   maxAge: 27,
//   canJoin(user) {
//     return user.age >= this.minAge && user.age < this.maxAge;
//   }
// };

// let users = [
//   {age: 16},
//   {age: 20},
//   {age: 23},
//   {age: 30}
// ];

// // найти пользователей, для которых army.canJoin возвращает true
// let soldiers = users.filter(army.canJoin, army);

// alert(soldiers.length); // 2
// // alert(soldiers[0].age); // 20
// alert(soldiers[1].age); // 23


// Итого:
// Шпаргалка по методам массива:

// Для добавления/удаления элементов:

// push (...items) – добавляет элементы в конец,
// pop() – извлекает элемент с конца,
// shift() – извлекает элемент с начала,
// unshift(...items) – добавляет элементы в начало.
// splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
// slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.
// Для поиска среди элементов:

// indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
// includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
// find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
// findIndex похож на find, но возвращает индекс вместо значения.
// Для перебора элементов:

// forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.
// Для преобразования массива:

// map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
// sort(func) – сортирует массив «на месте», а потом возвращает его.
// reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
// split/join – преобразует строку в массив и обратно.
// reduce/reduceRight(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.
// Дополнительно:

// Array.isArray(arr) проверяет, является ли arr массивом.
// Обратите внимание, что методы sort, reverse и splice изменяют исходный массив.

// DZ!

// function camelize(str) {
//   let arr = str.split('-');
  
//   if (arr[0] == '') {
//   arr.shift(0)
//   }
  
//   arr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
//   }

//   alert(camelize('-webkit-transition'));

/////////////////////////////////////////////////

// ////////////////////////////////// 2я задача!!!
// function filterRange(arr, a, b) {
//   return arr.filter(item => ( a <= item && item <= b ));
// }

// let arr = [1, 3, 5, 8, 9, 4];
// let filtered = filterRange(arr, 1, 6);

// alert(filtered);
// alert(arr);


// ..........3я задача................................

// function filterRangePlace(arr, a, b) {

//   for(i=0; i < arr.length; i++) {

//     let val = arr[i];
//     if (val < a || val > b) {
//     arr.splice(i, 1);
//     i--;
//     }
//   }
// }
// let arr = [5, 2, 3, 4, 9, 7, 8, 1];

// filterRangePlace(arr, 1, 4);

// alert(arr);
