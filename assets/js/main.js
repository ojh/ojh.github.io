$(document).ready(function(){

  // Toggle mobile nav

  var nav = $('.main-nav');

  $('.toggle-nav').click(function(e){
    e.preventDefault();
    nav.slideToggle();
  });

  // Reset when window switches to desktop view
  $(window).resize(function() {
    if ($(window).width() > 500) {
      nav.show();
    } else {
      nav.hide();
    }
  });

});
