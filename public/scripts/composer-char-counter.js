console.log("Char counter loaded inside index.html!");

$(document).ready( () => {
  // use this for step 6
  // let charCounter = $("body .container .new-tweet .counter");

  // !!! FAT ARROW FUNCTIONS DO NOT CHANGE THE CONTEXT OF: 'this' inside fntn scope
  // since this method will be called every time keyup event happens
  // no need to loop
  // don't need to look through every child node - jQuery functions do the heavy lifting

  $(".new-tweet textarea").on("input", function (event) {

    // refactoring code
    const counter = $(".new-tweet .counter");

    // need to update the text of counter
    const textAreaLength = event.target.value.length;

    // add a red class to the counter when the textarea is longer than 140 chars
    if (textAreaLength > 140) {
      counter.addClass("red-counter");
    } else {
      // remove the class afterwards
      counter.removeClass("red-counter");
    }

    counter.text(140 - textAreaLength);
  });

});