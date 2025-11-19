const gameContainer = document.getElementById("gameContainer");

function openGameModal(game) {
  const modal = document.getElementById("gameModal");
  modal.style.display = "flex";

  // Clear previous game
  gameContainer.innerHTML = "";

  if (game === 'mathPuzzle') {
    loadMathPuzzle();
  } else if (game === 'logicMaze') {
    loadLogicMaze();
  } else if (game === 'brainBreak') {
    loadBrainBreak();
  }
}

function closeGameModal() {
  const modal = document.getElementById("gameModal");
  modal.style.display = "none";
  gameContainer.innerHTML = ""; // Remove game content
}

window.onclick = function(event) {
  const modal = document.getElementById("gameModal");
  if (event.target === modal) {
    closeGameModal();
  }
}

// ------------------ GAMES ------------------

// 1️⃣ Math Puzzle
function loadMathPuzzle() {
  gameContainer.innerHTML = `
    <div style="text-align:center; color:#0ff;">
      <h2>Math Puzzle</h2>
      <p id="question"></p>
      <input type="number" id="answer" placeholder="Your answer">
      <button onclick="checkAnswer()">Submit</button>
      <p id="score">Score: 0</p>
    </div>
  `;
  window.score = 0;
  nextQuestion();
}

function nextQuestion() {
  window.num1 = Math.floor(Math.random() * 10 + 1);
  window.num2 = Math.floor(Math.random() * 10 + 1);
  document.getElementById("question").innerText = `${window.num1} + ${window.num2} = ?`;
  document.getElementById("answer").value = "";
}

function checkAnswer() {
  const answer = Number(document.getElementById("answer").value);
  if (answer === window.num1 + window.num2) window.score++;
  document.getElementById("score").innerText = `Score: ${window.score}`;
  nextQuestion();
}

// 2️⃣ Logic Maze
function loadLogicMaze() {
  gameContainer.innerHTML = `
    <canvas id="mazeCanvas" width="300" height="300" style="background:#222;"></canvas>
    <p style="color:#0ff;">Use arrow keys to reach the green square!</p>
  `;
  const canvas = document.getElementById("mazeCanvas");
  const ctx = canvas.getContext("2d");
  const size = 10;
  const rows = 10;
  const cols = 10;
  let player = {x:0, y:0};

  function drawMaze() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i=0;i<rows;i++) {
      for (let j=0;j<cols;j++) {
        ctx.strokeStyle = "#0ff";
        ctx.strokeRect(j*size*3,i*size*3,size*3,size*3);
      }
    }
    // Draw player
    ctx.fillStyle = "#f00";
    ctx.fillRect(player.x*size*3, player.y*size*3, size*3, size*3);
    // Draw goal
    ctx.fillStyle = "#0f0";
    ctx.fillRect((cols-1)*size*3, (rows-1)*size*3, size*3, size*3);
  }

  function movePlayer(dx, dy) {
    player.x = Math.max(0, Math.min(cols-1, player.x + dx));
    player.y = Math.max(0, Math.min(rows-1, player.y + dy));
    drawMaze();
    if (player.x === cols-1 && player.y === rows-1) alert("You won!");
  }

  window.addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowUp') movePlayer(0,-1);
    if (e.key === 'ArrowDown') movePlayer(0,1);
    if (e.key === 'ArrowLeft') movePlayer(-1,0);
    if (e.key === 'ArrowRight') movePlayer(1,0);
  });

  drawMaze();
}

// 3️⃣ Brain Break (Catch falling stars)
function loadBrainBreak() {
  gameContainer.innerHTML = `
    <canvas id="brainCanvas" width="300" height="300" style="background:#222;"></canvas>
    <p style="color:#0ff;">Move the bar with arrow keys to catch falling stars!</p>
    <p id="score">Score: 0</p>
  `;
  const canvas = document.getElementById("brainCanvas");
  const ctx = canvas.getContext("2d");
  let bar = {x:120, y:280, width:60, height:10};
  let stars = [];
  let score = 0;
  let gameInterval;

  function spawnStar() {
    stars.push({x: Math.random()*280, y:0, size:10});
  }

  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // Draw bar
    ctx.fillStyle = "#0ff";
    ctx.fillRect(bar.x, bar.y, bar.width, bar.height);
    // Draw stars
    ctx.fillStyle = "#ff0";
    stars.forEach(s => ctx.fillRect(s.x, s.y, s.size, s.size));
    // Move stars
    stars.forEach(s => s.y += 2);
    // Check catch
    stars.forEach((s,i)=>{
      if (s.y + s.size >= bar.y && s.x + s.size >= bar.x && s.x <= bar.x + bar.width) {
        stars.splice(i,1);
        score++;
        document.getElementById("score").innerText = `Score: ${score}`;
      }
    });
    // Remove stars off screen
    stars = stars.filter(s => s.y < 300);
  }

  gameInterval = setInterval(draw, 20);
  setInterval(spawnStar, 1000);

  window.addEventListener('keydown', (e)=>{
    if (e.key === 'ArrowLeft') bar.x = Math.max(0, bar.x-10);
    if (e.key === 'ArrowRight') bar.x = Math.min(240, bar.x+10);
  });
}
