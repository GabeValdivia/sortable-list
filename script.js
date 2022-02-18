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
function createList() {
	[...richestPeople]
	.map(a => ({ value: a, sort: Math.random() }))
	.sort((a, b) => a.sort - b.sort)
	.map(a => a.value)	
	.forEach((person, index) => {

		const listItem = document.createElement('li');

		// listItem.classList.add('over');

		listItem.setAttribute('data-index', index);

		listItem.innerHTML = `
			<span class="number">${index + 1}</span>
			<div class="draggable" draggable="true">
				<p class="person-name">${person}</p>
				<i class="fas fa-grip-lines"></i>
			</div>
		`;

		listItems.push(listItem);

		draggable_list.appendChild(listItem);
	});

	addEventListeners();
}

function dragStart() {
	// console.log('Event: ', 'dragstart');
}

function dragEnter() {
	console.log('Event: ', 'dragenter');
  this.classList.add('over');
}

function dragLeave() {
    console.log('Event: ', 'dragleave');
	this.classList.remove('over');
}

function dragOver() {
	// console.log('Event: ', 'dragover');
}

function dragDrop() {
	// console.log('Event: ', 'drop');
}

function addEventListeners() {
	const draggables = document.querySelectorAll('.draggable');
	const dragListItems = document.querySelectorAll('.draggable-list li');

	draggables.forEach(draggable => {
		draggable.addEventListener('dragstart', dragStart);
	});
	
	dragListItems.forEach(item => {
		item.addEventListener('dragover', dragOver);
		item.addEventListener('drop', dragDrop);
		item.addEventListener('dragenter', dragEnter);
		item.addEventListener('dragleave', dragLeave);
	});
}