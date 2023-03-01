// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert(a == b);


// да если один созданы через new через один и тот же внешний объект

// ---


function Calculator() {

	this.read = function () {
		this.a = +prompt('a?', 0);
		this.b = +prompt('b?', 0);
	};

	this.sum = function () {
		return this.a + this.b;
	};

	this.mul = function () {
		return this.a * this.b;
	};
}

let calculator = new Calculator();
calculator.read();

console.log("Sum=" + calculator.sum());
console.log("Mul=" + calculator.mul());


// --- 


function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function () {
		this.value += +prompt('Сколько нужно добавить?', 0);
	};

}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);