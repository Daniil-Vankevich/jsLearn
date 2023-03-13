let array = [];
array[0] = 1;
array[1] = 2;

console.log(array);

// console.log([array[0], array[1]] = [array[1], array[0]]);
let temp = array[0];
array[0] = array[1];
console.log(array);
array[1] = temp;
console.log(array);