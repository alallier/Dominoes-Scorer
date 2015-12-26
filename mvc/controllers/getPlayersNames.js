// Controller that handles the post for number of players from quickPlayMode.html and arcadePlayMode.html and recursive sends that data back to both pages (recursive).
module.exports = function(app) {
  app.post('/getPlayersNames', function(req, res) {
    var model = require('models/global')(req, res),
        i;
    
    model.numberOfPlayers = req.body.numberOfPlayers[0];
    model.dominoSetSize = req.body.dominoSetSize[0];
    model.playersNamesArray = [];
    model.playersCountArray = [];
    model.rounds = [];
    model.pageDescription = 'Welcome to the table';

    // Save each players name from form to playersNamesArray
    for (i = 0; i < model.numberOfPlayers; i++) {
      model.playersNamesArray.push(req.body['playerName' + i]);
      model.playersCountArray.push(i);
    }

    console.log(model.dominoSetSize)
    // Create the rounds and save them to rounds
    for (i = 0; i <= model.dominoSetSize; i++) {
      model.rounds.push(i);
    }
    
    // Now that we have the names we send to the table.
    res.render('table', model);
  });
};