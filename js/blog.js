$(document).ready(function () {
	$('.post .title, .post .content').hover(
		// Hover in
		function () {
			var $parent = $(this).parent();
			$parent.addClass ("active");
		},
		// Hover out
		function () {
			var $parent = $(this).parent();
			$parent.removeClass ("active");
		}
	);
});
