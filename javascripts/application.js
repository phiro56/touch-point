jQuery(document).ready(function () {

	var parHeight = $(window).height(); /*Get Screen Height*/
  $('.mainWrap').css('height',parHeight-104); /*Update Card Holder Height*/
  
	$(".toolobox-trigger").click(function () {
	  $(this).toggleClass('active');
    $(".toolBoxWrap").fadeToggle();
  });
});

//Height Resize Refresh
$(window).resize(function() {
	var wHeight = $(window).height();
  $('.mainWrap').css('height',wHeight-104); /*Update Card Holder Height*/
});		
