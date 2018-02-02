// new mongoDB module :)
"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // UPDATING TO USE WITH DATABASE
    // ------------------------------------------------------------------------------------------
    // STEP 4:
    // Modify saveTweet in server/lib/data-helpers.js to use Mongo (try Mongo's insertOne())
    // ------------------------------------------------------------------------------------------

    // Saves a tweet to `db`
    // WRITE of CRUD operations
    // accepts a newTweet - as handled by the .post route in tweets.js
    saveTweet: function(newTweet, callback) {
      // insertOne takes the obj to insert and a callback
      // newTweet is already an obj so send as is;
      db.collection("tweets").insertOne(newTweet, (err) => {
        // error handling - not sure if needed: *consider "end user" code should deal with errors
        if (err) {
          callback(err);
        }
        callback(null);
      });
    },

    // ------------------------------------------------------------------------------------------
    // STEP 2:
    // Modify getTweets in server/lib/data-helpers.js to use Mongo (try Mongo's find() function,
    // and you don't have to simulate the async delay anymore, since you're doing real async with Mongo).
    // ------------------------------------------------------------------------------------------

    // Get all tweets in `db`, sorted by newest first
    // db is now MONGODB - need to use corresponding CRUD operation to get the item from db
    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => a.created_at - b.created_at;
      // using a READ method - .find() to find the tweet
      db.collection("tweets").find().toArray( (err, tweets) => {
        // error handling - not sure if needed: *consider "end user" code should deal with errors
        if (err) {
          callback(err);
        }
        // assuming tweets is an entire array - .sort() sorts the array IN PLACE
        callback(null, tweets);
        // callback(null, tweets.sort(sortNewestFirst));
        // tweets are received as an Array then sorted
      });
    }
  };
};
