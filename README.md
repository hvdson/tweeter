# Tweeter Project

Tweeter is a simple, single-page Twitter clone with similar client-side styling and mBox with a MongoDB NoSQL database deployed by heroku.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

**STRETCH:**

5. To access the cloud deployed app, visit: <https://salty-ridge-38492.herokuapp.com/>

## Dependencies

- Express
- Node 5.10.x or above
- chance
- mongodb
- moment
- md5
- dotenv
- node-sass-middleware
- connect
- toastr

*refer to package.json for dependancies version*


## Features

###Navigation bar:
- Users are able to toggle "compose" button on the right which reveals a new tweet field

!["Screenshot of nav-bar"](https://github.com/hvdson/tweeter/blob/master/docs/navbar.png)
!["Screenshot of compose"](https://github.com/hvdson/tweeter/blob/master/docs/compose-hover.png)

###New Tweet:

- The textarea implements a character counter which limits users to 140 chars
- !["Screenshot of new-tweet"](https://github.com/hvdson/tweeter/blob/master/docs/newtweet.png)

- added extra feature using toastr to display an error notification when user enters a tweet too long or too short
!["Screenshot of toastr error too short"](https://github.com/hvdson/tweeter/blob/master/docs/toastr-tweet-short.png)
!["Screenshot of toastr error too long"](https://github.com/hvdson/tweeter/blob/master/docs/toastr-tweet-long.png)

###Tweets:
- Tweets are displayed in order of newest to oldest 
- On hover the footer displays a like, repost, flag icon
- extra feature: on hover of a specific icon color changes

!["Screenshot of hover on tweet"](https://github.com/hvdson/tweeter/blob/master/docs/hover-icon-repost.png)

*STRETCH FEATURES:*

### Data Attributes:
- for the like button, the like-toggle attribute has a boolean value of either true or false indicating whether or not the like button was clicked 

### Like button:
- only front-end features were added
- when the like button is clicked, the like count increases and the like button stays red for that particular user

!["Screenshot of toggling like button off"](https://github.com/hvdson/tweeter/blob/master/docs/tweets-like-button-false.png)

!["Screenshot of toggling like button on"](https://github.com/hvdson/tweeter/blob/master/docs/tweets-like-button-true.png)

### Responsive Design:
- window resizes for iphone plus models and ipad
- doesn't resize correctly for devices with a smaller screen res than above

!["Screenshot of iphone plus"](https://github.com/hvdson/tweeter/blob/master/docs/responsive-design-iphone-plus.png)

!["Screenshot of ipad"](https://github.com/hvdson/tweeter/blob/master/docs/responsive-design-ipad.png)

### SASS:
- SASS is set up to output a single condensed "styles.css" sheet. the styles.scss file imports the corresponding scss files.

### Heroku:
- app is deployed to the cloud at the following link:<br>
<https://salty-ridge-38492.herokuapp.com/>






