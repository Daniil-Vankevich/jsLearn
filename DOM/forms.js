// console.log(document.forms);

// const formInDoc = document.forms[0];
// console.log(formInDoc);
// const formInDoc2 = document.forms[1];
// console.log(formInDoc2);

// const form1 = document.forms.main;
// // console.log(form1);
// // console.log(form1.elements)
// const form2 = document.forms.main2;
// console.log(form2);
// console.log(form2.radiobtn);



// const currentElemForm = form2.radiobtn;

// console.log(currentElemForm);

// const lalala = form2.elements.checkbtn;

// console.log(lalala.form);

// const lalala2 = form1.inputtext;
// console.log(lalala2.form);


// работа с элементами формы

const form1 = document.forms.main;
const form2 = document.forms.main2;

const mainFormInput = form1.inputtext;
console.log(mainFormInput.value);

const mainFormArea = form1.textarea__vvod;
console.log(mainFormArea.value)

// mainFormInput.value = 'Bye';
// mainFormArea.value = 'Bye Bye';

const mainPlaceholder = mainFormInput.placeholder;

// mainFormInput.addEventListener('focus', function(e) {
// 	mainFormInput.placeholder = '';
// });

// mainFormInput.addEventListener('blur', function(e) {
// 	mainFormInput.placeholder = mainPlaceholder;
// });

mainFormInput.focus();

setTimeout(() => {
	mainFormInput.blur();
}, 3000);


// работа с элементами формы radio btn checkbox file

// const mainFormRadio = form2.radiobtn;
const mainFormChecked = form2.checkbtn;
const mainFormFile = form2.filebtn;

// // console.log(mainFormRadio[0].value);
// // console.log(mainFormRadio[1].value);
// // console.log(mainFormRadio[0].checked);
// // console.log(mainFormRadio[1].checked);

// // console.log(mainFormChecked.value);
// // console.log(mainFormChecked.checked);


// // работа с элементами формы radio btn checkbox file добавление значения и проверка 'checked'.
// mainFormFile.value = "";
// mainFormRadio[0].value = 3;
// mainFormRadio[1].value = 9;
// mainFormRadio[1].checked = true;
// mainFormRadio[0].checked = true;
// mainFormChecked.value = 3;
// mainFormChecked.checked = true;

// // работа с элементами формы select option. у селекта есть 3 свойства options, value, selectedIndex.

// const mainSelect = form2.selectBlock;
// console.log(mainSelect.options);
// // console.log(mainSelect.options);

// const mainSelectedIndex = mainSelect.selectedIndex;
// console.log(mainSelectedIndex);


// const mainSelectedValue = mainSelect.value;
// console.log(mainSelectedValue);

// const mainCurrentOption = mainSelect.options[mainSelectedIndex].text;
// console.log(mainCurrentOption);

// // mainSelect.options[2].selected = true;
// // mainSelect.selectedIndex = 5;
// // mainSelect.value = 69; 

// let newOption = new Option('69', '96', true, true);
// mainSelect.append(newOption);

// // работа с элементами формы. Получение всех выбранных option в конкретном select.............

// let selectOptionArray = Array.from(mainSelect.options)
// .filter(option => option.selected)
// .map(option => option.value);

// console.log(selectOptionArray);


// ........................................................


// tabindex -1.................input.......................

// const wrapper = document.querySelector('.wrapper');

// wrapper.addEventListener('focus', function(e) {
// 	wrapper.classList.add('wrapper__focus');
// 	console.log('Div in focus now');
// });

// wrapper.addEventListener('blur', function(e) {
// 	wrapper.classList.remove('wrapper__focus');
// });

// console.log(document.activeElement);

// Захват при погружении так как focus and blur  не всплывают..............

// form1.addEventListener('focus', function(e) {
// 	form1.classList.add('form-js__active')
// }, {'capture': true});


// form1.addEventListener('blur', function(e) {
// 	form1.classList.remove('form-js__active')
// }, {'capture': true});

// События focusin and focusout............................................

// form1.addEventListener('focusin', function(e) {
// 	form1.classList.add('form-js__active')
// });


// form1.addEventListener('focusout', function(e) {
// 	form1.classList.remove('form-js__active')
// });


// События changet............................................

mainFormInput.addEventListener('change', function(e) {
	console.log('Сработало событие чендж в инпуте!');
})

mainFormChecked.addEventListener('change', function(e) {
	console.log('Сработало событие чендж в checkbox!');
})


mainFormFile.addEventListener('change', function(e) {
	console.log('Сработало событие чендж в file!');
})

// const mainRadioBtn = form2.radiobtnnew[0];

// mainRadioBtn.addEventListener('change', function(e) {
// 	console.log('Сработало событие чендж в радиобтнтью');
// })

// const mainRadioBtn1 = form2.radiobtnnew[1];

// mainRadioBtn1.addEventListener('change', function(e) {
// 	console.log('Сработало событие чендж в радиобтнтью1');
// })

const mainRadioBtn = Array.from(form2.radiobtnnew)
.map(btn => btn.checked);
console.log(mainRadioBtn);

// mainRadioBtn.addEventListener('change', function(e) {
// 	console.log('Сработало событие чендж в radioBtn')
// })

// let selectOptionArray = Array.from(mainSelect.options)
// .map(option => option.value);

// console.log(selectOptionArray);


const mainSelect = form2.selectBlock;

mainSelect.addEventListener('change', function(e) {
	console.log('Сработало событие чендж в селекте');
})

const myRadio = document.querySelector('#radio1');

myRadio.addEventListener('change', function(e) {
	const myText = document.querySelector('#myText');
  myText.style.color = 'red';
})

// ................Событие input.......................

mainFormInput.addEventListener('input', function(event) {
	console.log(`value: ${mainFormInput.value}`);
});

// ................Событи copy paste and cut......................

mainFormInput.addEventListener('copy', function(event) {
	console.log('Копируем');
});

mainFormInput.addEventListener('paste', function(event) {
	console.log(' Не Вставляем');
	event.preventDefault();

});

mainFormInput.addEventListener('cut', function(event) {
	console.log('Вырезаем');
});