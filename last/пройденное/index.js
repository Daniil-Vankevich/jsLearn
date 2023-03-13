/*(function(hello) {
    'use strict';
  
    alert('Привет, мир, Я - JavaScript!');
  })()*/

  /*let name1 = "Jone";
  let admin = "Egor";
  admin = name1;
  alert(admin);*/
  
 /* let name = "Иван";

  // Вставим переменную
  alert( `Привет, ${name}!` ); // Привет, Иван!
  
  // Вставим выражение
  alert( `результат: ${1 + 2}` );*/ // результат: 3

/*let name1 = "Ilya";

// выражение - число 1
alert( `hello ${1}` ); // hello 1

// выражение - строка "name"
alert( `hello ${"name"}` ); // hello name

// выражение - переменная, вставим её в строку
alert( `hello ${name1}` ); // hello Ilya */

/*let age = prompt('Сколько тебе лет?', 100);

alert(`Тебе ${age} лет!`); // Тебе 100 лет!

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (ошибка чтения числа на месте символа "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

*/

/*let isBoss = confirm("Ты здесь главный?");

alert( isBoss ); // true, если нажата OK 

let userName = prompt(`Как тебя зовут?`, "");
alert(`Тебя зовут ${userName}!`);

let value = false;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number

let age = Number("Любая строка вместо числа");

alert(age); // NaN, преобразование не удалось */

let x = 1;

x = -x;
alert( x ); // -1, применили унарный минус

let s = "моя" + " строка ";
alert(s); // моястрока