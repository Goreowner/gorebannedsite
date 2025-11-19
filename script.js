// Hero button
document.getElementById("startBtn").addEventListener("click", () => {
  alert("Game starting… (replace with your link!)");
});

// Play games
function playGame(game) {
  switch(game) {
    case 'game1':
      window.open('https://example.com/space-shooter', '_blank');
      break;
    case 'game2':
      window.open('https://example.com/maze-runner', '_blank');
      break;
    case 'game3':
      window.open('https://example.com/puzzle-quest', '_blank');
      break;
    default:
      alert('Game not available yet!');
  }
}
