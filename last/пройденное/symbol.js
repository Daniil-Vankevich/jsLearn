// let id1 = Symbol("id");
// let id2 = Symbol("id");

// alert( id1 == id2 );

/*let id = Symbol("id");
alert( id.toString());
alert( id.description);*/

// "Скрытые" свойства:

// let user = {
//     Name: "Вася",
// }
// let id = Symbol("id");

// user[id] = 1;

// console.log(id);
// console.log(id.description);
// console.log(user);
// alert(user[id]);

// Символы в литеральном объекте.

/*let id = Symbol("id");

let user = {
    Name: "Вася",
    [id]: 123 // просто "id: 123" не сработает
}
console.log(user);*/

// Символы игнорируются циклом for...in

// let id = Symbol("id");
// let user = {
//     Name: "Вася",
//     age: 30,
//     [id]: 123,
// };

// for(let key in user) alert(key);

// alert("Напрямую:" + user[id]);

/*let id = Symbol("id");
let user = {
    [id]: 123,
};

let clone = Object.assign({}, user);

alert( clone[id]);*/

// Глобальные символы:

// читаем символ из глобального реестра и записываем его в переменную
/*let id = Symbol.for("id"); // если символа не существует, он будет создан

// читаем его снова и записываем в другую переменную (возможно, из другого места кода)
let idAgain = Symbol.for("id");

// проверяем -- это один и тот же символ
alert( id == idAgain ); // true*/

/*let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

alert( Symbol.keyFor(sym) );
alert( Symbol.keyFor(sym2) );*/

// Преобразование объектов в примитивы:

// вывод
// alert(obj);

// // используем объект в качестве ключа
// anotherObj[obj] = 123;

/*Чтобы выполнить преобразование, JavaScript пытается найти и вызвать три следующих метода объекта:

Вызвать obj[Symbol.toPrimitive](hint) – метод с символьным ключом Symbol.toPrimitive (системный символ), если такой метод существует,
Иначе, если хинт равен "string"
попробовать вызвать obj.toString() или obj.valueOf(), смотря какой из них существует.
Иначе, если хинт равен "number" или "default"
попробовать вызвать obj.valueOf() или obj.toString(), смотря какой из них существует.*/

// Symbol.toPrimitive:

/*let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      alert(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // демонстрация результатов преобразований:
  alert(user); // hint: string -> {name: "John"}
  alert(+user); // hint: number -> 1000
  alert(user + 500); // hint: default -> 1500 */

  // toString/valueOf:

  /*let user = {
    name: "John",
    money: 1000,
  
    // для хинта равного "string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // для хинта равного "number" или "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  alert(user); // toString -> {name: "John"}
  alert(+user); // valueOf -> 1000
  alert(user + 500); // valueOf -> 1500  */

