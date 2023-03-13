let array = [1, 2, 3];
let arrayMod = array.map(x => x * 2);
console.log(array, arrayMod);
array[0] *= 2;
array[1] *= 2;
array[2] *= 2;
console.log(array, arrayMod);
