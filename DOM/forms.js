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

mainFormInput.value = 'Bye';
mainFormArea.value = 'Bye Bye';


// работа с элементами формы radio btn checkbox file

const mainFormRadio = form2.radiobtn;
const mainFormChecked = form2.checkbtn;
const mainFormFile = form2.filebtn;

// console.log(mainFormRadio[0].value);
// console.log(mainFormRadio[1].value);
// console.log(mainFormRadio[0].checked);
// console.log(mainFormRadio[1].checked);

// console.log(mainFormChecked.value);
// console.log(mainFormChecked.checked);


// работа с элементами формы radio btn checkbox file добавление значения и проверка 'checked'.
mainFormFile.value = "";
mainFormRadio[0].value = 3;
mainFormRadio[1].value = 9;
mainFormRadio[1].checked = true;
mainFormRadio[0].checked = true;
mainFormChecked.value = 3;
mainFormChecked.checked = true;

// работа с элементами формы select option. у селекта есть 3 свойства options, value, selectedIndex.

const mainSelect = form2.selectBlock;
console.log(mainSelect.options);
// console.log(mainSelect.options);

const mainSelectedIndex = mainSelect.selectedIndex;
console.log(mainSelectedIndex);


const mainSelectedValue = mainSelect.value;
console.log(mainSelectedValue);

const mainCurrentOption = mainSelect.options[mainSelectedIndex].text;
console.log(mainCurrentOption);

// mainSelect.options[2].selected = true;
// mainSelect.selectedIndex = 5;
// mainSelect.value = 69; 

let newOption = new Option('69', '96', true, true);
mainSelect.append(newOption);

// работа с элементами формы. Получение всех выбранных option в конкретном select.............

let selectOptionArray = Array.from(mainSelect.options)
.filter(option => option.selected)
.map(option => option.value);

console.log(selectOptionArray);
