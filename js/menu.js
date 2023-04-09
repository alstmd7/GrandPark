$(function () {
    $(".menu-link").click(function (e) {
      e.preventDefault();
      $(".menu-overlay").toggleClass("open");
      $(".menu").toggleClass("open");
    });
  });
  function debounce(func, delay) {
    let timeoutId;
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    }
  }
  
  $(window).on('resize', debounce(function() {
    $(".menu-overlay").removeClass("open");
    $(".menu").removeClass("open");
  }));
