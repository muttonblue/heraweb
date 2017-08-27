// var PAGE = 'pages/home';
const PAGE_INDEX = 'pages/home';

exports.render = function(req, res) {

  var isLoggedIn = false;
  console.log('c  c  ' + JSON.stringify(req.session)  );
  if(typeof req.session.remember !== 'undefined'){
    isLoggedIn = req.session.remember;
  }

   res.render(PAGE_INDEX , {
     "title" : "Hello World",
     "message" : "How are things."
   }); 

};


