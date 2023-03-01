function makeUser() {
	return {
		name: "John",
		ref: this
	};
}

let user = makeUser();

alert(user.ref.name);

// ошибка, так как this выывается как функция.

// ---


let calculator = {
	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	},

	read() {
		this.a = +prompt('a?', 0);
		this.b = +prompt('b?', 0);
	}
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


// ---


let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function () {
		console.log(this.step);
		return this;
	}
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep();
ladder.down();
ladder.showStep();