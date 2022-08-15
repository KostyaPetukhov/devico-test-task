'use strict';

// 1. Make a function that displays the number of times it has been called

let counter = 0;

function makeCounter() {
	counter++;
	console.log('Function called ' + counter);
}

makeCounter();
makeCounter();
makeCounter();

// 2. Write a function that replaces all ones with zeros and vice versa for the
// object

const example = {
	left: {
		left: {
			left: 1,
			right: {
				left: 0,
				right: 1,
			},
		},
		right: {
			left: 0,
			right: 1,
		},
	},
	right: 1,
};
console.log('before', example);

const changeObject = (obj) => {
	for (const prop in obj) {
		const value = obj[prop];
		if (typeof value === 'object') {
			changeObject(value);
		} else {
			obj[prop] = Number(!Boolean(value));
		}
	}
	return obj;
};

const cloneObj = JSON.parse(JSON.stringify(example));
changeObject(cloneObj);
console.log('after', cloneObj);

// 3. Make a function that takes a number n, and returns a two-dimensional array with
//length n*n, with 2 on the diagonal and 1 on the top and bottom of the resulting
//segment

const newArr = (size) => {
	const arr = [];
	for (let i = 0; i < size; i++) {
		arr[i] = [];
		for (let j = 0; j < size; j++) {
			if (i === j || i === size - j - 1) {
				arr[i][j] = 2;
			} else if (
				(i < j && i < size - j - 1) ||
				(i > j && i > size - j - 1)
			) {
				arr[i][j] = 1;
			} else {
				arr[i][j] = 0;
			}
		}
	}
	return arr;
};
console.log(newArr(5));

// 4. Create a similar element, when you click on any of the blocks it should change
// own color

const rootTable = document.getElementById('root');
let selectedElement;

document.addEventListener('click', function changeColor(e) {
	const { target: elem } = e;
	if (!rootTable.contains(elem)) return;
	highlight(elem);
});

function highlight(element) {
	if (selectedElement) {
		selectedElement.classList.remove('highlight');
	}
	selectedElement = element;
	selectedElement.classList.add('highlight');
}
