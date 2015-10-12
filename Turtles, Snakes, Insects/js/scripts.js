$(document).ready(function() {
	var subject = prompt('Would you like to learn about turtles, snakes or insects?');

	if (subject === 'turtles') {
		$('#turtles').show();
	} else if (subject === 'snakes') {
		$('#snakes').show();
	}	else if (subject === 'insects') {
		$('#insects').show();	
	}
		else {
		$('#notavalidchoice').show();
	}
});