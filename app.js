const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');

gridBtn.addEventListener('click', clickGrid);
listBtn.addEventListener('click', clickList);

function clickGrid(e) {
	e.preventDefault();
	updateClass("grid");
}

function clickList(e) {
	e.preventDefault();
	updateClass("list");
}

function updateClass(newStyle) {
	const element = document.getElementById("card-wrapper");
  element.classList.remove("grid");
	element.classList.remove("list");
	element.classList.add(newStyle);
}