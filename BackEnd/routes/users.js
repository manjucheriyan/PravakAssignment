var express = require('express');
var router = express.Router();

var ControllerConstant = require('../services/BackendController');


/* Register function */


router.post('/register',function(req, res) {
      let usname=req.body.username;
      let pwd=req.body.password;
      
      ControllerConstant.addUser(usname,pwd)
      .then(data=>{
         res.status(data.statusCode).send({message:data.message});
}) })


    /*  Login function....... */


router.post('/login',function(req, res) {
  
      let username=req.body.username;
      let password=req.body.password;

      ControllerConstant.login(username,password)
      .then(data=>{
      if(data.statusCode==200){
        req.session.currentUser=username;
      }
      res.status(data.statusCode).send({message:data.message});
  }) 
});

module.exports = router;