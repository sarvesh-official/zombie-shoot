// Iteration 1: Declare variables required for this game
var gameBody = document.getElementById("game-body");
var timerBox = document.getElementById("timer-box");
var timer = document.getElementById("timer");
var lives = document.getElementById("lives");
var maxLives = document.getElementById("max-lives");
var zombieNumber = 0;
let image = [
  "./assets/zombie-1.png",
  "./assets/zombie-2.png",
  "./assets/zombie-3.png",
  "./assets/zombie-4.png",
  "./assets/zombie-5.png",
  "./assets/zombie-6.png",
];
// Iteration 1.2: Add shotgun sound
const shotgunAudio = new Audio("./assets/shotgun.wav");
gameBody.onclick = () => {
  shotgunAudio.currentTime = 0;
  shotgunAudio.play();
};
// Iteration 1.3: Add background sound
var backgroundSound = new Audio("./assets/bgm.mp3");
backgroundSound.play();
backgroundSound.loop = true;
// Iteration 1.4: Add lives
var lives = 5;
var maxLives = 5;
// Iteration 2: Write a function to make a zombie
function zombieMaking() {
  let randomZombie = image[randomInteger(0, image.length)];
  var zombie = document.createElement("img");
  zombie.src = randomZombie;
  zombie.id = `zombie${zombieNumber}`;
  zombie.className = "zombie-image";
  zombie.style.transform = `translateX(${randomInteger(10, 80)}vw)`;
  zombie.style.animationDuration = `${randomInteger(1, 6)}s`;
  gameBody.appendChild(zombie);
  zombie.onclick = () => {
    zombieKill(zombie);
  };
}
// zombieMaking()
// Iteration 3: Write a function to check if the player missed a zombie
function zombieTop() {}
// Iteration 4: Write a function to destroy a zombie when it is shot or missed
function zombieKill(zombie) {
  zombie.style.display = "none";
  zombieNumber++;
  zombieMaking();
}
// Iteration 5: Creating timer
timer = 60;
var time = setInterval(function () {
  timer--;
  document.getElementById("timer").textContent = timer;

  if (lives == 0) {
    clearInterval(time);
    location.href = "./game-over.html";
  }
  if (timer == 0) {
    clearInterval(time);
    location.href = "./win.html";
  }
}, 1000);
// Iteration 6: Write a code to start the game by calling the first zombie
zombieMaking();
// Iteration 7: Write the helper function to get random integer
function randomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
