$(function () {
	$('.comment1').hide();
	$('.comment2').hide();
	$('.comment3').hide();

	$('.firstname_p').hover(function () {
		$('.comment1').fadeIn(600).show();
		}, function () {
		$('.comment1').hide();
		});
	$('.lastname_p').hover(function () {
		$('.comment2').fadeIn(600).show();
		}, function () {
		$('.comment2').hide();
		});
	$('.address_p').hover(function () {
		$('.comment3').fadeIn(600).show();
		}, function () {
		$('.comment3').hide();
		});

	$('.button').click(function () {
		$('.comment1').fadeIn(600).show();
		$('.comment2').fadeIn(600).show();
		$('.comment3').fadeIn(600).show();
	});
});

