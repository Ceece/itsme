$('nav a').click(function(){
	var href = $(this).attr('href');
	if ( href.match(/#/g) ) {
		var offset = href == "#" ? 0 : $( href ).offset().top;
		$('html, body').animate({
			scrollTop: offset
		}, 500);
	}
	return false;
});

$('.portfolio-img').click(function(event) {
	/* Open porfolio modal */
	var nth = $(this).attr('nth');
	var modalSelector = '.modal[nth=' + nth + ']';
	$(modalSelector).modal();
});