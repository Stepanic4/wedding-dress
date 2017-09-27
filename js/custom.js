
$(document).ready(function() {

$('.slider').slick({
	dots: true
});

});


////////////////////////////////////////////////////// BURGER /////////////////////////////////////

$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
	});


////////////////////////////////////////////////// SCROLL ///////////////////////////////////////////////////

$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	e.preventDefault();

	var target = this.hash,
	$target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 700, 'swing', function () {
		window.location.hash = target;
	});
});