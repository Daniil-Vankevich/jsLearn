// расширенные свойства встроенных классов...........От встроенных классов, таких как Array, Map и других, тоже можно наследовать.

// добавим один метод (можно более одного)
// class PowerArray extends Array {
//   isEmpty() {
//     return this.length === 0;
//   }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false

// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr); // 10, 50
// alert(filteredArr.isEmpty()); // false


// Обратите внимание на интересный момент: встроенные методы, такие как filter, map и другие возвращают новые объекты унаследованного класса PowerArray. Их внутренняя реализация такова, что для этого они используют свойство объекта constructor.

// В примере выше, arr.constructor === PowerArray
// Поэтому при вызове метода arr.filter() он внутри создаёт массив результатов, именно используя arr.constructor, а не обычный массив. Это замечательно, поскольку можно продолжать использовать методы PowerArray далее на результатах.


// При помощи специального статического геттера Symbol.species можно вернуть конструктор, который JavaScript будет использовать в filter, map и других методах для создания новых объектов.

// Если бы мы хотели, чтобы методы map, filter и т. д. возвращали обычные массивы, мы могли бы вернуть Array в Symbol.species, вот так:

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // встроенные методы массива будут использовать этот метод как конструктор
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
let filteredArr = arr.filter(item => item >= 10);

// filteredArr не является PowerArray, это Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function
// Как вы видите, теперь .filter возвращает Array. Расширенная функциональность не будет передаваться далее. Другие коллекции, такие как Map, Set, работают аналогично. Они также используют Symbol.species.

// Отсутствие статического наследования встроенных классов.                                      Обычно, когда один класс наследует другой, то наследуются и статические методы. Это было подробно разъяснено в главе Статические свойства и методы. Но встроенные классы – исключение. Они не наследуют статические методы друг друга.
// Например, и Array, и Date наследуют от Object, так что в их экземплярах доступны методы из Object.prototype. Но Array.[[Prototype]] не ссылается на Object, поэтому нет методов Array.keys() или Date.keys().
