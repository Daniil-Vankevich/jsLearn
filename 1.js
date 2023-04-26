import { accept, sayHi } from "./module_export.js";

console.log(accept.age);

accept.firstName = "Vankevidze";

console.log(accept.firstName);

sayHi();

