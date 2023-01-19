const tiles = document.querySelectorAll('.tile');
const luigiImg = document.querySelector('#luigi');

tiles.forEach(tile => tile.addEventListener('click', endGame));

function endGame() {
  luigiImg.style.display = 'block';
  tiles.forEach(tile => tile.classList.add('hidden'));
  tiles.forEach(tile => tile.removeEventListener('click', endGame));
}
