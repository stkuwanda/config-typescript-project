// console.log('Run....');

// type User = { name: string; age: number, id: string };
// const user: User = { name: 'Simbarashe', age: 34, id: 'ehuiughhuihi23rbubjb' };

let appId = 'abc';
const button = document.querySelector('button')!;

function add(n1: number, n2: number) {
	if (n1 + n2 > 0) {
		return n1 + n2;
	}
	return;
}

function clickHandler(message: string) {
	// let userName = 'Max';
	console.log('Clicked! ' + message);
}

// a comment
if (button) {
	button.addEventListener('click', clickHandler.bind(null, "You're welcome!"));
}
