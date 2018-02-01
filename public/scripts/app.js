/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": {
//       "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//       "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//     },
//     "handle": "@SirIsaac"
//   },
//   "content": {
//     "text": "If I have seen further it is by standing on the shoulders of giants"
//   },
//   "created_at": 1461116232227
// };

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];

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

  // var $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  // // to see what it looks like
  // console.log($tweet);

  // // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  // $('#tweets-container').append($tweet);


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
    
    // $('#tweets-container').empty();
  
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