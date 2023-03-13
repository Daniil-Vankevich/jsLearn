// let arr = ["Apple", "Orange", "Sliva", "Malina"];
// // arr[2] = 'Grusha';
// // arr[3] = 'Limon';
// // alert( arr[0] );
// // alert( arr[1] );
// // alert( arr[2] );
// // alert( arr[3] );
// alert( arr.length);
// alert( arr );

// let ar = () => {

// };

// function bar() {

// }

// let square = function(numvber) {

// };

// // разные типы значений
// let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];

// // получить элемент с индексом 1 (объект) и затем показать его свойство
// alert( arr[1].name ); // Джон

// // получить элемент с индексом 3 (функция) и выполнить её
// arr[3](); // привет

// let fruits = ["Apple", "Orange", "Plum"];
// alert( fruits[fruits.length-1] ); // Plum

// let fruits1 = ["Apple", "Orange", "Plum"];
// // то же самое, что и fruits[fruits.length-1]
// alert( fruits1.at(-1) ); // Plum

// УДАЛЕНИЕ ПОСЛЕДНЕГО ЭЛЕМЕНТА ИЗ МАССИВА! И ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА В МАССИВ!!!

// let fruits = ["Яблоко", "Апельсин", "Груша"];

// alert ( fruits.pop() );
// alert ( fruits );

// fruits.push("Груша");

// alert ( fruits );


// УДАЛЕНИЕ ПЕРВОГО ЭЛЕМЕНТА ИЗ МАССИВА! И ДОБАВЛЕНИЕ НОВОГО ЭЛЕМЕНТА В МАССИВ!!!

// let fruits = ["Яблоко", "Апельсин", "Груша"];

// alert( fruits.shift() ); // удаляем Яблоко и выводим его

// alert( fruits ); // Апельсин, Груша

// let fruits = ["Апельсин", "Груша"];

// fruits.unshift('Яблоко');

// alert( fruits ); // Яблоко, Апельсин, Груша

// let fruits = ["Яблоко"];

// fruits.push("Апельсин", "Груша");
// fruits.unshift("Ананас", "Лимон");

// // ["Ананас", "Лимон", "Яблоко", "Апельсин", "Груша"]
// alert( fruits );


// let fruits = ["Банан"]

// let arr = fruits; // копируется по ссылке (две переменные ссылаются на один и тот же массив)

// alert( arr === fruits ); // true

// arr.push("Груша"); // массив меняется по ссылке

// alert( fruits ); // Банан, Груша - теперь два элемента


// // СПОСОБЫ ПЕРЕБОРА ЭЛЕМЕНТОВ!!!
// let array = ["apple", "orange"];

// for (let i=0; i < array.length; i++) {
//     alert( array[i] );
// }

// let fruits = ["Яблоко", "Апельсин", "Слива"];

// // проходит по значениям - ЭТО НОВЫЙ СПОСОБ ПЕРЕБОРА!
// for (let fruit of fruits) {
//   alert( fruit );
// }
// // Технически, так как массив является объектом, можно использовать и вариант for..in:
// let arr = ["Яблоко", "Апельсин", "Груша"];

// for (let key in arr) {
//   alert( arr[key] ); // Яблоко, Апельсин, Груша
// }
// // Но на самом деле это – плохая идея. Существуют скрытые недостатки этого способа:

// // Цикл for..in выполняет перебор всех свойств объекта, а не только цифровых.
// // Цикл for..in оптимизирован под произвольные объекты, не массивы, и поэтому в 10-100 раз медленнее. Увеличение скорости выполнения может иметь значение только при возникновении узких мест. Но мы всё же должны представлять разницу.

// // В общем, не следует использовать цикл for..in для массивов.

// // НЕМНОГО О "Length";
// let fruits = [];
// fruits[123] = "Яблоко";

// alert( fruits.length ); // 124

// let arr = [1, 2, 3, 4, 5];

// arr.length = 2; // укорачиваем до двух элементов
// alert( arr ); // [1, 2]

// arr.length = 5; // возвращаем length как было
// alert( arr[3] ); // undefined: значения не восстановились
// // Таким образом, самый простой способ очистить массив – это arr.length = 0;.

// let arr = new Array(2); // создастся ли массив [2]?

// alert( arr[0] ); // undefined! нет элементов.

// alert( arr.length ); // length 2

// Как мы видим, в коде, представленном выше, в new Array(number) все элементы равны undefined.

// Чтобы избежать появления таких неожиданных ситуаций, мы обычно используем квадратные скобки, если, конечно, не знаем точно, что по какой-то причине нужен именно Array.

// // МНОГОМЕРНЫЙ МАССИВ!!!!!
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// alert( matrix[1][2] ); // 5, центральный элемент

// alert (`скорее всего будет наверное 5 может быть = ${matrix[1][1]}` );

// toString!!! Массивы по-своему реализуют метод toString, который возвращает список элементов, разделённых запятыми.

// let arr = [1, 2, 3];

// alert( arr ); // 1,2,3
// alert( arr.length );
// alert( String(arr) === '1,2,3' ); // true

// alert( [] + 1 ); // "1"
// alert( [1] + 1 ); // "11"
// alert( [1,2] + 1 ); // "1,21"

// // Массивы не имеют ни Symbol.toPrimitive, ни функционирующего valueOf, они реализуют только преобразование toString, таким образом, здесь [] становится пустой строкой, [1] становится "1", а [1,2] становится "1,2".
// alert( "" + 1 ); // "1"
// alert( "1" + 1 ); // "11"
// alert( "1,2" + 1 ); // "1,21"
// Когда бинарный оператор плюс "+" добавляет что-либо к строке, он тоже преобразует это в строку, таким образом:

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length); // ?

// DZ!!!!!
// let styles = ["Jas", "bluz"];

// styles.push("Rock and Roll");
// alert( styles);
// styles[Math.floor((styles.length-1)/2)] = "Classic";
// alert( styles );
// alert( styles.shift());
// styles.unshift("Rap", "Reggi");
// alert( styles);
// ______________________________
// Сумма введенных чисел!

// function sumInput() {
//     let arr = [];
//     let numb;
//     while (true) {
//         numb = prompt("Введите число", '');
//         if (numb === "" || numb === null || !isFinite(numb)) break;
//         arr.push(+numb);    
//     }
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
           
//     }
//     return sum;  
// }
// alert( sumInput() );

//СПОСОБЫ ПЕРЕБОРА ЭЛЕМЕНТОВ МАССИВА: let i = 0; i < arr.length; i++
// let number of arr
// let key in arr

function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
  
    for (let item of arr) { // для каждого элемента массива
      partialSum += item; // добавляем значение элемента к partialSum
      maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
      if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
  
    return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
  alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
  alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
  alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
  alert( getMaxSubSum([1, 2, 3]) ); // 6
  alert( getMaxSubSum([-1, -2, -3]) ); // 0
