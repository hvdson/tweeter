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

!["Screenshot of nav-bar"]()

###New Tweet:
- The textarea implements a character counter which limits users to 140 chars
- added extra feature using toastr to display an error notification when user enters a tweet too long or too short

###Tweets:
- Tweets are displayed in order of newest to oldest 
- On hover the footer displays a like, repost, flag icon
- extra feature: on hover of a specific icon color changes

*STRETCH FEATURES:*

### Data Attributes:
- for the like button, the like-toggle attribute has a boolean value of either true or false indicating whether or not the like button was clicked 

### Like button:
- only front-end features were added
- when the like button is clicked, the like count increases and the like button stays red for that particular user

### Responsive Design:
- window resizes for iphone plus models and ipad
- doesn't resize correctly for devices with a smaller screen res than above

### SASS:
- SASS is set up to output a single condensed "styles.css" sheet. the styles.scss file imports the corresponding scss files.

### Heroku:
- app is deployed to the cloud at the following link:<br>
<https://salty-ridge-38492.herokuapp.com/>






