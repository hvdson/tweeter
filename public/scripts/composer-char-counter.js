console.log("Char counter loaded inside index.html!");

$(document).ready( () => {
  // use this for step 6
  // let charCounter = $("body .container .new-tweet .counter");

  // !!! FAT ARROW FUNCTIONS DO NOT CHANGE THE CONTEXT OF: 'this' inside fntn scope
  // since this method will be called every time keyup event happens
  // no need to loop
  // don't need to look through every child node - jQuery functions do the heavy lifting

  $(".new-tweet textarea").on("keyup", function (event) {
    console.log(event.target.value);


    // curr length of textarea
    // event.target.value.length;

    // need to update the value of counter
    const textAreaLength = event.target.value.length;

    if (textAreaLength > 140) {
      $(".new-tweet .counter").addClass("red-counter");
    } else {
      $(".new-tweet .counter").removeClass("red-counter");
    }

    $(".new-tweet .counter").text(140 - textAreaLength);

    // const currCount = parseInt($(".new-tweet .counter").text(), 10);

    // $(".new-tweet .under-textarea .counter").value = $(".new-tweet .under-textarea .counter").value - event.target.value.length;

    // console.log(event.target.value);
    // const maxCount = parseInt($(".new-tweet .counter").text(), 10);



  });
});