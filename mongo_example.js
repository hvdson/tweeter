"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect": ${MONGODB_URI}`);
    throw err;
  }
  
  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> We can just get the results as an array all at once:
  db.collection("tweets").find().toArray( (err, results) => {
    // Lazy error handling:
    if (err) {
      throw err;
    }
  
    console.log(".find chained to .toArray:\n", results);
    // ==> This is inside this callback now. Think about it:
    // This is now the "end of the program", right?
    db.close();
  });

});