// Controller that handles the post for number of players from quickPlayMode.html and arcadePlayMode.html and recursive sends that data back to both pages (recursive).
module.exports = function(app) {
  app.post('/arcadePlayMode', function(req, res) {
    var model = require('models/global')(req, res),
        i;

    // Since this is recursive we have to send the item found on the original page again.
    model.playerCount = require('models/getPlayerCount')();
    model.size = model.playerCount.length;
    model.dominoSetSize = require('models/getDominoSetSize')();

    model.numberOfPlayers = req.body.numberOfPlayers;
    model.numberOfPlayersArray = [];

    model.dominoSetSizePost = req.body.dominoSetSize;

    for (i = 0; i < model.numberOfPlayers; i++) {
      model.numberOfPlayersArray.push(i);
    }

    model.pageDescription = 'Select the number of players below, login below and start playing.';
    res.render('arcadePlayMode', model);
  });
  app.post('/quickPlayMode', function(req, res) {
    var model = require('models/global')(req, res),
        i;

    // Since this is recursive we have to send the item found on the original page again.
    model.playerCount = require('models/getPlayerCount')();
    model.size = model.playerCount.length;
    model.dominoSetSize = require('models/getDominoSetSize')()

    model.numberOfPlayers = req.body.numberOfPlayers;
    model.numberOfPlayersArray = [];

    model.dominoSetSizePost = req.body.dominoSetSize;

    for (i = 0; i < model.numberOfPlayers; i++) {
      model.numberOfPlayersArray.push(i);
    }

    model.pageDescription = 'Select the number of players below and start playing.';
    res.render('quickPlayMode', model);
  });
};