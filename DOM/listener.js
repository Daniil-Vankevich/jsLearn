const button = document.querySelector('.btn');


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

const wrapperBtn = document.querySelector('.wrapper');

function showConsole () {
	console.log('Congratilations');
}

wrapperBtn.addEventListener("click", function(event) {
	if(event.target.closest('.btn')) {
		showConsole();
	}
});