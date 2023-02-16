function pp1 () {
	let	p = 10;
	let q = document.querySelector('.B1');

	q.onclick = () => {
		p = p + 1;
		console.log('work q1: ' + p);
}
}
pp1();