var time = document.getElementById('time'),
	date = document.getElementById('date');

function startTime() {
	// use var here for legacy OS support
	var today = new Date(),
		hours = today.getHours(),
		minutes = today.getMinutes();
	if (hours > 12) {
		hours = hours-12;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	time.innerHTML = hours + '<span class="delim">:</span>' + minutes;
	date.innerHTML = today.toLocaleDateString(undefined, {"weekday":"long", "month":"long", "day":"numeric"});
	t = setTimeout(function() {
		startTime()
	}, 500);
}
startTime();
