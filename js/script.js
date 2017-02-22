$(function() {
	scrollAnimate();
});

function scrollAnimate() {
	$("nav a").click(function(event) {
		event.preventDefault();
		var hash = this.hash;
		$("html,body").animate({scrollTop: $(hash).offset().top-10},1000);
	});
}