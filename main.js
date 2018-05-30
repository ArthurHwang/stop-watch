let $startButton = document.getElementById('button-start');
let $elapsedTime = document.getElementById('elapsed-time');

let seconds = 00;
let minutes = 00;
let hours = 00;

$startButton.addEventListener('click', (e) => {
	let interval = setInterval(startTimer)
	interval(startTimer, 1000)
});

function startTimer () {
		seconds++
		$elapsedTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

