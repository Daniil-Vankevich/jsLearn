/*let year = prompt ('В каком году была опубликована спецификация ECMAScript-2015?', "");

if(year < 2015) {
    alert('Это слишком рано!');   
}

else if (year > 2015) {
    alert( 'Это поздновато' );
}

 else {
    alert( 'Верно!' );
  } */

  /*let accessAllowed;
  let age = prompt ('Сколько вам лет?', "");

  if (age > 18) {
    accessAllowed = true;
  } else {
    accessAllowed = false;
  }
  
  alert(accessAllowed);*/

/*et age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );*/

/*let age = prompt('Возраст?', 18);
let message;

if(age < 3) {
    message = 'Здравствуй, малыш!';
}
else if (age < 18) {
    message = 'Привет!';
}
else if(age < 100) {
    message = 'Здравствуйте!';
}
else {
    message = 'Какой необычный возраст!';
}
alert(message); */

/*let company = prompt('Какая компания создала JavaScript?', '');

if (company == 'Netscape') {
  alert('Верно!');
} else {
  alert('Неправильно.');
}*/

/*let javaName = prompt('Какое офиальное название JavaScript?', "");

if (javaName=='ECMAScript') {
  alert('Верно!');
}
else
{
  alert('не знаете? ECMAScript!');
}*/

/*let numer = prompt('Пожалуйста, введите число', 0);

if (numer > 0) {
  alert(1);
}
else if (numer < 0) {
  alert(-1);
}
else 
{
  alert(0);
}*/

/*let a = prompt ('Введите а', "");
let b = prompt ('Введите b', "");

let result = (+a + +b < 7) ? 'Мало' : 'Много';

alert(result);*/

/*let age = prompt('Введите значение!', "");

if(!(age >=14 && age <= 90 )) {
  alert('Cool men');
}
else{
  alert('fucking slaves');
}*/

/*let x = 1 && 2;
alert(x);*/ 

let userName = prompt('Введите логин', "");

if(userName === "Админ") {
  let password = prompt('Введите пароль', "");

if (password === 'Я главный') {
  alert('Здравствуйте!');
}
else if(password === '' || password === null)  {
  alert('Отменено');
}
else {
  alert('Неверный пароль')
}
}
else if (userName === '' || userName === null) {
alert('Отменено');
}
else {
  alert('Я вас не знаю');
}