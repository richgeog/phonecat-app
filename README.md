# Phone Catalouge

Phone Catalouge is an application that is built using angular with karma and protractor for testing. This has been taken from the AngularJS website so I could refresh my knowledge of angular, karma and protractor.
The overall application shows a list of mobile phones that a user can search for. The user can search for a phone by name and the results can be sorted by either age or alphabetical order using some clever and handy angular techniques.
The user can also view each phone detail individually when clicked on using angular-routes to show what spec each phone has. Changing boolean characters to images has been included to show how to simplfy ceratian aspects of a web page for the user.
Styling has been added including some simple animations using jQuery and angular-animations.
If you would like to try the tutorial yourself here is the link https://docs.angularjs.org/tutorial

### Setup and running the application

First you will need to load all the dependencies from the bower.json file, type `npm install` into your terminal window.

Once completed run `npm start` and go to `http://localhost:8000/app/index.html#/phones`  in your web browser to begining using the app.

### Testing

I have used both Karma and Protractor testing in this project

To run Karma tests type `npm test` into the terminal window.(Please note, this is only setup to use the Chrome browser).

To run Protractor tests first type `npm run update-webdriver` to make sure your web driver is upto date(you will only need to complete this action once). Then


`npm start`

Open a new terminal window
`npm run protractor`