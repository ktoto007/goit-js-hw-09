const BODY = document.querySelector('body');
const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');

stopButton.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let timerInterval = null;

function generateNewColorForBody() {
  BODY.style.backgroundColor = getRandomHexColor();
}

function chainingBodyColors() {
  startButton.disabled = true;
  stopButton.disabled = false;
  timerInterval = setInterval(generateNewColorForBody, 1000);
}

function stopChangingBodyColors() {
  clearInterval(timerInterval);
  startButton.disabled = false;
  stopButton.disabled = true;
}

startButton.addEventListener('click', chainingBodyColors);

stopButton.addEventListener('click', stopChangingBodyColors);
