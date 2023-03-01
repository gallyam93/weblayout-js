alert(null || 2 || undefined); // 2



alert(alert(1) || 2 || alert(3)); // 1 , 2



alert(1 && null && 2); // null



alert(alert(1) && alert(2)); // 1 , undefind



alert(null || 2 && 3 || 4); // 3



let age = 20;

if (age >= 14 && age <= 90) {
	alert(`true`)
};



let age2 = 20;

if (age < 14 || age > 90) {
	alert('true')
};

if (!(age >= 14 && age <= 90)) {
	alert('true')
};



if (-1 || 0) alert('first'); // выполнится
if (-1 && 0) alert('second'); // не выполниться 
if (null || -1 && 1) alert('third'); // выполнится



let inputLogin = prompt('Введите логин', '');

if (inputLogin === 'Админ') {
	let inputPassword = prompt('Введите пароль', '');

	if (inputPassword === 'Я главный') {
		alert('Здравствуйте')
	} else if (inputPassword === '') {
		alert('Отмена')
	} else {
		alert('Неверный пароль')
	}
} else if (inputLogin === '') {
	alert('Отменено')
} else {
	alert('Я вас не знаю')
}