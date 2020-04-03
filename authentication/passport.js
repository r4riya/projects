const auth=require("./auth")
const stategy=require("./passportJWT")
let express=require('express');
const passport = require("passport")
stategy.JWTStrategy(passport)
let app=express();
app.get("/sample",(req,res)=>{
    const token = auth.generateToken()
    res.send({ token:token});
    });
app.post("/sample",passport.authenticate('jwt', { session: false }),(req,res)=>{
    res.send({post:'success'});
});
app.listen(8080);
console.log("server listening port no 8080");