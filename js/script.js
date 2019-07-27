$(document).ready(function () {
	$('.works__btns button, .works__btns a').on('focus', function (e) {
		$(this).parents('.works__element').addClass('works__element--active');
	});

	$('.works__btns button, .works__btns a').on('blur', function (e) {
		$(this).parents('.works__element').removeClass('works__element--active');
	});
});