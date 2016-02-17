# Phone Catalogue

[![Build Status](https://travis-ci.org/richgeog/phonecat-app.svg?branch=master)](https://travis-ci.org/richgeog/phonecat-app)[![Code Climate](https://codeclimate.com/github/richgeog/phonecat-app/badges/gpa.svg)](https://codeclimate.com/github/richgeog/phonecat-app)[![Test Coverage](https://codeclimate.com/github/richgeog/phonecat-app/badges/coverage.svg)](https://codeclimate.com/github/richgeog/phonecat-app/coverage)

Phone Catalogue is an application built using Angular.js with Karma and Protractor for testing. This has been taken from the AngularJS website so I could refresh my knowledge of angular, karma and protractor.

The application displays a list of mobile phones, including images and a small description of the phone. A search field is available for the user to quickly find what they are searching for and reduces the list of phones displayed as the user enters text into the search box. The users results can be sorted by either age or alphabetical order using some clever and handy angular techniques.

The user can also view each phone's detail individually when clicked on using angular-routes to show what spec each phone has as well as different images of the phone. Changing boolean characters to images has been included to show how to simplify certain aspects of a web page can result in a better UX.
Styling has been added with some simple animations using jQuery and angular-animations.

If you would like to try the tutorial yourself here is the link https://docs.angularjs.org/tutorial

### Setup and running the application
---
First clone the repo using this command in your terminal window
`git clone https://github.com/richgeog/phonecat-app.git`

You will need to load all the dependencies from the bower.json file, type `npm install` into your terminal window.

Once completed run `npm start` and go to `http://localhost:8000/app/index.html#/phones`  in your web browser to begin using the application.

### Testing
---
I have used both Karma and Protractor testing in this project.

To run Karma tests type `npm test` into the terminal window.(Please note, this is only setup to use the Chrome browser).

To run Protractor tests first type `npm run update-webdriver` to make sure your web driver is up to date(you will only need to complete this action once). Then type `npm start`, whilst this is running open a new terminal window and type `npm run protractor`.