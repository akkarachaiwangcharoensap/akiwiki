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
	Menu.$toggler.click(function () {
		Menu.toggle ();
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