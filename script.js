const gameContainer = document.getElementById("gameContainer");

function openGameModal(game) {
  const modal = document.getElementById("gameModal");
  modal.style.display = "flex";
  gameContainer.innerHTML = "";

  if (game === 'mathPuzzle') {
    gameContainer.innerHTML = `<p>Math Puzzle game coming soon!</p>`;
  } else if (game === 'logicMaze') {
    gameContainer.innerHTML = `<p>Logic Maze game coming soon!</p>`;
  } else if (game === 'brainBreak') {
    gameContainer.innerHTML = `<p>Brain Break mini-game coming soon!</p>`;
  } else if (game.startsWith('break')) {
    gameContainer.innerHTML = `<p>This Brain Break game is not available yet.</p>`;
  } else {
    gameContainer.innerHTML = `<p>Game not available.</p>`;
  }
}

function closeGameModal() {
  document.getElementById("gameModal").style.display = "none";
  gameContainer.innerHTML = "";
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById("gameModal");
  if (event.target === modal) closeGameModal();
}
