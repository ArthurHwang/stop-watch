const $startButton = document.getElementById('button-start');
const $elapsedTime = document.getElementById('elapsed-time');
const $runningStatus = document.getElementById('status');
const $resetButton = document.getElementById('button-reset');
const $inputLimit = document.getElementById('user-limit');

let seconds = 00;
let minutes = 00;
let hours = 00;
let interval;

$startButton.addEventListener('click', (e) => {
  if (interval === undefined) {
    interval = setInterval(startTimer, 1000);
    $startButton.innerHTML = 'START'
    $startButton.style["background-color"] = "#00ff19"
    $startButton.style["color"] = "blue";
    $resetButton.innerHTML = 'RESET';
    $resetButton.style["background-color"] = "orange"
  } else if (seconds > 00) {
    clearInterval(interval);
    interval = undefined;
    let hiddenReset = document.createElement('button');
    $startButton.innerHTML = 'PAUSED'
    $startButton.style["background-color"] = "red"
    $startButton.style["color"] = "yellow";
  }
});

$resetButton.addEventListener('click', (e) => {
  if (seconds) {
    clearInterval(interval);
    $elapsedTime.innerHTML = "00:00:00"
    seconds = 00;
    interval = undefined;
    $startButton.innerHTML = 'START'
    $startButton.style["background-color"] = "#00ff19"
    $startButton.style["color"] = "blue";
    $resetButton.style["background-color"] = "black";
    $resetButton.style["color"] = "black"
  }
})

function startTimer() {
  let limit = Number($inputLimit.value);
  if (limit === 0) {
    seconds++
    $elapsedTime.innerHTML = "0" + hours + ":" + "0" + minutes + ":" + seconds;
  } else if (seconds < limit) {
    seconds++
    $elapsedTime.innerHTML = "0" + hours + ":" + "0" + minutes + ":" + "0" + seconds;
  } else if (seconds === limit) {
    window.alert('TIMES UP DUDE')
    clearInterval(interval);
  }
}
