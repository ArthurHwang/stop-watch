let $startButton = document.getElementById('button-start');
let $elapsedTime = document.getElementById('elapsed-time');

let seconds = 00;
let minutes = 00;
let hours = 00;
let interval;

$startButton.addEventListener('click', (e) => {
	interval = setInterval(startTimer);
	if(interval) {
		console.log("running")
	} else {
		console.log("not running")
	}	
	interval(startTimer, 1000);	
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
