$(function () {
      $(".rslides").responsiveSlides({
		manualControls: '#slider-pager',  
        speed: 800,
		timeout: 8000,
		pager: true,
    nav: false
});
});



/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#ffffff" });
 });
 
 /*menu*/
$(".nav li").first().addClass('home');

/*FIRST WORD*/
$(function(){
 $('.content-title h1').each(function() {
  var a = $(this).html();
  var b = a.indexOf(' '); 
  if (b == -1) {
   b = a.length;
  }
  $(this).html('<span class="first-word">'+a.substring(0, b)+'</span>'+a.substring(b, a.length));
 });
});


(function($) {
		$(function() {
			$('input, select').styler();
		})
		})(jQuery)
		
		

