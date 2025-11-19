// Open modal and load game
function openGameModal(game) {
  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");

  switch(game) {
    case 'game1':
      frame.src = "https://www.coolmathgames.com/0-math-lines"; // safe math game
      break;
    case 'game2':
      frame.src = "https://studio.code.org/s/course1"; // code learning game
      break;
    case 'game3':
      frame.src = "https://www.mathplayground.com/logic.html"; // logic puzzle
      break;
    default:
      alert("Game not available!");
      return;
  }

  modal.style.display = "flex";
}

// Close modal
function closeGameModal() {
  const modal = document.getElementById("gameModal");
  const frame = document.getElementById("gameFrame");
  frame.src = ""; // Stop the game
  modal.style.display = "none";
}

// Close modal if click outside content
window.onclick = function(event) {
  const modal = document.getElementById("gameModal");
  if (event.target === modal) {
    closeGameModal();
  }
}
