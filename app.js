app = require('roosevelt')({    
    onServerInit: function(app) {
      var reload = require('reload'),
          bodyParser = require('body-parser');

      // Reload with no optional arguments.
      reload(app.httpServer, app);

      // Body Parser Setup
      app.use( bodyParser.json() );
      app.use(bodyParser.urlencoded({
        extended: true
      }));
    }
}).startServer();