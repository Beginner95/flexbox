$(document).ready(function () {
	$('.works__btns button, .works__btns a').on('focus', function (e) {
		$(this).parents('.works__element').addClass('works__element--active');
	});

	$('.works__btns button, .works__btns a').on('blur', function (e) {
		$(this).parents('.works__element').removeClass('works__element--active');
	});

	function moveProgressBar(node, nodeLine, tooltip, animationLength = 1500) {
	    const progressElement = $(node);
	    progressElement.each(function (value, item) {
	      $(item).find(nodeLine).animate({
	        width: item.dataset.progressPercent+'%'
	      }, animationLength);
	      $(item).find(tooltip).show(animationLength);
	    });
	  }

  let animate = true;
  $(window).scroll(function () {
    if($('.skills').offset().top <= $(window).scrollTop() + 150) {
      if(animate) {
        moveProgressBar('.progress__element', '.progress__line', '.progress__tooltip');
      }
      animate = false;
    }
  });

});