$(function () {
	$('.tabs .tab-links a').on('click', function(e) {
		var $currentAttrValue = $(this).attr('href');
		$('.tabs ' + $currentAttrValue).fadeIn(800).siblings().hide();
		$(this).parent('li').addClass('active').siblings().removeClass('active');
		e.preventDefault();
	});
});
