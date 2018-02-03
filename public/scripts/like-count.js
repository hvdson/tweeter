// jQuery for getting click on like icon
// TODO - get click for tweet like button
// TODO - Update the "like-count" for that specific like
$(document).ready( () => {

  $("#tweets-container").on("click", "#like", function (event) {
    // const counter = $(this);
    // "this" is more useful than using event b/c need to get
    const likeCount = $(this).data("like-toggle");
    
    if (!likeCount) {
      $(this).data("like-toggle", true);
    } else {
      $(this).data("like-toggle", false);
    }

    console.log(likeCount);

    // console.log(counter);
  });
});