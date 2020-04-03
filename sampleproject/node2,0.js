let http=require('http');
let url=require('url');
let server=http.createServer(function (req,res) {
    res.writeHead(200,{'content-type':'text/html'});
    res.url,true;
let obj=url.parse(req.url,true).query;
let uname=obj.uname;
let upwd=obj.upwd;
console.log(uname,upwd)
if(uname=="admin"&&upwd=="admin"){
    res.write("<h1>login success</h1>")
}else{
    res.write("<h1>login failed</h1>")
}
res.end();
    
});
server.listen(3080);