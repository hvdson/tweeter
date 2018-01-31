/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

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
  let timeOfTweet = $("<span>").addClass("time-of-tweet").text(tweetData.created_at);

  let flag = $("<i>").addClass("fa fa-flag").attr("id", "flag").attr("aria-hidden", "true");
  let retweet = $("<i>").addClass("fa fa-retweet").attr("id", "retweet").attr("aria-hidden", "true");
  let like = $("<i>").addClass("fa fa-heart").attr("id", "like").attr("aria-hidden", "true");

  footerTag.append(timeOfTweet, flag, retweet, like);

  // ---------------------------------------------------------------
  newTweet.append(headerTag, pTag, footerTag);

  return newTweet;
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// to see what it looks like
console.log($tweet);

// to add it to the page so we can make sure it's got all the right elements, classes, etc.
$('#tweets-container').append($tweet);

