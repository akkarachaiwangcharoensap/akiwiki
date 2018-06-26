var Menu;

$(document).ready(function () {
	
	/**
	 * Menu instance
	 * @var object menu
	 */
	Menu = {
		$el: $('#menu'),
		$toggler: $('#toggler'),
		$content: $('.main-content'),
		$title: $('#title'),
		active: false,
		toggle: function () {
			this.active = !(this.active);

			this.$el.toggleClass ("active");
			this.$toggler.toggleClass ("active");
			this.$content.toggleClass ("active");
			this.$title.toggleClass ("active");
		}
	};

	/**
	 * When the toggler button is clicked
	 * @return void
	 */
	Menu.$toggler.click(function (e) {
		e.preventDefault ();

		Menu.toggle ();
	});

	$('.content-block').hover(
		// Hover in
		function () {
			$(this).addClass ("active");
		},
		// Hover out
		function () {
			$(this).removeClass ("active");
		}
	);

	$('a').each(function (index, element) {
		var $element = $(element);

		if ($element.attr('href') == '#') {
			$element.click(function (e) {
				e.preventDefault ();
			});
		}
	});
});

$(window).resize(function () {
	var width = $(window).width ();

	if (width < 774) {
		if (Menu.active == true) {
			Menu.toggle ();
		}
	}
});