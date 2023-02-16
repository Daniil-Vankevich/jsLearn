// const d1 = new Date();
// // Sat Feb 04 2023 12:57:50 GMT+0300 (Москва, стандартное время)
// console.log(d1);

// // миллисекунды

// const d2 = new Date(1675504765000);
// console.log(d2);

// //явное задание времени 
// const d3 = new Date(2021, 9, 6, 11, 15);
// console.log(typeof d3);
// console.log(d3);

// //явное задание времени 
// const d4 = new Date('2021 Sep 5');
// console.log(typeof d4);
// console.log(d4);

// // ........строку в объект.....................

// const d5 = new Date('Sat Feb 04 2023 12:57:50 GMT+0300');
// console.log(d5);

// // показывает время по мериадиану(Гринвичу)
// document.querySelector('.out-2').innerHTML = d5.toUTCString();

// // московское время GMT+0300
// document.querySelector('.out-3').innerHTML = d5;

// // дата без времени
// document.querySelector('.out-4').innerHTML = d5.toDateString();

// // разделение даты:
// document.querySelector('.out-5').innerHTML = d5.toISOString();

// как может отличаться время:
// 2021-09-03  2021-03-09  2021/04/09 PM AM

// получение из объекта: Sat Feb 04 2023 14:05:17 GMT+0300 (Москва, стандартное время)... нужных нам данных!!!




// Получение компонентов даты .getFullYear и тд и тп......

// const d20 = new Date();
// // Методы, которые позводяют вытащить нужные блоки данных.....
// console.log(d20.getFullYear()); 

// console.log(d20.getMonth()); // на выводе получается 1й месяц(несмотря на то что сейчас февраль), отсчет месяцев в js с нуля(0) до (11);

// console.log(d20.getDate()); //--текущая дата от 1 до 31

// console.log(d20.getDay()); // выводит текущий день недели начиная с воскресенья (от 0 до 6) 6й день это суббота, воскресенье 0.

// console.log(d20.getHours()); // часы от 0 до 24..

// console.log(d20.getMinutes()); // минуты от 0 до 59..

// console.log(d20.getSeconds()); // секунды от 0 до 59

// console.log(d20.getTime()); // time in unixTime

// console.log(Date.now()); // time in unixTime


// получение определенной даты: 2023 '02' '04' 'Saturday' 17 40

// function addLeadingZero(d) {
// 	return (d < 10) ? '0' + d : d;
// }
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// function getUserTime(t = new Date()) {
// 	let Y = t.getFullYear();
// 	let M = addLeadingZero(t.getMonth() + 1);
// 	let D = addLeadingZero(t.getDate());
// 	let Day = days[t.getDay()];
// 	let h = addLeadingZero(t.getHours());
// 	let m = addLeadingZero(t.getMinutes());

// 	console.log(Y, M, D, Day, h, m);
// 	return `${Y}.${M}.${D} ${h}:${m} (${Day})`
// }

// console.log(getUserTime());

// console.log(new Date().getTimezoneOffset());


// установка компонентов даты...........

//...................................

// Автоисправление даты

// let date = new Date(2013, 0, 32);
// alert(date);
//...................................

// let date = new Date(2016, 1, 28);

// date.setDate(date.getDate() + 2)

// alert(date);


// получение даты "спустя 70 секунд с текущего момента!!!!!"

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// alert(date);


// ..........................................


// let date = new Date(2016, 0, 2); // 2 Jan 2016

// date.setDate(1); // задать первое число месяца
// alert( date );

// date.setDate(0); // первый день месяца -- это 1, так что выводится последнее число предыдущего месяца
// alert( date ); // 31 Dec 2015



// Преобразование к числу, разность дат:

// Если объект Date преобразовать в число, то получим таймстамп по аналогии с date.getTime()

// let date = new Date();
// alert(+date); // количество миллисекунд, то же самое, что date.getTime()


// let start = new Date(); // начинаем отсчёт времени

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date(); // заканчиваем отсчёт времени

// alert( `Цикл отработал за ${end - start} миллисекунд` );


// ......................................

// Date.now() возвращает текущую метку времени, семантически он эквивалентен new Date().getTime(), однако метод не создает промежуточный объект Date

// let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // заканчиваем отсчёт времени

// alert( `Цикл отработал за ${end - start} миллисекунд` ); // вычитаются числа,


// ..........................................


// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// alert( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
// alert( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );


// Для получения наиболее достоверных результатов тестирования производительности весь набор бенчмарков нужно запускать по нескольку раз.

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// // bench(diffSubtract) и bench(diffGetTime) поочерёдно запускаются 10 раз
// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// alert( 'Итоговое время diffSubtract: ' + time1 );
// alert( 'Итоговое время diffGetTime: ' + time2 );

// .......................................

// Разбор строки с датой:

// Формат строки должен быть следующим: YYYY-MM-DDTHH:mm:ss.sssZ, где:

// YYYY-MM-DD – это дата: год-месяц-день.
// Символ "T" используется в качестве разделителя.
// HH:mm:ss.sss – время: часы, минуты, секунды и миллисекунды.
// Необязательная часть 'Z' обозначает часовой пояс в формате +-hh:mm. Если указать просто букву Z, то получим UTC+0.
// Возможны и более короткие варианты, например, YYYY-MM-DD или YYYY-MM, или даже YYYY.


// Вызов Date.parse(str) обрабатывает строку в заданном формате и возвращает таймстамп (количество миллисекунд с 1 января 1970 года UTC+0). Если формат неправильный, возвращается NaN.

// let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

// alert(ms); // 1327611110417 (таймстамп)



// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );

// alert(date);

let date = new Date();
alert(date.getTime());

let date1 = new Date(1675525077497);
alert(date1);


