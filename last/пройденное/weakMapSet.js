// let john = { name: "John"};

// let array = [john];

// john = null; // переписываем ссылку на объект.

// console.log( array[0] );
// объект john хранится в массиве, поэтому он не будет удалён сборщиком мусора
// мы можем взять его значение как array[0]


// использование объекта в качестве ключа в Map........................................

// let john = {name: "John"};

// let map = new Map();

// map.set(john, "Higgins");

// john = null; // перезаписали ссылку на объект

// console.log(map.keys());




// WeakMap => слабый мэп.......

// Первое его отличие от Map в том, что ключи в WeakMap должны быть объектами, а не примитивными значениями:

// let weakMap = new WeakMap();

// let obj = {};

// weakMap.set(obj, "okey's");

// weakMap.set("test", "Whoops");

// Теперь, если мы используем объект в качестве ключа и если больше нет ссылок на этот объект, то он будет удалён из памяти (и из объекта WeakMap) автоматически

// let john = { name: "John" };

// let weakMap = new WeakMap();
// weakMap.set(john, "...");

// john = null; // перезаписываем ссылку на объект

// объект john удалён из памяти!

// В WeakMap присутствуют только следующие методы:

// weakMap.get(key)
// weakMap.set(key, value)
// weakMap.delete(key)
// weakMap.has(key)



// пример: дополнительные данные.......

// // 📁 visitsCount.js
// let visitsCountMap = new WeakMap(); // map: пользователь => число визитов

// // увеличиваем счётчик
// function countUser(user) {
//   let count = visitsCountMap.get(user) || 0;
//   visitsCountMap.set(user, count + 1);
// }

// let john = {name: "John"};

// console.log(countUser(john.name));



// применяется для кеширования данных......

// // 📁 cache.js
// let cache = new Map();

// // вычисляем и запоминаем результат
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* тут какие-то вычисления результата для объекта */ obj;

//     cache.set(obj, result);
//   }

//   return cache.get(obj);
// }

// // Теперь используем process() в другом файле:

// // 📁 main.js
// let obj = {/* допустим, у нас есть какой-то объект */};

// let result1 = process(obj); // вычислен результат

// // ...позже, из другого места в коде...
// let result2 = process(obj); // ранее вычисленный результат взят из кеша

// // ...позже, когда объект больше не нужен:
// obj = null;

// alert(cache.size); // 1 (Упс! Объект всё ещё в кеше, занимает память!)

// // 📁 cache.js
// let cache = new WeakMap();

// // вычисляем и запоминаем результат
// function process(obj) {
//   if (!cache.has(obj)) {
//     let result = /* вычисляем результат для объекта */ obj;

//     cache.set(obj, result);
//   }

//   return cache.get(obj);
// }

// // 📁 main.js
// let obj = {/* какой-то объект */};

// let result1 = process(obj);
// let result2 = process(obj);

// // ...позже, когда объект больше не нужен:
// obj = null;

// Нет возможности получить cache.size, так как это WeakMap,
// но он равен 0 или скоро будет равен 0
// Когда сборщик мусора удаляет obj, связанные с ним данные из кеша тоже удаляются




// WeakSet

// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John заходил к нам
// visitedSet.add(pete); // потом Pete
// visitedSet.add(john); // John снова

// // visitedSet сейчас содержит двух пользователей

// // проверим, заходил ли John?
// alert(visitedSet.has(john)); // true

// // проверим, заходила ли Mary?
// alert(visitedSet.has(mary)); // false

// john = null;

// структура данных visitedSet будет очищена автоматически (объект john будет удалён из visitedSet

// Она аналогична Set, но мы можем добавлять в WeakSet только объекты (не примитивные значения).
// Объект присутствует в множестве только до тех пор, пока доступен где-то ещё.
// Как и Set, она поддерживает add, has и delete, но не size, keys() и не является перебираемой.

// Будучи «слабой» версией оригинальной структуры данных, она тоже служит в качестве дополнительного хранилища. Но не для произвольных данных, а скорее для значений типа «да/нет». Присутствие во множестве WeakSet может что-то сказать нам об объекте.

// Наиболее значительным ограничением WeakMap и WeakSet является то, что их нельзя перебрать или взять всё содержимое. Это может доставлять неудобства, но не мешает WeakMap/WeakSet выполнять их главную задачу – быть дополнительным хранилищем данных для объектов, управляемых из каких-то других мест в коде.





// Задачи по теме:


// let messages = [
// 	{text: "Hello", from: "John"},
// 	{text: "How goes?", from: "John"},
// 	{text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// // Два сообщения были прочитаны
// readMessages.add(messages[0]);
// readMessages.add(messages[1]);
// // readMessages содержит 2 элемента

// // ...давайте снова прочитаем первое сообщение!
// readMessages.add(messages[0]);
// // readMessages до сих пор содержит 2 элемента

// // Вопрос: было ли сообщение message[0] прочитано?
// alert("Read message 0: " + readMessages.has(messages[0])); // true

// messages.shift();
// // теперь readMessages содержит 1 элемент (хотя технически память может быть очищена позже)


// Альтернативным решением может быть добавление свойства вида message.isRead=true к сообщению после его прочтения. Так как сообщения принадлежат чужому коду, то это не очень хорошо, но если использовать свойство-символ, то вероятность конфликтов будет небольшой.

// // символьное свойство вместо имени, которое известно только нашему коду
// let isRead = Symbol("isRead");
// messages[0][isRead] = true;


// Для хранения даты мы можем использовать WeakMap:

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let readMap = new WeakMap();

// readMap.set(messages[0], new Date(2017, 1, 1));
// Объект Date мы рассмотрим позднее