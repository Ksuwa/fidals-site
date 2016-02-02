// ================================================================
// Главный модуль
// ================================================================
;(function($) {
	var mainPage = {
		/**
		 * Метод инициализации.
		 */
		initialize : function() {
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

			this.setUpListeners();
		},

		/**
		 * Метод установки слушателей.
		 */
		setUpListeners: function() {
			// $(document).on("scroll", this.someMethod);
			// $("#input-text").on("keyup", $.proxy(this.textChange, this));
		}
	};

	/**
	 * Инициализирует модуль.
	 */
	mainPage.initialize();
}(jQuery));