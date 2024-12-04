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
	document.getElementById('time').innerHTML = hours + '<span class="delim">:</span>' + minutes;
	t = setTimeout(function() {
		startTime()
	}, 500);
}
startTime();
