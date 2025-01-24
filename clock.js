var time = document.getElementById('time'),
	date = document.getElementById('date'),
	months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	];

function startTime() {
	// use var here for legacy OS support
	var today = new Date(),
		hours = today.getHours(),
		minutes = today.getMinutes();
	if (hours === 0) {
		hours = 12;
	}
	if (hours > 12) {
		hours = hours-12;
	}
	if (minutes < 10) {
		minutes = '0' + minutes;
	}
	time.innerHTML = hours + '<span class="delim">:</span>' + minutes;
	// Don't use toLocaleDateString because output varies across agents 
	// date.innerHTML = today.toLocaleDateString(undefined, {"weekday":"long", "month":"long", "day":"numeric"});
	date.innerHTML = days[today.getDay()] + ', ' + months[today.getMonth()] + ' ' + today.getDate();
	t = setTimeout(function() {
		startTime()
	}, 500);
}
startTime();
