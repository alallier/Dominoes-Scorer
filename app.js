app = require('roosevelt')({    
    onServerInit: function(app) {
        var reload = require('reload');
        reload(app.httpServer, app);
    }
}).startServer();