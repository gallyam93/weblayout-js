let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete name;


// --- 

let obj = { name: "John", age: 30 };

function isEmpty(obj) {
	for (let key in obj) {
		return key;
	}
	return false;
}

console.log(isEmpty(obj))

// --- 

const user = {
	name: "John"
};

user.name = "Pete";

// Пример выше будет работать т.к. неизменяемой константой становиться название объекта а не его содержимое

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}
let summ = 0;

function sumSalaries() {
	for (let key in salaries) {
		summ += salaries[key];
	}
	return summ;
}

console.log(sumSalaries())

// --- 

let obj = {
	width: 200,
	height: 300,
	title: "My menu"
};

function multiplyNumeric(menu) {
	for (let key in menu) {
		if (typeof menu[key] == 'number') {
			menu[key] *= 2;
		}
	}
}

console.log(obj);
multiplyNumeric(obj);
console.log(obj);