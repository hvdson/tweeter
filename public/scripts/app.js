/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

// Handlebars for refactoring

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

    // this breaks it
    // let pTag = $(`<p class=tweet-text>${tweetData.content.text}</p>`);

    // ---------------------------------------------------------------
    // <footer> contains time tweet was created & icons
    let footerTag = $("<footer>");
    let timeOfTweet = $("<span>").addClass("time-of-tweet").text(tweetData.created_at);

    let flag = $("<i>").addClass("fa fa-flag").attr("id", "flag").attr("aria-hidden", "true");
    let retweet = $("<i>").addClass("fa fa-retweet").attr("id", "retweet").attr("aria-hidden", "true");
    let like = $("<i>").addClass("fa fa-heart").attr("id", "like").attr("aria-hidden", "true");

    footerTag.append(timeOfTweet, flag, retweet, like);

    // ---------------------------------------------------------------
    newTweet.append(headerTag, pTag, footerTag);

    return newTweet;
  }
  
  function renderTweets(tweets) {
    // now that AJAX is implemented - need to clear existing list first
    // loops through tweets
    
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      let newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend(newTweet);
    }
  }

  // other method for showing tweet first - traverse backwards

  //   for (let tweet = tweets.length - 1; tweet >= 0; tweet--) {
  //     // calls createTweetElement for each tweet
  //     let newTweet = createTweetElement(tweets[tweet]);
  //     // takes return value and appends it to the tweets container
  //     $('#tweets-container').append(newTweet);
  //   }
  // }


  // renderTweets(data);


  // fetches tweets from /tweets page
  function loadTweets() {
    
    $('#tweets-container').empty();
  
    // makes the request to /tweets
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (tweets) {
        console.log('Success: ', tweets);
        renderTweets(tweets);
        
        // $button.replaceWith(morePostsHtml);
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

    const tweetLength = $(this).find("#tweet-text-area").val().length;
    
    // this is async, you're going to need to pass it a callback function.
    // INside the callback, update teh twee
    // The callback function in this case will only get called after the ajax HTTP request is done
    // It's gone to the server and back.

    // 3. conditionals go here: check if data is not empty && data.length < 140
    if (tweetLength > 0 && tweetLength <= 140) {
      // 4. submit using ajax
      

      $.post("/tweets", data).done(function() {
        // 5. rerender the new tweet
        // $(#twe)
        loadTweets();
       
      });
    } else {
      // replace this later with toastr
      alert("U CAN'T TWEET THAT :(");
    }

    $(this).trigger("reset");
    $(".counter").text("140");

  });

});