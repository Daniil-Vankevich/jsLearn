
// const cat = {
// 	get name() {
// 		if (!this._name) {
// 			this._name = "vqwer"
// 		}
// 		return this._name + "getter";
// 	},
// 	set name(value) {
// 		console.log(value);
// 		this._name = value;
// 	}
// }

// console.log(cat.name);

// cat.name = "zzzdzfe";

// console.log(cat.name);



let obj = {}
obj.name = "John";
obj.name = "123"
console.log(obj)

console.log(obj.__proto__);

// console.log(Object.getOwnPropertyDescriptors(obj.__proto__));

obj.__proto__ = 1;
console.log(obj.__proto__);


















// let ObjPrototype = { // Object.prototype
// 	/// ...
// 	proto: "[[Prototype]]",
// 	get _proto_() {
// 		return this.proto
// 	},

// 	set _proto_(value) {
// 		if (value instanceof Object) {
// 			this.proto = value;
// 		}
// 	}
// }
// console.log(ObjPrototype)
// console.log(ObjPrototype._proto_)
// ObjPrototype._proto_ = 'СТРОКА'
// console.log(ObjPrototype._proto_)

// console.log('***************************************')
// console.log(ObjPrototype)
// ObjPrototype._proto_ = {}
// console.log(ObjPrototype._proto_)
// console.log(ObjPrototype)
