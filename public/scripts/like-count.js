// STRETCH - like-count (only front-end is implemented)

// jQuery for getting click on like icon
// get click for tweet like button
// Update the "like-count" for that specific like
$(document).ready( () => {

  $("#tweets-container").on("click", "#like", function (event) {

    // "this" is more useful than using event b/c we can access parents through jQuery
    const isLiked = $(this).data("like-toggle");
    const likeButton = $(this);

    // HTML converted to have data attribute
    if (!isLiked) {
      // change data attribute to true && colour icon red w/css class && update count text
      likeButton.data("like-toggle", true);
      likeButton.addClass("like-toggle");
      $(this).parent().find("#like-count").text("1");

    } else {
      // change data attribute to false && remove colour && update count text
      likeButton.data("like-toggle", false);
      likeButton.removeClass("like-toggle");
      $(this).parent().find("#like-count").text("0");

    }
  });
});