/*Menu for small screen*/

$(document).ready(function () {
  $(".menu-burger").click(function () {
    $(".menu-burger,.top-header-menu").toggleClass("active");
    $(".body").toggleClass("lock");
  });
});
