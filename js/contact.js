$(function(){
	$('a.smoothScroll').bind('click',function(event){
		var $anchor=$(this); 
		/* if you want to use one of the easing effects: $('html, body').stop().animate({scrollLeft: $($anchor.attr('href')).offset().left}, 1500,'easeInOutExpo'); */ 
		$('html, body, *').animate({scrollLeft: $anchor.attr('href')[1] * (window.innerWidth + 10)}, 1000); 
		event.preventDefault();
	});
}); 