let $startButton = document.getElementById('button-start');
let $elapsedTime = document.getElementById('elapsed-time');

$startButton.addEventListener('click', (e) => {

	startTimer()
});

function startTimer () {
		$elapsedTime.innerHTML = '00:00:01';
}

