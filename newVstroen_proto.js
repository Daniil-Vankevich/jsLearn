// Таким образом, когда вызывается obj.toString(), метод берётся из Object.prototype.

// Мы можем проверить это так:

// let obj = {};

// alert(obj.__proto__ === Object.prototype); // true
// // obj.toString === obj.__proto__.toString === Object.prototype.toString
// // Обратите внимание, что по цепочке прототипов выше Object.prototype больше нет свойства [[Prototype]]:

// alert(Object.prototype.__proto__); // null


// ..........................................

// Давайте проверим прототипы:

// let arr = [1, 2, 3];

// // наследует ли от Array.prototype?
// alert( arr.__proto__ === Array.prototype ); // true

// // затем наследует ли от Object.prototype?
// alert( arr.__proto__.__proto__ === Object.prototype ); // true

// // и null на вершине иерархии
// alert( arr.__proto__.__proto__.__proto__ ); // null
// Некоторые методы в прототипах могут пересекаться, например, у Array.prototype есть свой метод toString, который выводит элементы массива через запятую:

// let arr = [1, 2, 3]
// alert(arr); // 1,2,3 <-- результат Array.prototype.toString


// .........................................

// function f() {}

// alert(f.__proto__ == Function.prototype); // true
// alert(f.__proto__.__proto__ == Object.prototype); // true, наследует от Object


// ..........................................


// Самое сложное происходит со строками, числами и булевыми значениями.

// Как мы помним, они не объекты. Но если мы попытаемся получить доступ к их свойствам, то тогда будет создан временный объект-обёртка с использованием встроенных конструкторов String, Number и Boolean, который предоставит методы и после этого исчезнет.

// Эти объекты создаются невидимо для нас, и большая часть движков оптимизирует этот процесс, но спецификация описывает это именно таким образом. Методы этих объектов также находятся в прототипах, доступных как String.prototype, Number.prototype и Boolean.prototype.

// .........................................

// Изменение встроенных прототипов

// String.prototype.show = function() {
//   alert(this);
// };

// "BOOM!".show(); // BOOM!

// .........................................

// В современном программировании есть только один случай, в котором одобряется изменение встроенных прототипов. Это создание полифилов.

// Полифил – это термин, который означает эмуляцию метода, который существует в спецификации JavaScript, но ещё не поддерживается текущим движком JavaScript.

// Тогда мы можем реализовать его сами и добавить во встроенный прототип.

// Например:

// if (!String.prototype.repeat) { // Если такого метода нет
//   // добавляем его в прототип

//   String.prototype.repeat = function(n) {
//     // повторить строку n раз

//     // на самом деле код должен быть немного более сложным
//     // (полный алгоритм можно найти в спецификации)
//     // но даже неполный полифил зачастую достаточно хорош для использования
//     return new Array(n + 1).join(this);
//   };
// }

// alert( "La".repeat(3) ); // LaLaLa

// ..........................................

// В главе Декораторы и переадресация вызова, call/apply мы говорили о заимствовании методов.

// Это когда мы берём метод из одного объекта и копируем его в другой.

// Некоторые методы встроенных прототипов часто одалживают.

// Например, если мы создаём объект, похожий на массив (псевдомассив), мы можем скопировать некоторые методы из Array в этот объект.

// Пример:

// let obj = {
//   0: "Hello",
//   1: "world!",
//   length: 2,
// };

// obj.join = Array.prototype.join;

// alert( obj.join(',') ); // Hello,world!
// Это работает, потому что для внутреннего алгоритма встроенного метода join важны только корректность индексов и свойство length, он не проверяет, является ли объект на самом деле массивом. И многие встроенные методы работают так же.

// Альтернативная возможность – мы можем унаследовать от массива, установив obj.__proto__ как Array.prototype, таким образом все методы Array станут автоматически доступны в obj.

// Но это будет невозможно, если obj уже наследует от другого объекта. Помните, мы можем наследовать только от одного объекта одновременно.

// Заимствование методов – гибкий способ, позволяющий смешивать функциональность разных объектов по необходимости.