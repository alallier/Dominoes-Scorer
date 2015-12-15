# Chicken Foot Dominoes Scorer

Introduction
---

A web-app that auto scores the game of chicken foot dominoes. See this [article](https://en.wikipedia.org/wiki/Chicken_foot_\(game\)) for more information on the game.

The following serves as an outline/guide of what we want to implement for the game. Any recommendations are welcomed anytime. Open an issue.

This application is already written in perl and cgi's and can be found [here](dominoes.alexanderlallier.com).

The goal of this project is to re-write the whole project using javascript, an actual database, etc.

Features
---

Basic feature list:

 * The ability to score a variable amount of players (2-10)
 * Hide score feature
 * Hide final score feature
 * Upcoming round shown on table page

Intermediate feature list:

 * Allow different dominoes size sets (like 6,9,16)
 * Upcoming round shown on table page but instead with dominoe's photo instead of number
 * Dark/Light theme choice

Advanced feature list:

 * Database integration
 * Different game modes (like quick play, guest play, and arcade play)
 * Unique users with unique login and password to keep track of stats
 * Group[*](https://github.com/alallier/Dominoes-Scorer#groups) logins to allow users who play as a group not be required to have to login each player one by one
 * Allow a guest player to play in any mode at any time and not have their stats be saved in the database
 
Extreme feature list:

 * Allows games to temporarily be saved in the database, so that way you can come back to a game in progress (probably up to 2 days later)
 * Research and implement different types of dominoes games other than just chicken foot dominoes
 
Outline/Discussion
---

I envision the app like this. You enter the site through a homepage, which will allow the users to select their dominoes set number, game mode, view stats, and edit accounts.

Once the user selects start game it will be routed accordingly

 1. If they selected to play arcade mode (scoring mode) then they are sent to a page so they can login as a unique player or as a group. Groups[*](https://github.com/alallier/Dominoes-Scorer#groups) will have their own username and password. Not everyone that is in the group has to play. For example if 5 people are normally in a group and one person is not there, they have the option to deselect that user from playing.
 2. If they select quick play, they are routed to the table to begin their game. We do not store a temp session for their game, or any stats from the game.
 3. At any time a guest player can play in any of these game modes (quick play, arcade, or group arcade)

After all rounds from a game are filled in, we automatically ask the user once if they are ready to submit their game. If they are ready we send them to a page that shows the winner of the game and some stats from the database like best score, best game etc.

Implementation
---

This documentation does not talk about implementation for obvious reasons we don't want to restrict the ideas by constricting ourselves to certain pieces of software....but

The following are some ideas of software we would like to use in the app

 * [Node.js](https://nodejs.org/en/)
 * [Roosevelt MVC web framework for Node.js](https://github.com/kethinov/roosevelt) or [Ember.js](http://emberjs.com/)
 * [PostgreSQL](http://www.postgresql.org/)
 * [Passport](http://passportjs.org/)

Contribution
---

 1. Fork the repo
 2. Install [Node.js](https://nodejs.org/en/) (we are developing the stable release V5.2.0 and up)
 3. Run `npm install` command in the directory you forked too
 3. Pick a feature or issue you would like to work on. (Notifying  us what featuring you're working on, at least in the early stages until the repo becomes mature would be best)
 4. Run the server with the command `npm run dev`
 5. Visit (localhost:43711)
 
 * Submit PRs and issues
 * We are welcome to ideas and improvements

Footnotes
---

### Groups* ###


Groups are a set of people who normally play together. So if the same 4 people always play together they have the option to create a group and add their people to the group. The benefit of a group is that it allows one login, instead of 4. This does allow a user to not be present but be logged in so it relies on the trust of the people in the group.
