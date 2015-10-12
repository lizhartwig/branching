$(document).ready(function() {
	var height = parseInt(prompt("What is your height in inches?"));

	if (height >= 46) {
		$('#at46').show();	
	}	else if (height >= 42) {
		$('#at42').show();
	}	else if (height >= 40) {
		$('#at40').show();
	}	else if (height >= 35) {
		$('#at35').show();
	} else {
		$('#under35').show();
	}
});