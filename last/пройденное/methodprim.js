// let roma = {
//     Name: "Roma",
//     sayHi: function() {
//         alert("Привет, дружище!");
//     }
// };

// roma.sayHi();

// let str = "Всем привет!";

// alert( str.toUpperCase() );

// let num = 1.234567899874563210

// alert( num.toFixed(5) );

// let num123 = String(7 + 5);
// alert(num123);

// let num312 = Number(false);

// alert(num312);

/*В зависимости от того, используете ли вы строгий режим (use strict) или нет, результат может быть:

undefined (без strict)
Ошибка (strict mode)
Почему? Давайте посмотрим что происходит в строке кода, отмеченной (*):

В момент обращения к свойству str создаётся «объект-обёртка».
В строгом режиме, попытка изменения этого объекта выдаёт ошибку.
Без строгого режима, операция продолжается, объект получает свойство test, но после этого он удаляется, так что на последней линии str больше не имеет свойства test.
Данный пример наглядно показывает, что примитивы не являются объектами.

Они не могут хранить дополнительные данные.*/

// let str = "Привет";

// str.test = 5;

// alert( str.test );