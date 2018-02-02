<<<<<<< HEAD
=======
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

>>>>>>> feature/scss
$(document).ready(function() {
  // Parameters: tweet object;
  // returns: jQuery object representing a new tweet in the same structure as <article class="tweet">
  function createTweetElement (data) {

    // save to var for performance
    const tweetData = data;

    // jQuery allows chaining
    let newTweet = $("<article>").addClass("tweet");
    
    // <header> contains avatar image, username & handle
    let headerTag = $("<header>");
    let avatar = $("<img>").addClass("avatar").attr("src", tweetData.user.avatars.small);
    let username = $("<span>").addClass("username").text(tweetData.user.name);
    let handle = $("<span>").addClass("tweeter-handle").text(tweetData.user.handle);
    
    headerTag.append(avatar, username, handle);
    // ---------------------------------------------------------------
    // <p> where the actual tweet message is
    let pTag = $("<p>").addClass("tweet-text").text(tweetData.content.text);

    // ---------------------------------------------------------------
    // <footer> contains time tweet was created & icons
    let footerTag = $("<footer>");
    let timeOfTweet = $("<span>").addClass("time-of-tweet").text(moment(tweetData.created_at).fromNow());

    let flag = $("<i>").addClass("fa fa-flag").attr("id", "flag").attr("aria-hidden", "true");
    let retweet = $("<i>").addClass("fa fa-retweet").attr("id", "retweet").attr("aria-hidden", "true");
    let like = $("<i>").addClass("fa fa-heart").attr("id", "like").attr("aria-hidden", "true");

    footerTag.append(timeOfTweet, flag, retweet, like);

    // ---------------------------------------------------------------
    newTweet.append(headerTag, pTag, footerTag);

    return newTweet;
  }
<<<<<<< HEAD

=======
  
>>>>>>> feature/scss
  function renderTweets(tweets) {
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      let newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend(newTweet);
    }
  }
  
  // fetches tweets from /tweets page
  function loadTweets() {
    // $('#tweets-container').empty();
    // makes the request to /tweets
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (tweets) {
        console.log('Success: ', tweets);
        renderTweets(tweets);
      }
    });
  }

  $(".new-tweet form").on("submit", function(event) {
    // 1. prevent the default behaviour
    event.preventDefault();
    // 2. get the data of the form
    // const data = $(".new-tweet form").serialize();
    const data = $(this).serialize();
    // 3. add tweet to database using create new tweet element
    // console.log("Step 3: appending new tweet to database - ", data);

    const tweetText = $(this).find("#tweet-text-area").val();
    const tweetLength = tweetText.length;
    
    // this is async, you're going to need to pass it a callback function.
    // INside the callback, update teh twee
    // The callback function in this case will only get called after the ajax HTTP request is done
    // It's gone to the server and back.

    // 3. conditionals go here: check if data is not empty && data.length < 140
    if (tweetText === "") {
      // 4. submit using ajax
      alert("NO TEXT - U CAN'T TWEET THAT :(");
    } else if (tweetLength > 140) {
      alert("TOO LONG - U CAN'T TWEET THAT :(");
    } else {
      // 5. rerender the new tweet
      $.post("/tweets", data).done(loadTweets);
    }
    $(this).trigger("reset");
    $(".counter").text("140");

  });
  loadTweets();
});