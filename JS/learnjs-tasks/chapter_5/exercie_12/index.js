let user = {
	name: "Василий Иванович",
	age: 35
};

let jsonUser = JSON.stringify(user);

let newUser = JSON.parse(jsonUser);



// --- 



let room = {
	number: 23
};

let meetup = {
	title: "Совещание",
	occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
	place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
	return (key != "" && value == meetup) ? undefined : value;
}));