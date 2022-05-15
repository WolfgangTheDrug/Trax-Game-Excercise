const tile = document.querySelector('.tile')

function handleDragStart(e) {
  this.style.opacity = '0.4';

  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnd(e) {
  this.style.filter = "grayscale(0%)";
}

function handleDrop(e) {
  e.stopPropagation();

  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData('text/html');
  }

  return false;
}

function addFlip(e) {
  this.classList.toggle('flipped');
}

tile.addEventListener('dragstart', handleDragStart);
tile.addEventListener('dragend', handleDragEnd);
tile.addEventListener('dblclick', addFlip);
