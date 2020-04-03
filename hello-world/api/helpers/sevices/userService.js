const mailService = require("./mailHelper")
let mongoose=require('mongoose');
const path = require("path")
mongoose.connect('mongodb://localhost:27017/thapadb', {useNewUrlParser: true, useUnifiedTopology: true});
const User = mongoose.model('User', {
   firstName:String,
   lastName:String,
   email:String,
   password:String
  });

const registerUserService=(userData)=> {
  return new Promise(async (resolve,reject) => {
    const isUserExist = await User.findOne({
      email:userData.email
    })
    if(!isUserExist){
      User.create({
        firstName:userData.firstName,
        lastName:userData.lastName,
        email:userData.email,
        password:userData.password
  
      }).then(userCreated => {
        if(userCreated){
          resolve(userCreated)
        }else{
          resolve(false)
        }
      })
    }else{
     resolve(false)
    }
  })  
}
const loginUserService = (userData) => {
  return new Promise(async(resolve,reject) => {
   const isUserExist=await User.findOne({
     email:userData.email,
     password:userData.password
   })
   if(isUserExist){
    let mailTemplatePath = path.join(__dirname, "../", "../", "../", 'template', "mailTemplate.ejs");
     mailService.sentMail(userData.email,{name:isUserExist.firstName},mailTemplatePath)
     resolve (true)
   }
   else{
     resolve(false)
   }

  })
  
}
module.exports={
  registerUserService,
  loginUserService
}





