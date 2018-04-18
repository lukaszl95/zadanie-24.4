const formatDate = (timeInSeconds) => {
	if (!isFinite(timeInSeconds)) {
    return '0s';
  	}
  	if (timeInSeconds>=86400) {
  		var days = Math.floor(timeInSeconds / (3600 * 24));
    	timeInSeconds %= (3600 * 24); 
  	}
  	if (timeInSeconds>=3600) {
		var hours = Math.floor(timeInSeconds  / 3600);
		timeInSeconds %= 3600;
  	}
    if (timeInSeconds>=60) {
    	var minutes = Math.floor(timeInSeconds / 60);
    	timeInSeconds %= 60;
    }
    if (timeInSeconds<60) {
    	var seconds = Math.floor(timeInSeconds % 60);
    }
    return (days ? days + 'd ' : '') + (hours ? hours + 'h ' : '') + (minutes ? minutes + 'm ' : '') + ( seconds ? seconds + 's' : '');
}

module.exports = formatDate;