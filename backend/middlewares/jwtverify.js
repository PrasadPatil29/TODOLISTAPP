const jwtpassword="12345"
const express = require('express');
const jwt=require("jsonwebtoken")
const { JsonWebTokenError } = require('jsonwebtoken');


function checkjwt(req,res,next){
const data =req.headers.authorization
const payload=data.split(" ");
const token = payload[1];

const verify = jwt.verify(token,jwtpassword);
 if(verify.username){
     next();
   } else{
    res.status(403).send("Unauthorite")
   }
}
module.exports=checkjwt