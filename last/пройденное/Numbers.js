// let milliard = 1e29;

// alert( 1.29e7)

// let ms = 1e-6; // шесть нулей, слева от 1

// alert( 1e-6 );

// alert( 0xff ); // 255
// alert( 0xFF ); // 255 (то же самое, регистр не имеет значения)


// let a = 0b11111111; // бинарная форма записи числа 255
// let b = 0o377; // восьмеричная форма записи числа 255

// alert( a == b ); // true, с двух сторон число 255

// let num = 255;

// alert( num.toString(16) );  // ff
// alert( num.toString(2) );   // 11111111

// let num2 = 1.2347525252;

// alert( Math.floor(num2 * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

// let num3 = 12.3485785;
// alert( num3.toFixed(3) ); // "12.3"

// let num4 = 12.36;
// alert( num4.toFixed(1) ); // "12.4"

// let num5 = 12.34;
// alert( num5.toFixed(5) ); // "12.34000", добавлены нули, чтобы получить 5 знаков после запятой

// let sum = 0.1 + 0.2;
// alert( sum.toFixed(2) ); // 0.30

// let sum1 = 0.1 + 0.2;
// alert( +sum1.toFixed(2) ); // 0.3

// alert( isNaN(NaN) ); // true isNaN(value) преобразует значение в число и проверяет является ли оно NaN
// alert( isNaN("str") ); // true

// alert( isFinite("15") ); // true      isFinite(value) преобразует аргумент в число и возвращает true, если оно является обычным числом, т.е. не NaN/Infinity/-Infinity:
// alert( isFinite("str") ); // false, потому что специальное значение: NaN
// alert( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

// let num = +prompt("Enter a number", '');

// // вернёт true всегда, кроме ситуаций, когда аргумент - Infinity/-Infinity или не число
// alert( isFinite(num) );

// alert( Number.isNaN(NaN) ); // true
// alert( Number.isNaN("str" / 2) ); // true

// // Обратите внимание на разный результат:
// alert( Number.isNaN("str") ); // false, так как "str" является строкой, а не числом
// alert( isNaN("str") ); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN

// alert( Number.isFinite(123) ); // true
// alert( Number.isFinite(Infinity) ); // false
// alert( Number.isFinite(2 / 0) ); // false

// // Обратите внимание на разный результат:
// alert( Number.isFinite("123") ); // false, так как "123" является строкой, а не числом
// alert( isFinite("123") ); // true, так как isFinite сначала преобразует строку "123" в число 123

// alert( +"100px" ); // NaN

// alert( parseInt('100px') ); // 100
// alert( parseFloat('12.5em') ); // 12.5

// alert( parseInt('12.3') ); // 12, вернётся только целая часть
// alert( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

// alert( parseInt('a123') ); // NaN, на первом символе происходит остановка чтения

// alert( parseInt('0xff', 16) ); // 255
// alert( parseInt('ff', 16) ); // 255, без 0x тоже работает

// alert( parseInt('2n9c', 36) ); // 123456

// alert( Math.random() ); // 0.1234567894322
// alert( Math.random() ); // 0.5435252343232
// alert( Math.random() ); // ... (любое количество псевдослучайных чисел)

// alert( Math.max(3, 5, -10, 0, 1) ); // 5
// alert( Math.min(1, 2) ); // 1

// alert( Math.pow(2, 10) ); // 2 в степени 10 = 1024

// Задача№6 из раздела про число!!!
// function randomInteger(min, max) {
//     // случайное число от min до (max+1)
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
//   }
  
//   alert( randomInteger(1, 3) );

// Задача№1 из раздела про число!!!
// let sum;

// let a = +prompt("Введите первое число", '');
// let b = +prompt("Введите второе число", '');
// sum = a + b;
// alert( sum );


// Задача№3 из раздела про число!!!
// function readNumber() {
//   let num;

//  do {
//   num = prompt("Введите число", '0');
//  } while (!isFinite(num));

//  if (num === null || num === '') return null;

//  return +num;
// }

// alert( `Число: ${readNumber()}`);

// Задача№4 из раздела про число!!!
// Этот цикл – бесконечный. Он никогда не завершится, почему?
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// Ни одно из этих чисел не равно 10. Это происходит из-за потери точности, при прибавлении таких дробей как 0.2.

// Задача№5 из раздела про число!!!

function random(min, max) {
  return min + Math.random()*(max-min);
}

alert( random(1,5) );
alert( random(1,5) );
alert( random(1,5) );