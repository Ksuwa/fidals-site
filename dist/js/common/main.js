$(function () {

	/**
	 * Плагин меню для мобильных устройств.
	 */
	$('#menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: {
			placeholder : "Поиск",
			search      : true
		},
		counters	: true,
		navbar 		: {
			title : 'Меню'
		},
		navbars		: [
			{
				position : 'top',
				content	 : [ 'searchfield' ]
			}, {
				position : 'top',
				content	 : [
					'prev',
					'title',
					'close'
				]
			}
		]
	});
});