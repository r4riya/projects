let express=require('express');
let app=express();
app.get("/sample",(req,res)=>{
    res.send({ get:'success'});
    });
app.post("/sample",(req,res)=>{
    res.send({post:'success'});
});
app.listen(8080);
console.log("server listening port no 8080");