let express=require('express');
let mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/thapadb', {useNewUrlParser: true, useUnifiedTopology: true});

const mongodata = mongoose.model('mongodata', {
   
    fname: String,
       lname:String,
       cnumber:Number

     });
let app=express();
app.get("/login",function (req,res){
    let name=req.query.fname;
    let name1=req.query.lname;
    let contact=req.query.cnumber;


mongodata.create({
    fname:name,
    lname:name1,
    cnumber:contact
}).then(data => {
    console.log(data)
})
});
app.listen(8080);