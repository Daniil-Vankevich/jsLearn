// оператор instanceof позволяет проверить, принадлежит ли объект указанному классу, с учетом наследования. Оператор вернёт true, если obj принадлежит классу Class или наследующему от него.

class Rabbit {};

let rabbit = new Rabbit();

// это объект класса Rabbit?
console.log(rabbit instanceof Rabbit);