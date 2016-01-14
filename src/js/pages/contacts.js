$(function () {
	$('.fancybox').fancybox({
		openEffect : 'elastic',
		openSpeed  : 150,

		overlay : {
			css : {
				'background' : 'rgba(58, 42, 45, 0.95)'
			}
		},

		closeClick  : true,
		closeEffect : 'elastic',
		closeSpeed  : 150,

		helpers: {
			title: {
				type : 'inside'
			},
			overlay: {
				locked : false
			}
		}
	});
});