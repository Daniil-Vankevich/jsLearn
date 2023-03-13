// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b-a);
// console.log(arr);
// arr.sort((a, b) => a-b);
// console.log(arr);

///////////////////////////////

// function copySorted(arr) {
// return arr.slice().sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted );
// console.log( arr );

//////////////////////////////////

// function Calculator() {

//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     this.calculate = function(str) {
  
//       let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
  
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//       }
  
//       return this.methods[op](a, b);
//     }
  
//     this.addMethod = function(name, func) {
//       this.methods[name] = func;
//     };
//   }
//   let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("3 / 2");
// console.log( result ); // 8
  
//////////////////////////////////////////

// function Calculator() {

//     this.methods = {
//         "-": (a, b) => a-b,
//         "+": (a, b) => a+b ,
//     };

//     this.calculate = function(str) {
        
//         let split = str.split(' '),
//         a = +split[0],
//         op = split[1],
//         b = +split[2]
        
//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN;
//      }
//         return this.methods[op] (a, b);
//     }

//     this.addMethod = function(name, func) {
//         this.methods[name] = func;
//     };
// }
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("3 / 2");
// console.log( result ); // 8


////////////////Трансформировать в массив имён/////////////////////////////


// let vasya = { name: "Vasya", age: 25};
// let petya = { name: "Petya", age: 30};
// let masha = { name: "Masha", age: 28};

// let users = [vasya, petya, masha];

// let names = users.map(item => item.name);

// console.log( names );

///////////////Трансформировать в объекты/////////////////////////////
 

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let trans = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id,
// }));

// console.log( trans[0].id);
// console.log( trans[1].fullName );
