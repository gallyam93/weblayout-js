let numberA = prompt('Введите число a', '');
let numberB = prompt('Введите число b', '');

let summ = +numberA + +numberB;

alert(summ);


// --- 


alert(6.35.toFixed(1));
alert(Math.round(6.35 * 10) / 10);


// ---


function readNumber() {
	while (true) {
		let numberX = +prompt('Введите число', 0);
		if (typeof (numberX) === 'number') {
			alert('Вы ввели число');
			break;
		} else if (numberX === 0 || numberX === '') {
			numberX = Null;
			break;
		}
	}
}


// ---


let i = 0;
while (i != 10) {
	i += 0.2;
}

// из-за того что счетчик добовляет десятичную часть, пройзойдет потеря точности
// ---


function random(min, max) {
	return min + Math.random() * (max - min);
}



// --- 



function random(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
