const $startButton = document.getElementById('button-start');
const $elapsedTime = document.getElementById('elapsed-time');
const $runningStatus = document.getElementById('status');
const $resetButton = document.getElementById('button-reset');

let seconds = 00;
let minutes = 00;
let hours = 00;
let interval;

$startButton.addEventListener('click', (e) => {

  if (interval === undefined) {
    interval = setInterval(startTimer, 10);
    let hiddenReset = document.createElement('button');
    $startButton.innerHTML = 'START'
    $startButton.style["background-color"] = "#00ff19"
    $startButton.style["color"] = "blue";
  } else if (seconds > 00) {
    clearInterval(interval);
    interval = undefined;
    let hiddenReset = document.createElement('button');
    $startButton.innerHTML = 'PAUSED'
    $startButton.style["background-color"] = "red"
    $startButton.style["color"] = "yellow";
  }
});

function startTimer() {
  seconds++;
  $elapsedTime.innerHTML = "0" + hours + ":" + "0" + minutes + ":" + seconds;
}

function pauseTimer() {
  if (interval) {
    console.log('setInterval Running')
  }
}
