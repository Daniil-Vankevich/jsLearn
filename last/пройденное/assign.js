// let user = {
//     Name: "Daniil",
//     age: 30,
// };

// let clone = {}; // Создание пустого объекта;

// // копирование всех свойств user в него;

// for (let key in user) {
//     clone[key] = user[key];
// }
// clone.Name= "PeterParker";

// console.log(user);
// console.log(clone);

//мы можем использовать его для объединения нескольких объектов в один:

/*let user = { Name: "Danilka"};

let permis1 = { canView: true};
let permis2 = { canEdit: true};

Object.assign(user, permis1, permis2);

console.log(user);*/

// let user = {
//     Name: "Djonnn",
//     aage: 30,
// };

// let clone = Object.assign({}, user);

// console.log(clone);
// console.log(user);

// clone.surname = "Vank";

// console.log(clone);
// console.log(user);

// const user = {
//     name: "John",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

// const user1 = JSON.parse(JSON.stringify(user));

// user1.sizes.boreder_radius = "50%";

// console.log(user);
// console.log(user1);


function marry(man, woman) {
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({name: "John", wife:  {name: "Ann", husband: {name: 'John'}}}, {name: "Ann", husband: {name: 'John'}});

console.log(family);