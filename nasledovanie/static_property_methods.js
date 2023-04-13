// есть возможность присваивать метод самому классу:
// используется ключевое слово static

// class User {
// 	static StaticMethod() {
// 		console.log(this === User);
// 	}
// }

// User.StaticMethod();

// // Это фактически то же самое, что присвоить метод напрямую как свойство функции:

// class User1 { }

// User1.staticMethod = function() {
//   console.log(this === User1);
// };

// User1.staticMethod();

// Обычно статические методы используются для реализации функций, принадлежащих классу целиком, вообще, и при этом не относящимся к каким-то отдельным объектам............................................ Например, есть объекты статей Article, и нужна функция для их сравнения.Естественное решение – сделать для этого статический метод Article.compare:

// class Article {
// 	constructor(title, date) {
// 		this.title = title;
// 		this.date = date;
// 	}
// 	static compare(articleA, articleB) {
// 		return articleA.date - articleB.date;
// 	}
// }

// let articles = [
// 	new Article('Html', new Date(2020, 1, 1)),
// 	new Article('Css', new Date(2019, 7, 11)),
// 	new Article('JavaScript', new Date(2021, 11, 11)),
// ]

// articles.sort(Article.compare);

// console.log(articles[2].title);

// Здесь метод Article.compare стоит «над» статьями, как средство для их сравнения. Это метод не отдельной статьи, а всего класса.

// Создание пустой статьи с сегодняшней датой. можно использовать статический метод класса.

// class Article {
// 	constructor(title, date) {
// 		this.title = title;
// 		this.date = date;
// 	}

// 	static createTodays() {
// 		// this = Article
// 		return new this("Сегодняшний дайджест", new Date());
// 	}
// }

// let article = Article.createTodays();
// console.log(article.title); // сегодняшний дайджест

// Теперь каждый раз, когда нам нужно создать сегодняшний дайджест, нужно вызывать Article.createTodays(). Ещё раз, это не метод одной статьи, а метод всего класса.

// Статические методы также используются в классах, относящихся к базам данных, для поиска/сохранения/удаления вхождений в базу данных, например:

// предположим, что Article - это специальный класс для управления статьями
// статический метод для удаления статьи по id:
// Article.remove({id: 12345});

// .....................................................................

// Статические свойства также возможны, они выглядят как свойства класса, но с static в начале:

// class Book {
// 	static publisher = "Alexander Sergeevich";
// }
// console.log(Book.publisher);

// // Это то же самое, что и прямое присваивание Book:

// Book.publisher = "Alexander Sergeevich";


// Наследование статических свойств и методов...........................Например, метод Animal.compare в коде ниже наследуется и доступен как Rabbit.compare:


class Animal {

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    console.log(`${this.name} бежит со скоростью ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }

}

// Наследует от Animal
class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} прячется!`);
  }
}

let rabbits = [
  new Rabbit("Белый кролик", 10),
  new Rabbit("Чёрный кролик", 5)
];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.


// Так что Rabbit extends Animal создаёт две ссылки на прототип:

// Функция Rabbit прототипно наследует от функции Animal.
// Rabbit.prototype прототипно наследует от Animal.prototype.
// В результате наследование работает как для обычных, так и для статических методов.

// Давайте это проверим кодом:

// class Animal {}
// class Rabbit extends Animal {}

// // для статики
// alert(Rabbit.__proto__ === Animal); // true

// // для обычных методов
// alert(Rabbit.prototype.__proto__ === Animal.prototype); // true