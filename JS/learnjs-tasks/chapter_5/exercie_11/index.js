let d = new Date(2012, 1, 20, 3, 12);
alert(d);



// ---



function getWeekDay(date) {
	let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

	return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
alert(getWeekDay(date));



// ---



function getLocalDay(date) {

	let day = date.getDay();

	if (day == 0) {
		day = 7;
	}

	return day;
}

let date = new Date(2012, 0, 3);
alert(getLocalDay(date));



// ---




function getDateAgo(date, days) {
	let dateCopy = new Date(date);

	dateCopy.setDate(date.getDate() - days);
	return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert(getDateAgo(date, 1));
alert(getDateAgo(date, 2));
alert(getDateAgo(date, 365));



// --- 



function getLastDayOfMonth(year, month) {
	let date = new Date(year, month + 1, 0);
	return date.getDate();
}



// ---



function getSecondsToday() {
	let now = new Date();

	let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	let diff = now - today;
	return Math.round(diff / 1000);
}

alert(getSecondsToday());



// --- 


function getSecondsToTomorrow() {
	let now = new Date();

	let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

	let diff = tomorrow - now;
	return Math.round(diff / 1000);
}