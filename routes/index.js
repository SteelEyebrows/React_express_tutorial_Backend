var express = require('express');
var router = express.Router();

var users=[
  {email:"aaa@aa.aa",password:"2425"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("welcome");
});

router.post('/login', function(req, res) {
 let result = users.find(user => user.email == req.body.email);
 if(result){
   if(result.password == req.body.password){
     res.status(200).send({
       message:"success"
     })
   }else{
    res.status(200).send({
      message:"password incorrect"
    })
   }
 }else{
  res.status(200).send({
    message:`${req.body.email}`
  })
 }
});
module.exports = router;
