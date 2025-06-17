const express = require('express')
const router = express.Router();
const userInputValidation = require('../middlewares/inputvalidation')
const  jwtverify= require('../middlewares/jwtverify')
const User = require('../models/User');
const Todo=require('../models/Todo');
const { JsonWebTokenError } = require('jsonwebtoken');
const jwtpassword="12345"
const jwt=require("jsonwebtoken");
const { describe } = require('../schemas/Userschema');


 router.post ('/signup',userInputValidation,async(req,res) => {
    const username=req.body.username;
    const password=req.body.password;
    await  User.create({username:username,password:password});
    const token = jwt.sign({username},jwtpassword)
    res.status(200).json({
        "Message":"user is created",
        "Token":token
      
    })

    })
 
router.post('/signin',jwtverify,async(req,res) =>{
const username=req.body.username;
const password=req.body.password;
const find =  await User.findOne({username:username});

  if(!find){
    res.status(403).json({
        "message":"signup first"
    })
  }
        res.send("login sucessfull")
 })

router.post('/todo',jwtverify,async(req,res)=>{
  const title=req.body.title;
  const description = req.body.description;
  await Todo.create({
    "title":title,
    "description":description
  })
  res.status(201).json({
    "message":"todo is created"
    });

})

router.get('/todoshow',jwtverify,async (req,res)=>{
 const data= await Todo.find({}).select('title description -_id')
 console.log(data);
 res.send(data);

})


    
    



module.exports=router;