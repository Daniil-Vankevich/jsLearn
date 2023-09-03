// const button = document.querySelector('.btn');


// использование обработчика onclick.................

// button.onclick = function() {
// 	console.log('Click!');
// }

// function showConsole() {
// 	console.log('Click Clack');
// }

// button.onclick = showConsole;



// использование addEventListener....................

// button.addEventListener("click", function(e) {
// 	console.log('Click');
// })

// button.addEventListener("click", function(e) {
// 	console.log('Clack');
// })

// использование addEventListener....................

// function showConsole() {
// 	console.log('Click');
// 	button.removeEventListener('click', showConsole);
// }
// button.addEventListener('click',showConsole, options)

// function showConsoleo() {
// 	console.log('Clack');
// 	button.removeEventListener('click', showConsoleo);
// }
// button.addEventListener('click',showConsoleo)

//removeEventListener позволяет прекратить обработку какого-либо объекта, снимания с него прослушку.


//опции...........

// const options = {
// 	"capture": false,
// 	"once": true, //если тру, то обработчик будет автоматически удален после выполнения, т.е появляется removeEventListener 
// 	"passive": false,
// }

// function showConsole() {
// 	console.log('Click');
// }
// button.addEventListener('click',showConsole, options)

// function showConsoleo() {
// 	console.log('Clack');
// 	// button.removeEventListener('click', showConsoleo);
// }
// button.addEventListener('click',showConsoleo)


//параметр event, который можно добавить в функцию, позволяет узнать тип применяемого события, его цель, т.е объект на котором он срабатывает. Также дает узнать объект которому назначен этот обработчик, можно узнать положение курсора мыши по оси x and y...Все детали события можно узнать выведя в консоль это событие.........

// const options = {
// 	"capture": false,
// 	"once": true, //если тру, то обработчик будет автоматически удален после выполнения, т.е появляется removeEventListener 
// 	"passive": false,
// }

// function showConsole(event) {
// 	console.log(event.clientX);
// }
// button.addEventListener('click',showConsole, options)

// function showConsoleo(event) {
// 	console.log(event.clientY);
// 	console.log(event);
// }
// button.addEventListener('mouseenter',showConsoleo, options)
// button.addEventListener('click',showConsoleo, options)


// погружение и всплытие........

// const block = document.querySelector('.block');
// const blockInner = document.querySelector('.block__inner');
// const blockInnerInner = document.querySelector('.block__inner-3');

// block.addEventListener('click', function (event) {
// 	console.log('Click on the block');
// 	// console.log(event.target);
// })

// blockInner.addEventListener('click', function (event) {
// 	console.log('Click on the block level 2');
// }, {'capture': true})

// blockInnerInner.addEventListener('click', function (event) {
// 	console.log('Click on the block level 3');
// 	// event.stopPropagation();
// })

// делегирование событий...всплытие и перехват событий позволяют реализовать этот важный прием...............................

// const wrapperBtn = document.querySelector('.wrapper');

// function showConsole () {
// 	console.log('Congratilations');
// }

// wrapperBtn.addEventListener("click", function(event) {
// 	if(event.target.closest('.btn')) {
// 		showConsole();
// 	}
// });


// Отмена действий браузера по умолчанию...............................

// link = document.querySelector('.link__google');

// link.addEventListener('click', function(event) {
	
// 	console.log('wow we did it');

// 	event.preventDefault();

// })



// Основные события мыши...............................


// const button = document.querySelector('.btn');

// button.addEventListener('mousedown', function(event) {
// 	console.log(`Нажата кнопка ${event.which}`);
// });

// button.addEventListener('click', function(event) {
// 	console.log('Нажата основная кнопка мыши');
// });

// button.addEventListener('contextmenu', function(event) {
// 	console.log(`Вызвано контекстное меню(не основная кнопка меню) ${event.which}`);
// });

// Движения мыши......mousemove.........................

// const blockBlackClickMouse = document.querySelector('.block');

// blockBlackClickMouse.addEventListener('mousemove', function(event) {
// 	blockBlackClickMouse.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY}`;
// });



// Движения мыши......mouseover and mouseout.......................

// const blockBlackClickMouse = document.querySelector('.block');

// blockBlackClickMouse.addEventListener('mouseover', function(event) {
// 	blockBlackClickMouse.innerHTML = 'Cursor over element';
// 	console.log(event.target);
// 	console.log(event.relatedTarget)
// });

// blockBlackClickMouse.addEventListener('mouseout', function(event) {
// 	blockBlackClickMouse.innerHTML = 'Cursor go out element';
// 	console.log(event.target);
// 	console.log(event.relatedTarget)
// });

// Движения мыши......mouseenter and mouseleave....................

// const blockBlackClickMouse = document.querySelector('.block');

// blockBlackClickMouse.addEventListener('mouseenter', function(event) {
// 	blockBlackClickMouse.innerHTML = 'Cursor over element';
// 	// console.log(event.target);
// 	// console.log(event.relatedTarget)
// });

// blockBlackClickMouse.addEventListener('mouseleave', function(event) {
// 	blockBlackClickMouse.innerHTML = 'Cursor go out element';
// 	// console.log(event.target);
// 	// console.log(event.relatedTarget)
// });

// Отличие mouseenter and mouseleave от mouseover and mouseout в том, что они не всплывают как вторые. Когда используются вторые компоненты и мышь внутри блока переходит к тегу спан, например, происходит срабатывание over and out. Когда задействованы первые компоненты, то они не реагируют на перемещение курсора внутри блока к дочернему элементу. Вторые компоненты часто применяются при делегировании.

// Основные события клавиатуры...............................