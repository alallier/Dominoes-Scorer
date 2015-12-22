app = require('roosevelt')({    
    onServerInit: function(app) {
      var reload = require('reload'),
          bodyParser = require('body-parser');
			
      reload(app.httpServer, app);
			
      // Body Parser Setup
      app.use( bodyParser.json() );       // to support JSON-encoded bodies
      app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: true
      }));
    }
}).startServer();

