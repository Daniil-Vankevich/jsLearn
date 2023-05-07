// document.body.style.background = 'pink';

// setTimeout(() => {
// 	document.body.style.background = 'blue';
// }, 3990);

// alert(location.href);

// if(confirm('Go on the wikipedia?')) {
// 	location.href = "https://wikipedia.org"
// };

const begin = document.body.querySelector('.list-info');
console.log(begin.hasChildNodes());

if (begin.childNodes[0] === begin.firstChild) {
	console.log("It`s really fact");
}

// ...................................................

// for (let i = 0; i < document.body.childNodes.length; i++) {
// 	alert( document.body.childNodes[i] ); 
// }

for (let node of begin.children) {
	console.log(`Вот же они все, слева направо: ${node}`);
}


// ...................................................

// alert(begin.parentNode);

// alert(begin.previousSibling);
// alert(begin.nextSibling);
// alert(document.body.nextSibling);
// alert(document.body.previousSibling);
// alert( document.head.nextSibling ); // HTMLBodyElement

// alert(document.body.parentNode);
// alert(document.body.parentNode === document.documentElement);

// ...................................................

console.log(document.body.children);
console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);
console.log(begin.nextElementSibling);
console.log(begin.previousElementSibling);
console.log(begin.parentElement);

