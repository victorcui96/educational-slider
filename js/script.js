$(document).ready(function() {
	var slider = $('.my-slider').unslider({
		animation: 'vertical',
		arrows: {
			prev: '<i class="fa fa-arrow-circle-left fa-2x unslider-arrow prev" aria-hidden="true"></i>',
			next: '<i class="fa fa-arrow-circle-right fa-2x unslider-arrow next aria-hidden="true"></i>'
		},
		infinite: true
	});
});