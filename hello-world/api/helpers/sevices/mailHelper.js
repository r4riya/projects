const nodemailer = require('nodemailer');
const ejs= require("ejs")
const env=require("dotenv")
env.config("../../../.env")
const fs=require("fs")

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    requireTLS: true,
  auth: {
    user: process.env.USER,
    pass: process.env.PASSWORD
  }
});

const sentMail = (email,data,path) => {
  ejs.renderFile(path,data,(err,data) => {
    if(err){
      console.log(err)
    }
    fs.readFile("./attachment.txt", function (err, data){
             
  
    if(err){
      console.log(err)
    }

    const mailOptions = {

      from: process.env.USER,
      to: email,
      subject: 'Sending Email using Node.js',
      html: data,
      attachments: [{'filename': 'attachment.txt', 'content': data}]

    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  })
  
})
}


module.exports = {
    sentMail
}