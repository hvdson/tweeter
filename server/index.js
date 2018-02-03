"use strict";

// Basic express setup:

const PORT          = process.env.PORT || 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

const path = require("path");
const connect = require("connect");
const sassMiddleware = require("node-sass-middleware");

app.use(sassMiddleware({
  src: path.join(__dirname, "../sass"),
  dest: path.join(__dirname, "../public/styles"),
  debug: true,
  outputStyle: "compressed",
  prefix: "/styles"
}));

app.use(bodyParser.urlencoded({ extended: true }));
// must be BEFORE express.static for sass to work!
app.use(express.static("public"));

// The in-memory database of tweets. It's a basic object with an array in it.

// UPDATING TO USE WITH DATABASE
// ------------------------------------------------------------------------------------------
//  STEP 1:
//  Modify server/index.js to remove the in-memory db. Instead, connect to Mongo, and once it's connected,
//  pass the Mongo db into the server/lib/data-helpers.js factory function instead.
// ------------------------------------------------------------------------------------------
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://heroku_sw5jl25l:9mhf2psbtm2q98jsrjs18mmi44@ds121898.mlab.com:21898/heroku_sw5jl25l";
const DataHelpers = require("./lib/data-helpers.js");
const tweetsRoutes = require("./routes/tweets");


// const db = require("./lib/in-memory-db");

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  
  console.log("DataHelpers using db: ", DataHelpers(db));
  console.log("tweetsRoutes using DataHelpers using db: ", tweetsRoutes(DataHelpers(db)));
  // The `data-helpers` module provides an interface to the database of tweets.
  // This simple interface layer has a big benefit: we could switch out the
  // actual database it uses and see little to no changes elsewhere in the code
  // (hint hint).
  //
  // Because it exports a function that expects the `db` as a parameter, we can
  // require it and pass the `db` parameter immediately:

  // The `tweets-routes` module works similarly: we pass it the `DataHelpers` object
  // so it can define routes that use it to interact with the data layer

  // Mount the tweets routes at the "/tweets" path prefix:
  app.use("/tweets", tweetsRoutes(DataHelpers(db)));

  // need to close database connection after using
});


// ------------------------------------------------------------------------------------------
// STEP 6:
// If you haven't already: make sure your app works the way you did before you started.
// Restart it, and bask in the glory of persistent data storage.
// ------------------------------------------------------------------------------------------

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
