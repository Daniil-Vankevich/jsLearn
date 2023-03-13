/*function User(name) {
    this.name = name;
    this.IsAdmin = false;
}
let user = new User('Jack');

alert(user.name);
alert(user.IsAdmin);*/

/*function User() {
    alert(new.target);
  }
  
  // без "new":
  User(); // undefined
  
  // с "new":
  new User(); // function User { ... }*/

  /*function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- возвращает этот объект
  }
  
  alert( new BigUser().name );  // Godzilla, получили этот объект

  function SmallUser() {

    this.name = "John";
  
    return; // <-- возвращает this
  }
  
  alert( new SmallUser().name );  // John*/

  /*let obj = {};
  function A() {
    return obj;
  }
  function B() {
    return obj;
  }
  alert( new A()==new B());*/

  // Создание калькулятора
  
  // function Calculator() {

  //   this.read = function() {
  //     this.a = +prompt('a?', 0);
  //     this.b = +prompt('b?', 0);
  //   };
  
  //   this.sum = function() {
  //     return this.a + this.b;
  //   };
  
  //   this.mul = function() {
  //     return this.a * this.b;
  //   };
  // }
  
  // let calculator = new Calculator();
  // calculator.read();
  
  // alert( "Sum=" + calculator.sum() );
  // alert( "Mul=" + calculator.mul() );

  /*function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
      this.value += +prompt('Сколько нужно добавить?', 0);
    }
  }

  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  accumulator.read();
  alert(accumulator.value);*/

  let arr = [1, 2, 3];
  arr.reverse();
  console.log(arr);