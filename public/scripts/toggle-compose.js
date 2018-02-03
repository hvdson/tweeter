// adds functionality to compose button
$(document).ready( () => {

  $("#nav-bar .compose").on("click", function (event) {
    $(".new-tweet").slideToggle("fast", "linear");
    $(".new-tweet #tweet-text-area").focus();

  });
});