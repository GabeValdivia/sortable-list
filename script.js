const draggable_list = document.getElementById('draggable-list');
const check = document.getElementById('check');

const richestPeople = [
	'Jeff Bezos',
	'Bill Gates',
	'Warren Buffet',
	'Bernard Arnault',
	'Carlos Slim Helu',
	'Amancio Ortega',
	'Larry Ellison',
	'Mark Zuckerberg',
	'Michael Bloomberg',
	'Larry Page'
]

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM