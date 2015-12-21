module.exports = function(app) {
  app.route('/').get(function(req, res) {
    var model = require('models/global')(req, res);
		model.content.pageTitle = '{content.appTitle}'
		model.gameModes = require('models/getGameModes')();
		model.pageDescription = 'Welcome to the automatic Chicken Foot Dominoes scoring app. Please chose a game mode below';
		res.render('homepage', model);
  });
};