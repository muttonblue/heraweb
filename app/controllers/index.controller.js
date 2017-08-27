var PAGE = 'index';

exports.render = function(req, res) {
  var isLoggedIn = false;
  console.log('c  c  ' + JSON.stringify(req.session)  );
  if(typeof req.session.remember !== 'undefined'){
    isLoggedIn = req.session.remember;
  }

   res.render('pages/index' , {
     "title" : "Hello World",
     "message" : "How are things."
   }); //jade
 
};

exports.index = function(req, res) {
  var isLoggedIn = false;
  console.log('c  c  ' + JSON.stringify(req.session)  );
  if(typeof req.session.remember !== 'undefined'){
    isLoggedIn = req.session.remember;
  }

   res.render('pages/index' , {
     "title" : "Hello World",
     "message" : "How are things."
   }); //jade
 
};

exports.flot = (req, res) => {
  res.render('pages/flot' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};


exports.morris = (req, res) => {
  res.render('pages/morris' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.tables = (req, res) => {
  res.render('pages/tables' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.forms = (req, res) => {
  res.render('pages/forms' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.panelsWells = (req, res) => {
  res.render('pages/panels-wells' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.buttons = (req, res) => {
  res.render('pages/buttons' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.notifications = (req, res) => {
  res.render('pages/notifications' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.typography = (req, res) => {
  res.render('pages/typography' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.icons = (req, res) => {
  res.render('pages/icons' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.grid = (req, res) => {
  res.render('pages/grid' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.blank = (req, res) => {
  res.render('pages/blank' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.login = (req, res) => {
  res.render('pages/login' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //jade
};

exports.hellopug = (req, res) => {
  res.render('hellopug' , {
    "title" : "Hello World",
    "message" : "How are things."
  }); //pug
};




