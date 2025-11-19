/* GLOBAL */
body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: #0c0c0c;
  color: #fff;
}

/* HEADER */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #111;
  border-bottom: 2px solid #0ff;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #0ff;
}

nav a {
  text-decoration: none;
  color: #aaa;
  margin: 0 15px;
  transition: 0.3s;
}

nav a:hover {
  color: #0ff;
}

/* HERO */
.hero {
  text-align: center;
  padding: 120px 20px;
  background: url('https://i.imgur.com/5b8Q1.png') center/cover no-repeat;
  background-blend-mode: multiply;
  background-color: rgba(0, 0, 0, 0.6);
}

.hero h1 {
  font-size: 50px;
  text-shadow: 0 0 10px #0ff;
}

.hero p {
  font-size: 20px;
  color: #ccc;
}

/* GAMES SECTION */
.games {
  padding: 50px 20px;
  text-align: center;
}

.game-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.game-card {
  background: #111;
  padding: 15px;
  width: 220px;
  border: 2px solid #0ff;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.game-card img {
  width: 100%;
  border-radius: 8px;
}

.game-card h3 {
  margin: 10px 0 5px;
  color: #0ff;
}

.game-card p {
  font-size: 14px;
  color: #ccc;
}

.game-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #0ff;
  border-color: #0ff;
}

/* MODAL */
.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  justify-content: center;
  align-items: center;
}

.modal-content {
  position: relative;
  width: 80%;
  max-width: 900px;
  height: 70%;
  background: #111;
  border: 2px solid #0ff;
  border-radius: 10px;
}

.modal-content iframe {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
}

.close {
  position: absolute;
  top: 10px;
  right: 20px;
  color: #0ff;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

/* NEWS SECTION */
.news {
  padding: 40px 20px;
  text-align: center;
}

/* FOOTER */
footer {
  background: #111;
  text-align: center;
  padding: 20px;
  border-top: 2px solid #0ff;
}
