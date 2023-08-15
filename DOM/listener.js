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

const options = {
	"capture": false,
	"once": true, //если тру, то обработчик будет автоматически удален после выполнения, т.е появляется removeEventListener 
	"passive": false,
}

function showConsole() {
	console.log('Click');
}
button.addEventListener('click',showConsole, options)

function showConsoleo() {
	console.log('Clack');
	// button.removeEventListener('click', showConsoleo);
}
button.addEventListener('click',showConsoleo)