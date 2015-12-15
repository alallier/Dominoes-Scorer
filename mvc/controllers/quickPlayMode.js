module.exports = function(app) {
  app.route('/quickPlayMode').get(function(req, res) {
    var model = require('models/global')(req, res);
		model.content.pageTitle = '{content.appTitle}'
		model.pageDescription = "Select the number of players below, enter their names and start playing.";
		res.render('quickPlayMode', model);
  });
};