// document.body.style.background = 'pink';

// setTimeout(() => {
// 	document.body.style.background = 'blue';
// }, 3990);

// alert(location.href);

// if(confirm('Go on the wikipedia?')) {
// 	location.href = "https://wikipedia.org"
// };

const begin = document.body.querySelector('.list-info');
alert(begin.hasChildNodes());

if (begin.childNodes[0] === begin.firstChild) {
	alert("It`s really fact");
}

// for (let i = 0; i < document.body.childNodes.length; i++) {
// 	alert( document.body.childNodes[i] ); 
// }

for (let node of begin.childNodes) {
	alert(`Вот же они все, слева направо: ${node}`);
}
