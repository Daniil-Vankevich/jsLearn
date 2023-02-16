// пример с переменной и массивов:

const a = [100, 200, 300, 400];
let [, , s10, s11] = a;
console.log(s10);
console.log(s11);

// деструктурирующее присваивание со строкой

let [s1, , s2] = "intel pentium inside".split(' ');
console.log(s1);
console.log(s2);

// деструктуризация set................

let [, , s3, s4] = new Set('HelloPe');

console.log(s3);
console.log(s4);

// значение по умолчанию. Если массив пустой, то s5 will be "hi", s6 will be "men"....)

let [s5 = "Hi", s6 = "men"] = [147];

console.log(s5);
console.log(s6);


// деструктурирующее присваивание объект:

let obj = {
	firstName: 'Daniil',
	age: 20,
	hobbies: true,
}

let {age, PPPoE, firstName, hobbies} = obj;
console.log(age, PPPoE, firstName, hobbies);

// по переменным:

let { age: x, firstName: y, hobbies: z} = obj;
console.log(x, y, z);
