$(document).ready( () => {

  $(this).on("click", function (event) {
    console.log("inside thing!");
    // refactoring code
    const counter = $(".tweet footer i#like");
    console.log(counter);
  });
});