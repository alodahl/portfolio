'use strict';

if ($(window).width() > 529) {
   $('.js-navlinks-only').removeClass("hidden");
}

$('.navlinks-div').on('click', '.dropdown-icon', function() {
  if ($('.js-navlinks-only').hasClass("hidden")) {
    $('.js-navlinks-only').removeClass("hidden");
    $('.dropdown-icon').prop('aria-pressed', true);
    document.getElementById("js-navlinks-only").focus();
  } else {
    $('.js-navlinks-only').addClass("hidden");
    $('.dropdown-icon').prop('aria-pressed', false);
  }
})

$(document).ready(function(){
  setTimeout(
 function()
  { console.log("Load iFrames");
  }, 300);
  $('.project-iframe').removeClass('hidden');
});

$('.project-iframe-pt').on('load', function(){
   $('.spinner-div-pt').addClass('hidden');
});

$('.project-iframe-mw').on('load', function(){
   $('.spinner-div-mw').addClass('hidden');
});

$('.project-iframe-rb').on('load', function(){
   $('.spinner-div-rb').addClass('hidden');
});
