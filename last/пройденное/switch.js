/*let browser;

if (browser == 'Edge') {
    alert("You've got the Edge!");
}
else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
    alert ('Okay we support these browsers too');
}
else {
        alert( 'We hope that this page looks ok!');
}*/

/*const number = Number (prompt('Введите число между 0 и 3', ""));
switch (number) {

    case 0:
        alert('Вы ввели число 0');
        break;
    case 1: 
        alert('Вы ввели число 1');
        break;
    case 2:
    case 3:
        alert('Вы ввели число 2, а может и 3');
        break; 
}*/

// function showMessage(message) {
//     alert(message);
//     return undefined
// }

// showMessage('Привет!');

// const showMessage2 = message => { alert(message) };

// showMessage2('Привет3')

/*let userName = 'Вася';

function showMessage() {
    userName = "Петя";
    let message = 'Привет, ' + userName;
    alert(message);
}
alert(userName);

showMessage();

alert(userName);*/

/*let userName = 'Вася';

function showMessage() {
  let userName = "Петя"; // объявляем локальную переменную

  let message = 'Привет, ' + userName; // Петя
  alert(message);
}

// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();

alert( userName ); // Вася, не изменилась, функция не трогала внешнюю переменную*/

/*function showMessage(from, text) { // параметры: from, text
    alert(from + ': ' + text);
  }
  let from = "Аня";
  showMessage(from, 'Привет!'); // Аня: Привет! (*)
  showMessage('Аня', "Как дела?"); // Аня: Как дела? (**)


  function nothing(prm1, prm2) {
    prm1 = 'param1';
    prm2 = 'param2';
    alert(prm1 + prm2);
  }

  nothing('ФЫВЫВ', 'ASDAFSA')*/

 /* function showMessage(from, text = "текст не добавлен") {
    alert( from + ": " + text );
  }
  
  showMessage("Аня"); // Аня: текст не добавлен */

/*function min(a,b) {
  a = 5;
  b = 5;
  if (a < b) {
    +alert(a)
  }
  else if (b < a) {
    +alert(b)
  }
  else {
    +alert(a || b);
  }
}

min();*/

let user = {
  name: "John",
  surname: "Smith"
};
user.age = 25; // добавим ещё одно свойство

// не целочисленные свойства перечислены в порядке создания
for (let prop in user) {
  alert( prop ); // name, surname, age
  alert( user[prop] ); // "Jone", "Smith", "25";
}