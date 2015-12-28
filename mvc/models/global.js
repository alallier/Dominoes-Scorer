// Sample static global base model
var model = {
  content: {
    appTitle: 'Chicken Foot Dominoes',
    pageTitle: '{content.appTitle}'
  }
};

// Extend global model provide additional useful vars at runtime and export it
module.exports = function(req, res) {
  return {

    // Always static
    content: model.content,
    
    // Recalculated each require
    currentYear: new Date().getFullYear(),
    mainDomain: req.headers['x-forwarded-host'] || req.headers.host,
    NODE_ENV: process.env.NODE_ENV
  };
};
