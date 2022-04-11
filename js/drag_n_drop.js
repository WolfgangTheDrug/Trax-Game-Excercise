function handleDragStart(e) {
  this.style.filter = "grayscale(50%)";
}

function handleDragEnd(e) {
  this.style.filter = "grayscale(0%)";
}

function addFlip(e) {
  this.classList.toggle('.flip-vertical-right');
  this.classList.toggle('.flip-vertical-right');
}

let tile = document.querySelector('.tile');

tile.addEventListener('dragstart', handleDragStart);
tile.addEventListener('dragend', handleDragEnd);

tile.addEventListener('dblclick', addFlip);
