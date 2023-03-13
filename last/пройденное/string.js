// Строку можно создать с помощью одинарных, двойных и обратных ковычек.

// let single = 'single-quoted';
// let double = "double-quoted";

// let backticks = `backticks`;

// alert( single );

// let str = `Hello`;

// // получаем первый символ
// alert( str[0] ); // H
// alert( str.at(0) ); // H

// // получаем последний символ
// alert( str[str.length - 1] ); // o
// alert( str.at(-1) );

// let str = `Hello`;

// alert( str[-2] ); // undefined
// alert( str.at(-2) ); // l

// for (let char of "Hello") {
//     alert(char); // H,e,l,l,o (char — сначала "H", потом "e", потом "l" и т.д.)
//   }

//   let str = 'Hi';

// alert( str.at(-1) ); // не работает

// let str = 'Hi';

// str = 'h' + str[1]; // заменяем строку

// alert( str ); // hi

// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface

// alert( 'Interface'[0].toLowerCase() ); // 'i'

// function ucFirst(str) {
//     if(!str) return str;
//     return str[0].toUpperCase() + str.slice(1);
// }
// alert( ucFirst("вася") )

// Поиск подстроки!! с помощью метода: str.indexOf

// let str = 'Widget with id';

// alert( str.indexOf('Widget') ); // 0, потому что подстрока 'Widget' найдена в начале
// alert( str.indexOf('widget') ); // -1, совпадений нет, поиск чувствителен к регистру

// alert( str.indexOf("with") ); // 1, подстрока "id" найдена на позиции 1 (..idget with id)

// let str = "Widget with id";

// if (str.indexOf("Widget")) НЕ БУДЕТ РАБОТАТЬ, ТАК КАК ВОЗРАЩАЕТ 0 И IF РЕШАЕТ, ЧТО ТЕСТ НЕ ПРОЙДЕТ 
//     alert("Совпадение есть"); // не работает
// } ПОЭТОМУ НУЖНА ПРОВЕРКА НА -1:                                                                                                                                                                                                                                                                                                                  

// let str = "Widget with id";

// if (str.indexOf("Widget") != -1) {
//     alert("Совпадение есть"); // теперь работает
// }
// БОЛЕЕ КОМПАКТНАЯ ЗАПИСЬ ПРЕДЫДУЩЕГО ВЫРАЖЕНИЯ!!!!!ж
// let str = "Widget";

// if (~str.indexOf("Widget")) {
//   alert( 'Совпадение есть' ); // работает
// }


// let str = 'Ослик Иа-Иа посмотрел на виадук';

// let target = 'Иа'; // цель поиска

// let pos = 0;
// while (true) {
//   let foundPos = str.indexOf(target, pos);
//   if (foundPos == -1) break;

//   alert( `Найдено тут: ${foundPos}` );
//   pos = foundPos + 1; // продолжаем со следующей позиции
// }

// alert( "Widget with id".includes("Widget") ); // true

// alert( "Hello".includes("Bye") ); // false

// alert( "Midget".includes("id") ); // true
// alert( "Midget".includes("id", 0) ); // false, поиск начат с позиции 3


// // Методы str.startsWith и str.endsWith проверяют, соответственно, начинается ли и заканчивается ли строка определённой строкой:
// alert( "Widget".startsWith("Wid") ); // true, "Wid" — начало "Widget"
// alert( "Widget".endsWith("get") ); // true, "get" — окончание "Widget"

// Получение подстроки!

// let str = "stringify";

// alert( str.slice(0, 5) );

// let strr = "stringify";

// alert( strr.slice(2) );

// let str = "stringify";

// // для substring эти два примера — одинаковы
// alert( str.substring(2, 6) ); // "ring"
// alert( str.substring(6, 2) ); // "ring"

// // …но не для slice:
// alert( str.slice(2, 6) ); // "ring" (то же самое)
// alert( str.slice(6, 2) ); // "" (пустая строка)

// let str = "stringify";
// // ring, получаем 4 символа, начиная с позиции 2
// alert( str.substr(2, 4) );

// let str = "stringify";
// // gi, получаем 2 символа, начиная с позиции 4 с конца строки
// alert( str.substr(-4, 2) );

// одна и та же буква в нижнем и верхнем регистре
// будет иметь разные коды
// alert( "z".codePointAt(0) ); // 122
// alert( "Z".codePointAt(0) ); // 90

// String.fromCodePoint(code)
// Создаёт символ по его коду code

// alert( String.fromCodePoint(90) ); // Z

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// alert( str );
// // ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// // ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

// function checkSpam(str) {
//     let lowerStr = str.toLowerCase();

//     return lowerStr.includes('viagra') || lowerStr.includes('xxx');
// }

// alert( checkSpam('buy ViAgRA now') );
// alert( checkSpam('free xxxxx') );
// alert( checkSpam("innocent rabbit") );

// Строка, которую мы возвращаем, должна быть не длиннее maxlength, поэтому, если мы обрезаем строку, то мы должны убрать на один символ больше, чем maxlength — чтобы хватило места на многоточие.

// Имейте в виду, что в качестве многоточия здесь используется … — ровно один специальный Юникодный символ. Это не то же самое, что ... — три точки.

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }
//   alert( truncate('иеиееиуиеуиеиеууе еперке  ееупек', 20) );

function extractCurrencyValue(str) {
    return str.slice(1);
}
alert( extractCurrencyValue("$150000000") );