"use strict"


// function sortByAge(arr) {
//     arr.sort((a, b) => a.age > b.age ? 1 : -1);
//   }
  
//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 28 };
  
//   let arr = [ vasya, petya, masha ];
  
//   sortByAge(arr);
  
//   // теперь отсортировано: [vasya, masha, petya]
//   alert(arr[0].name); // Вася
//   alert(arr[1].name); // Маша
//   alert(arr[2].name); // Петя





// Перемешивание массива!!! 3 способа(разобрать!)


// function shuffle(array) {
//     array.sort(() => Math.random() -0.5);
// }

// let array = [1, 2, 3];
// shuffle(array);
// alert(array);

// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
//   }
  
//   // подсчёт вероятности для всех возможных вариантов
//   let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
  
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }
  
//   // показать количество всех возможных вариантов
//   for (let key in count) {
//     alert(`${key}: ${count[key]}`);
//   }

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }
  
//   // подсчёт вероятности для всех возможных вариантов
//   let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
  
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }
  
//   // показать количество всех возможных вариантов
//   for (let key in count) {
//     alert(`${key}: ${count[key]}`);
//   }




// Получение среднего возраста!!!

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }
  
//   let vasya = { name: "Вася", age: 25 };
//   let petya = { name: "Петя", age: 30 };
//   let masha = { name: "Маша", age: 29 };
  
//   let arr = [ vasya, petya, masha ];
  
//   alert( getAverageAge(arr) ); // 28




// Получение уникального значения!
// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
//   }
  
//   let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
//   ];
  
//   alert( unique(strings) ); // кришна, харе, :-O



//   let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
//   let usersById = groupById(users);
  
//   /*
//   // после вызова у нас должно получиться:
  
//   usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   }
//   */
//   function groupById(array) {
//     return array.reduce((obj, value) => {
//       obj[value.id] = value;
//       return obj;
//     }, {})
//   }



////////////////////////////////////////////


// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
  
//   // возвращает массив, состоящий из двух первых пользователей
//   let someUsers = users.filter(item => item.id < 3);
  
//   console.log(someUsers); // 2


/////Преобразование в массив имен///////// 
  let vasya = { name: "Vasya", age: 25};
let petya = { name: "Petya", age: 30};
let masha = { name: "Masha", age: 28};

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log( names );