// let map = new Map();

// map.set("1", "str1");
// map.set(1, "num1");
// map.set(true, "bool1");

// alert(map.get("1"));
// alert(map.get(1));
// alert(map.get(true));

// alert(map.size);

// Как мы видим, в отличие от объектов, ключи не были приведены к строкам. Можно использовать любые типы данных для ключей


// Map может использовать объекты в качестве ключа!

// let john = { name: "John"};

// // сохранение количества посещений для каждого пользователя

// let visitsCountMap = new Map();

// // объект джон это ключ для значения в объекте Мэп
// visitsCountMap.set(john, 123);
// alert(visitsCountMap.get(john));


// Использование объектов в качестве ключей – одна из наиболее заметных и важных функций Map. Это то что невозможно для Object. Строка в качестве ключа в Object – это нормально, но мы не можем использовать другой Object в качестве ключа в Object.Давайте попробуем заменить Map на Object:

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}; // попробуем использовать объект

// visitsCountObj[ben] = 234; // пробуем использовать объект ben в качестве ключа
// visitsCountObj[john] = 123; // пробуйем использовать объект john в качестве ключа, при этом объект ben будет замещён

// // Вот что там было записано!
// alert( visitsCountObj["[object Object]"] ); // 123

// Так как visitsCountObj является объектом, он преобразует все ключи Object, такие как john и ben, в одну и ту же строку "[object Object]". Это определенно не то, чего мы хотим.



// цепочка вызовов!:

// let map = new Map();

// map.set("1", "str1")
//    .set(1, "num1")
// 	 .set(true, "bool1");

// alert(map.get("1"));
// alert(map.get(1));
// alert(map.get(true));
// alert(map.size);


// Перебор Map:

// map.keys() – возвращает итерируемый объект по ключам,
// map.values() – возвращает итерируемый объект по значениям,
// map.entries() – возвращает итерируемый объект по парам вида [ключ, значение], этот вариант используется по умолчанию в for..of.

// let recipeMap = new Map([
// 	["огурец", 500],
// 	["помидор", 350],
// 	["лук", 50],
// ]);

// for (let vegetable of recipeMap.keys()) {
// 	alert(vegetable);
// }

// for (let amount of recipeMap.values()) {
// 	alert(amount);
// }


// // // то же самое, что и recipeMap.entries
// for (let entry of recipeMap) {
// 	alert(entry);
// }

// // выполняем функцию для каждой пары (ключ, значение)
// recipeMap.forEach((value, key, map) => {
//   alert(`${key}: ${value}`); // огурец: 500 и так далее
// });


// Object.entries: Map из Object:

// массив пар [ключ, значение]
// let map = new Map([
//   ['1',  'str1'],
//   [1,    'num1'],
//   [true, 'bool1']
// ]);

// alert( map.get('1') ); // str1

// ///////////////////////////////////

// Здесь Object.entries возвращает массив пар ключ-значение: [ ["name","John"], ["age", 30] ]. Это именно то, что нужно для создания Map.

// let obj = {
//   name: "John",
//   age: 30
// };

// let map = new Map(Object.entries(obj));

// alert( map.get("name") ); // John


// ///////////////////////////////////////

// Object.fromEntries: Object из Map

// Мы только что видели, как создать Map из обычного объекта при помощи Object.entries(obj). Есть метод Object.fromEntries, который делает противоположное: получив массив пар вида [ключ, значение], он создаёт из них объект:

// let prices = Object.fromEntries([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4]
// ]);

// // prices = { banana: 1, orange: 2, meat: 4 }

// // alert(prices.orange); // 2

// prices.vegetable = 147;

// // alert(prices.vegetable);

// console.log(prices);




// //////////////////////////////

// Мы можем использовать Object.fromEntries, чтобы получить обычный объект из Map.

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map.entries()); // создаём обычный объект (*)

// // готово!
// // obj = { banana: 1, orange: 2, meat: 4 }

// alert(obj.orange); // 2




// //////////////////////////////////////

// Set

//Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// основные методы объекта Set:
// new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
// set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
// set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
// set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
// set.clear() – удаляет все имеющиеся значения.
// set.size – возвращает количество элементов в множестве.

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set хранит только 3 уникальных значения
// console.log(set.size); // 3

// for (let user of set) {
//   console.log(user); // John (потом Pete и Mary)
// }

// for (let user of set) {
//   console.log(user.name); // John (потом Pete и Mary)
// }



// Перебор объекта Set: for....of and forEach

// let set = new Set(["апельсин", "яблоко", "бананчик"]);

// for (let value of set) {
//   console.log(value);
// }
// set.forEach((value, valueAgain, set) => {
//   console.log(value);
// });

// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());


// Д/З:
// DZZDDZ:

// function unique(arr) {
//   return Array.from (new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert( unique(values) ); // Hare,Krishna,:-O





// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );



// 2й вариант решения:

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join("");
    obj[sorted] = arr[i];
  }

  return Object.values(obj);
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) );




// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// console.log(keys);

// keys.push("more");

// console.log(keys); // name, more







// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set хранит только 3 уникальных значения
// alert(set.size); // 3

// for (let user of set) {
//   alert(user.name); // John (потом Pete и Mary)
// }









// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30,        // под ключом "age" хранится значение 30
// };
// let key = "name";

// console.log(user[key]);