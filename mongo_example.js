"use strict";

// replace with ES6 destructuring assignment
const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect": ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  
  // ==> Refactored and wrapped as new, tweet-specific function:

  // should just let "end user" code deal with errors - just pass the data to callback as is
  function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
  }
  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!


  // end user code;
  getTweets( (err, tweets) => {
    if (err) {
      throw err;
    }
    console.log("Logging each tweet: ");
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  });
});