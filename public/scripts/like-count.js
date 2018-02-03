// jQuery for getting click on like icon
// TODO - get click for tweet like button
// TODO - Update the "like-count" for that specific like
$(document).ready( () => {

  $("#tweets-container").on("click", "#like", function (event) {
    // const counter = $(this);
    // "this" is more useful than using event b/c need to get
    const isLiked = $(this).data("like-toggle");
    const likeButton = $(this);

    if (!isLiked) {
      likeButton.data("like-toggle", true);
      likeButton.addClass("like-toggle");
    } else {
      likeButton.data("like-toggle", false);
      likeButton.removeClass("like-toggle");
    }

    console.log($(this));

    // console.log(counter);
  });
});