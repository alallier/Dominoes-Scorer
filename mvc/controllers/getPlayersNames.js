// Controller that handles the post for number of players from quickPlayMode.html and arcadePlayMode.html and recursive sends that data back to both pages (recursive).
module.exports = function(app) {
  app.post('/getPlayersNames', function(req, res) {
    var model = require('models/global')(req, res),
        i,
        j;
    
    model.numberOfPlayers = req.body.numberOfPlayers[0];
    model.playersNamesArray = [];
    
    console.log(req.body.playerName0)
    
    console.log(model.numberOfPlayers);
    
    for (i = 0; i < model.numberOfPlayers; i++) {
      j = i.toString()
      console.log(req.body.playerName0 + j);
      model.playersNamesArray.push(req.body['playerName' + j]);
    }

    console.log(model.playersNamesArray);
  });
};