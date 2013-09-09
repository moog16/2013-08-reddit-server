# AngularJS lesson

In this project, you'll be working with AngularJS to create a reddit-like news rating application. This repo contains the front-end for the reddit rating application.

## What's in this repo

In this repo, you'll find we have a skeleton application that's contained primarily in two places: the `index.html` file and the `js/` directory.

To run the app, you'll need to run the included binary in `bin/start` and visit `http://localhost:3000` in your browser.

## Your goals

Basic requirements

* [x] Use npm to install the dependencies that are listed in the `package.json`.
* [x] Use `bower` to install the client-side dependencies that are listed in the `bower.json`.
* [x] Create a basic AngularJS app skeleton that bootstraps and starts your AngularJS app.
* [x] Follow the first 4 steps of [this tutorial](http://www.ng-newsletter.com/posts/beginner2expert-how_to_start.html) and implement these app features:
    * [x] Create the angular app in `index.html`
    * [x] Create a `MainController` that controls the home screen
    * [x] Inside the `MainController` fetch the latest reddit articles through the [reddit api](http://www.reddit.com/dev/api)
    * [x] Lay out the view in the front-end to display the articles
    * [x] Add a button that rates up and create the corresponding method
    * [x] Add a button that rates down and create the corresponding method
* After the afternoon lecture, complete the following:
    * [x] Implement the home route (with controller/templates)
    * [x] Implement the login route (with controller/templates)

Extra credit: 
* [x] Implement a news listing directive
* [x] Refactor your controllers so they don't contain any calls to the reddit api.  Move that code to a [service](http://www.ng-newsletter.com/posts/beginner2expert-services.html) (api [docs](http://docs-angularjs-org-dev.appspot.com/guide/dev_guide.services.understanding_services)).
* [x] Add design to the app to make it look nice
* [x] Create a rating directive that allows users to rate articles up and down
* [ ] Write an end-to-end test that proves the app covers the features of the app
* [ ] Implement this app using `yeoman`

## App features

When complete, this app will have a backend and a front-end. The front-end of our project will work on fetching articles from reddit (through their HTTP api) on the front-end and displaying them to a user. The front-end will feature no user authentication (yet), but will need a page for logging the user in.

The core features of the front-end app are fetching content from the reddit API using core AngularJS (i.e. no jQuery or other XHR libraries). The app will need to list the latest articles in a subreddit of your choosing. It will need to feature a way for users to upvote and downvote.

You will need to implement a two-page app that has both a login page and a news page that has at minimum _two_ Angular controllers as well as a service to contain all information (or alternative). The login page does _not_ need to be functional at this stage as we will implement user authentication in the next sprint.

## New tools in this repo

* [bower](http://bower.io/)
* [npmjs](https://npmjs.org/)
* [grunt](http://gruntjs.com/)
* [yeoman](http://yeoman.io)
