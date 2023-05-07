alert(document.body.firstElementChild);
alert(document.body.children.length);

const human = document.body.querySelector('.user');
alert(human);

alert(human.nextElementSibling);

const list = document.body.querySelector('.list .list__second');
alert(list);
console.log(list);
console.log(document.body.children[0].previousSibling);

// tсть несколько способов для получения элементов, например:

// DOM-узел элемента <div>:

// document.body.firstElementChild
// // или
// document.body.children[0]
// // или (первый узел пробел, поэтому выбираем второй)
// document.body.childNodes[1]
// DOM-узел элемента <ul>:

// document.body.lastElementChild
// // или
// document.body.children[1]
// Второй <li> (с именем Пит):

// // получаем <ul>, и его последнего ребёнка
// document.body.lastElementChild.lastElementChild