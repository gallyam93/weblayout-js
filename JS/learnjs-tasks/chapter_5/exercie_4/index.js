let fruits = ["Яблоки", "Груша", "Апельсин"];

let shoppingCart = fruits;
shoppingCart.push("Банан");

alert(fruits.length);

/* код выведет длинну массива 4, т.к. масив и объект один и тот тип данных, и переменная shoppingCart 
ссылается на массив а не хранит его в себе и изменения происходят в объекте на который он ссылается*/

// ---



let styles = ['Джаз', 'Блюз'];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");


// --- 


let arr = ["a", "b"];

arr.push(function () {
	alert(this);
});

arr[2]();

// вывдет массив с добавленной функцией, т.к. при вызове функции в массив добавляется фукция

// ---


function sumInput() {
	let inputNumber = [];

	while (true) {

		let inputValue = prompt("Введите число", 0);

		if (inputValue === "" || inputValue === null || !isFinite(inputValue)) break;

		numbers.push(+inputValue);
	}

	let sum = 0;
	for (let number of numbers) {
		sum += number;
	}
	return sum;
}


// --- 


function getMaxSubSum(arr) {
	let maxSum = 0;
	let partialSum = 0;

	for (let item of arr) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if (partialSum < 0) partialSum = 0;
	}

	return maxSum;
}