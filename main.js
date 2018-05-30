let $startButton = document.getElementById('button-start');
let $elapsedTime = document.getElementById('elapsed-time');

let seconds = 00;
let minutes = 00;
let hours = 00;
let interval;

$startButton.addEventListener('click', (e) => {
    if (interval === undefined ) {
        interval = setInterval(startTimer, 1000);        
    } else if (seconds > 00) {    	
      clearInterval(interval);
      interval = undefined;                
    }
});

function startTimer() {
    seconds++;
    $elapsedTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function pauseTimer() {
    if (interval) {
        console.log('setInterval Running')
    }
}

// interval = setInterval(startTimer);
//       interval(startTimer, 1000);