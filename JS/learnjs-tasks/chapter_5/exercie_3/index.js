function ucFirst(str) {
	if (!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("вася"));


// --- 


function checkSpam(str) {
	let lowStr = str.toLowerCase();

	return lowStr.includes('viagra') || lowStr.includes('xxx');
}


// --- 


function truncate(str, maxlength) {
	if (str.length > maxlength) {
		return str.slice(0, maxlength - 1) + '…';
	} else {
		return str;
	}
}


// --- 


function extractCurrencyValue(str) {
	return +str.slice(1);
}