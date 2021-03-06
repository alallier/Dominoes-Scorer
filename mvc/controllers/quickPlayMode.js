module.exports = function(app) {
  app.route('/quickPlayMode').get(function(req, res) {
    var model = require('models/global')(req, res);

    model.playerCount = require('models/getPlayerCount')();
    model.dominoSetSize = require('models/getDominoSetSize')();

    // Send size for select box size attribute, so that it doesnt display drop down.
    model.size = model.playerCount.length;

    model.numberOfPlayers = res.numberOfPlayers;
    model.content.pageTitle = '{content.appTitle}';
    model.pageDescription = 'Select the number of players below, enter their names and start playing.';
    res.render('quickPlayMode', model);
  });
};