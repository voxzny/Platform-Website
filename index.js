function updateClock() {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	
	var hourFormat = localStorage.getItem('hourFormat') || '12';
	var am_pm = hours >= 12 ? 'PM' : 'AM';
	
	if (hourFormat === '12') {
	  hours = hours % 12;
	  hours = hours ? hours : 12; // 0 should be displayed as 12
	}
  
	hours = padZero(hours);
	minutes = padZero(minutes);
	seconds = padZero(seconds);
  
	var timeString = hourFormat === '12' ? (hours + ':' + minutes + ':' + seconds + ' ' + am_pm) : (hours + ':' + minutes + ':' + seconds);
	document.getElementById('clock').innerHTML = timeString.replace(/:/g, '<br>'); // Replace colons with line breaks
  }
  
  function padZero(num) {
	return (num < 10 ? '0' : '') + num;
  }
  
  function switchFormat() {
	var formatSwitch = document.getElementById('formatSwitch');
	var hourFormat = formatSwitch.checked ? '24' : '12';
	localStorage.setItem('hourFormat', hourFormat);
	updateClock();
  }
  
  updateClock();
  setInterval(updateClock, 1000);





  