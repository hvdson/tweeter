$(document).ready( () => {

  $("#nav-bar .compose").on("click", function (event) {
    $(".new-tweet").slideToggle("fast", "swing");
    $(".new-tweet #tweet-text-area").focus();
  });

});

// $(document).ready( () => {

//   $("#nav-bar .compose").on("click", function (event) {
//     // $(".new-tweet").fadeOut("slow");
//     $(".new-tweet").promise().done( function () {
      
//       $(".new-tweet #tweet-text-area").focus();
//     });
    
//   });

// });