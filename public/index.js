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
