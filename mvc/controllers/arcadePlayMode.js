module.exports = function(app) {
  app.route('/arcadePlayMode').get(function(req, res) {
    var model = require('models/global')(req, res);
    model.numberOfPlayers = res.numberOfPlayers;
    model.content.pageTitle = '{content.appTitle}'
    model.pageDescription = 'Select the number of players below, login below and start playing.';
    res.render('arcadePlayMode', model);
  });
};