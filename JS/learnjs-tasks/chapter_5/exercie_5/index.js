function camelize(str) {
	return strзбивае
		.split('-')
		.map(
			(word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
		)
		.join('');
}


// --- 


function filterRange(arr, a, b) {
	return arr.filter(item => (a <= item && item <= b));
}

let arr = [1, 2, 3, 4, 7, 9];

let filtArr = filterRange(arr, 2, 6);

console.log(filtArr);

console.log(arr);



// --- 


function filterRangeInPlace(array, a, b) {

	for (let i = 0; i < arr.length; i++) {
		let value = arr[i];

		if (value < a || value > b) {
			arr.splice(i, 1);
			i--;
		}
	}

}



// --- 



let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert(arr);



// --- 


function copySorted(arr) {
	return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);



// ---



function Calculator() {

	this.methods = {
		"-": (a, b) => a - b,
		"+": (a, b) => a + b
	};

	this.calculate = function (str) {

		let split = str.split(' '),
			a = +split[0],
			op = split[1],
			b = +split[2]

		if (!this.methods[op] || isNaN(a) || isNaN(b)) {
			return NaN;
		}

		return this.methods[op](a, b);
	}

	this.addMethod = function (name, func) {
		this.methods[name] = func;
	};
}



// --- 



let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

alert(names);



// --- 



let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(user => ({
	fullName: `${user.name} ${user.surname}`,
	id: user.id
}));

alert(usersMapped[0].id);
alert(usersMapped[0].fullName);



// --- 



function sortByAge(arr) {
	arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);

alert(arr[0].name);
alert(arr[1].name);
alert(arr[2].name);



// ---



function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}



// --- 



function getAverageAge(users) {
	return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

alert(getAverageAge(arr));



// --- 


function unique(arr) {
	let sortArr = [];

	for (let str of arr) {
		if (!sortArr.includes(str)) {
			sortArr.push(str);
		}
	}

	return sortArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
	"харе", "харе", "кришна", "кришна", ":-O"
];

alert(unique(strings));



// ---



function groupById(array) {
	return array.reduce((obj, value) => {
		obj[value.id] = value;
		return obj;
	}, {})
}