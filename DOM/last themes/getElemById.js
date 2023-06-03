// let elem = document.getElementById('elem');
// let elems = document.getElementById('elems')

// elem - ссылка на элемент с id="elem"
// elem.style.background = 'red';
// elem.style.width = '95px';
// elem.style.border = '2px solid black';
// elem.style.textAlign = 'center';

// внутри id="elem-content" есть дефис, так что такой id не может служить именем переменной
  // ...но мы можем обратиться к нему через квадратные скобки: window['elem-content']
// window['elem-content'].style.color = 'white';

// …Но это только если мы не объявили в JavaScript переменную с таким же именем, иначе она будет иметь приоритет:

//<div id="elem"></div>

{/* <script>
  let elem = 5; // теперь elem равен 5, а не <div id="elem">

  alert(elem); // 5
</script> */}


// .................................................

// querySelectorAll - Самый универсальный метод поиска – это elem.querySelectorAll(css), он возвращает все элементы внутри elem, удовлетворяющие данному CSS-селектору.

// let elements = document.querySelectorAll('ul > li:first-child');

// for ( let elem of elements) {
// 	alert(elem.innerHTML);
// }


// Предыдущие методы искали по DOM. ...........Метод elem.matches(css) ничего не ищет, а проверяет, удовлетворяет ли elems CSS-селектору, и возвращает true или false.
// for (let elems of document.body.children) {
// 	if (elems.matches('a[href$="zip"]')) {
// 		alert("Ссылка на архив: + elems.href");
// 	}
// }

// for (let elem of document.body.children) {
// 	if (elem.matches('a[href$="zip"]')) {
// 		alert("Ссылка на архив: " + elem.href );
// 	}
// }

// for (let elems of document.body.children) {
// 	if (elems.matches('a[href$="ru"]')) {
// 		alert("Ссылка на архив: " + elems.href);
// 	}
// }



// ................................................

// метод closest ищет ближайшего предка, который соответствует CSS-селектору. Сам элемент также включается в поиск.

// Другими словами, метод closest поднимается вверх от элемента и проверяет каждого из родителей. Если он соответствует селектору, поиск прекращается. Метод возвращает либо предка, либо null, если такой элемент не найден.

// let chapter = document.querySelector('.chapter');

// alert(chapter.closest('.book'));
// alert(chapter.closest('.contents'));
// alert(chapter.closest('h1'));

// ................................................

// Cуществуют также другие методы поиска элементов по тегу, классу и так далее.

// На данный момент, они скорее исторические, так как querySelector более чем эффективен.

// Здесь мы рассмотрим их для полноты картины, также вы можете встретить их в старом коде.

// elem.getElementsByTagName(tag) ищет элементы с данным тегом и возвращает их коллекцию. Передав "*" вместо тега, можно получить всех потомков.
// elem.getElementsByClassName(className) возвращает элементы, которые имеют данный CSS-класс.
// document.getElementsByName(name) возвращает элементы с заданным атрибутом name. Очень редко используется.

// let divs = document.getElementsByTagName('div');
// console.log(divs);

// ................................................

// let input = document.getElementsByName('age');

// for(let inputes of input) {
// 	console.log(inputes.value + ':' + inputes.checked);
// }

// console.log("Red Hoy Chilli Pepers")

// let inputs = document.getElementsByTagName('input');

// for(let inp of inputs) {
// 	console.log(inp);
// }

// ...............................................


// let tables = document.getElementsByTagName('*');

// console.log(tables);

// ...............................................

// Возвращает коллекцию, а не элемент!
// Другая распространённая ошибка – написать:

// // не работает
// document.getElementsByTagName('input').value = 5;
// Попытка присвоить значение коллекции, а не элементам внутри неё, не сработает.

// Нужно перебрать коллекцию в цикле или получить элемент по номеру и уже ему присваивать значение, например, так:

// // работает (если есть input)
// document.getElementsByTagName('input')[0].value = 5;

// ................................................

// let form = document.getElementsByName('my-form')[0];

//   // ищем по классу внутри form
//   let articles = form.getElementsByClassName('article');
//   alert(articles.length); // 2, находим два элемента с классом article

// ................................................


// Живые коллекции
// Все методы "getElementsBy*" возвращают живую коллекцию. Такие коллекции всегда отражают текущее состояние документа и автоматически обновляются при его изменении.

// В приведённом ниже примере есть два скрипта.

// Первый создаёт ссылку на коллекцию <div>. На этот момент её длина равна 1.
// Второй скрипт запускается после того, как браузер встречает ещё один <div>, теперь её длина – 2.
// <div>First div</div>

// <script>
//   let divs = document.getElementsByTagName('div');
//   alert(divs.length); // 1
// </script>

// <div>Second div</div>

// <script>
//   alert(divs.length); // 2
// </script>
// Напротив, querySelectorAll возвращает статическую коллекцию. Это похоже на фиксированный массив элементов.

// Если мы будем использовать его в примере выше, то оба скрипта вернут длину коллекции, равную 1:

// <div>First div</div>

// <script>
//   let divs = document.querySelectorAll('div');
//   alert(divs.length); // 1
// </script>

// <div>Second div</div>

// <script>
//   alert(divs.length); // 1
// </script>
// Теперь мы легко видим разницу. Длина статической коллекции не изменилась после появления нового div в документе.