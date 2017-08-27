module.exports = function(app){
  var controller = require('../controllers/home.controller.js');
  
  app.get('/home' , controller.render);
  app.get('/heraapp/home' , controller.render);
  

};
