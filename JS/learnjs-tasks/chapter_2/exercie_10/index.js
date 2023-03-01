if ("0") {
	alert('Привет');
}
// да так как условие в скобках переведется в числовое значение
// в числовом значении любая не пустая строка станет 1
// 1 это true, а 0 это false


let officialNameJS = prompt(`Какое официальное название JavaScript?`, '');

if (officialNameJS == `ECMAScript`) {
	alert(`Верно!`)
} else {
	alert(`Не знаете? ECMAScript!`)
};

let number = prompt(`Введите чило`, '');

if (number > 0) {
	alert('1')
} else if (number < 0) {
	alert('-1')
} else {
	alert('0')
}



// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result = (a + b < 4) ? 'Мало' : 'Много';



// let message;

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

let message = (login == 'Сотрудник') ? 'Привет' : 
(login == 'Директор') ? 'Здравствуйте' :
(login == '') ? 'Нет логина' : '';