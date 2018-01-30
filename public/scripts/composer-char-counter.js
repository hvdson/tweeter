console.log("Char counter loaded inside index.html!");

$(document).ready( () => {
  // use this for step 6
  // let charCounter = $("body .container .new-tweet .counter");

  // !!! FAT ARROW FUNCTIONS DO NOT CHANGE THE CONTEXT OF: 'this' inside fntn scope
  let charCounter = 0;
  const textArea = $("body .container .new-tweet textarea");
  textArea.on("keyup", function (event) {
    // after getting 
    charCounter = event.target.value.length;

    // need to update the value of counter

    // console.log(charCounter);
    // console.log(this);
  });
});