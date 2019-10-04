$(function() {
	$('.eles ul li a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		var body = $('html,body');
		body.animate({ scrollTop: 900 }, 1000);
		console.log('da click vao li');
	});
});