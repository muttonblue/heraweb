module.exports = function(app){
  var index = require('../controllers/index.controller.js');
  var patient = require('../controllers/patient.controller.js');
  app.get('/' , index.render);
  app.get('/template' , index.template);
  app.get('/heraapp' , index.render);
  app.get('/heraapp/index' , index.render);
  app.get('/heraapp/index' , index.index);
  app.get('/heraapp/flot' , index.flot);
  app.get('/heraapp/morris' , index.morris);
  app.get('/heraapp/tables' , index.tables);
  app.get('/heraapp/forms' , index.forms);
  app.get('/heraapp/panels-wells' , index.panelsWells);
  app.get('/heraapp/buttons' , index.buttons);
  app.get('/heraapp/notifications' , index.notifications);
  app.get('/heraapp/typography' , index.typography);
  app.get('/heraapp/icons' , index.icons);
  app.get('/heraapp/grid' , index.grid);
  app.get('/heraapp/blank' , index.blank);
  app.get('/heraapp/login' , index.login);
  



  app.get('/index' , index.index);
  app.get('/flot' , index.flot);
  app.get('/morris' , index.morris);
  app.get('/tables' , index.tables);
  app.get('/forms' , index.forms);
  app.get('/panels-wells' , index.panelsWells);
  app.get('/buttons' , index.buttons);
  app.get('/notifications' , index.notifications);
  app.get('/typography' , index.typography);
  app.get('/icons' , index.icons);
  app.get('/grid' , index.grid);
  app.get('/blank' , index.blank);
  app.get('/login' , index.login);
  
  app.get('/patient' , patient.index_page);

  app.get('/hellopug' , index.hellopug);
  
};
