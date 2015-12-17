module.exports = function(app) {
  app.post('/arcadePlayMode', function(req, res) {
    var numberOfPlayers = req.body.numberOfPlayers;
		
    res.send("Number of Players was: " + numberOfPlayers);
  });
};