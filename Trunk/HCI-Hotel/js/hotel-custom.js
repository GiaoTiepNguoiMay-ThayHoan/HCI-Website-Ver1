$(document).ready(function() {
	$(window).scroll(function() {
		$('.navbar.navbar-default.navfixedtop').removeClass('navbar-fixed-top');
		var distance = $('.navbar.navbar-default.navfixedtop').offset().top;
		if ($(window).scrollTop()  >= distance){
			console.log('aaa');
			$('.navbar.navbar-default.navfixedtop').addClass('navbar-fixed-top');
		}
		else {
			$('.navbar.navbar-default.navfixedtop').removeClass('navbar-fixed-top');
		}
	});
});