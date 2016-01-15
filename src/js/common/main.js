// ================================================================
// Главный модуль
// ================================================================
;(function($) {
	var mainPage = {
		/**
		 * Метод инициализации.
		 */
		initialize : function() {
			this.$header     = $('#header');
			this.headeHeight = this.$header.height();

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
			// $(document).on("scroll", this.fixHeader);
			// $("#input-text").on("keyup", $.proxy(this.textChange, this));
		},

		// fixHeader: function() {
		// 	if ($(this).scrollTop() > mainPage.headeHeight) {
		// 		mainPage.$header.addClass("fixed");
		// 	} else {
		// 		mainPage.$header.removeClass("fixed");
		// 	}
		// }
	};

	/**
	 * Инициализирует модуль.
	 */
	mainPage.initialize();
}(jQuery));