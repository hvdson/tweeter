$(document).ready( () => {

  $("#nav-bar .compose").on("click", function (event) {
    $(".new-tweet").toggle();
    $(".new-tweet #tweet-text-area").focus();
  });

});