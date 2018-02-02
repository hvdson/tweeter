$(document).ready( () => {

  $("#nav-bar .compose").on("click", function (event) {
    $(".new-tweet").slideToggle("fast", "swing");
    $(".new-tweet #tweet-text-area").focus();
  });

});