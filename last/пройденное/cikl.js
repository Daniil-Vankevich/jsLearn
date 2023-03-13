/*let i = 3;
while (i) {
    alert(i);
    i--;
}*/

/*let $ = 0;
do {
  alert( $ );
  $++;
} while ($ < 3);*/

/*for (let i = 0; i < 3; i++) { // выведет 0, затем 1, затем 2
    alert(i);
  }*/

 /* for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert( i );
    }
  }*/

  /*let i = 0;
  while (i < 3) {
    alert( `number ${i}!` );
    i++;
  }*/

/*let num;

do{
  num = prompt('Введите число больше 100?', 0);
} while (num <= 100 && num)*/

let n = 10;

next:
for (let i = 2; i <= n; i++){
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue next;
  }
  alert(i);
}















