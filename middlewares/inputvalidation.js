const userSchema = require('../schemas/Userschema');

function userInputValidation(req,res,next){
   const user = {
    username:req.body.username,
    password:req.body.password
   }
   
   const response =userSchema.safeParse(user)
   if(!response.success){
    res.status(400).json(
        {
            "message":"wrong Input data"
        }
    )
  
   }
     else(
        next()
    )
}
module.exports=userInputValidation