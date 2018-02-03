$(document).ready( () => {

  $("#tweets-container").on("click", "#like", function (event) {
    console.log("inside thing!");
    // refactoring code
    const counter = $(".tweet footer i#like");
    console.log(counter);
  });
});