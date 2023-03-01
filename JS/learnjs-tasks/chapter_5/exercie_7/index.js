function unique(arr) {
	return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert(unique(values));



// ---



function aclean(arr) {
	let map = new Map();

	for (let word of arr) {
		let sorted = word.toLowerCase().split("").sort().join("");
		map.set(sorted, word);
	}

	return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));



// ---



let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys);