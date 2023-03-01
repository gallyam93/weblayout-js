function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Родители разрешили?');
	}
}

function checkAge(age) {
	if (age > 18) {
		return true;
	}
	return confirm('Родители разрешили?');
}

//функции работают одинакого в первом случае если условие if === false то код идет ниже не зависимо от того если дополнительные услвония "else if" или "else"

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Родители разрешили?');
	}
}

function checkAge(age) {
	return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
	return (age > 18) || confirm('Родители разрешили?');
}


// --- 

min(2, 5);
min(3, -1);
min(1, 1);

function getMinNumber(i, j) {
	if (i < j) {
		return i;
	} else if (i > j) {
		return j;
	} else {
		return 'числа равны'
	}
};


// --- 


function getPow(x, n) {
	let result = x;

	for (let i = 1; i < n; i++) {
		result *= x;
	}
	return result;
}

let x = prompt("Введитее число x", '');
let n = prompt("Введите степень n", '');

if (n < 1) {
	alert(`Степень должна быть натуральным числом`);
} else {
	alert(pow(x, n));
}