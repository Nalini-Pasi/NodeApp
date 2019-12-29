var http=require('http');
var fs=require('fs');
var query=require('querystring');
var url=require('url');

http.createServer(function(req,res)
{
    var d=url.parse(req.url);
    console.log(d);


    switch(d.pathname)
    {
        case "/":
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile("login.html",function(error,data)
        {
        if(error)
        {
            console.log("Error In File");
        }
        else
        {
            console.log("Sending File");
            res.end(data);
        }
         });
        break;

        case "/login":
        res.writeHead(200,{'Content-type':'text/html'});
        data=query.parse(d.query);
        if(data.username=="akash" || data.username=="babalu" )
        {
            if(data.password=="123")
            {
            console.log('Login Success');
            res.end("<h1> Hello  "+data.username+ " Login Succeccfull</h1>");
            }
        }
        else
        {
            console.log('Invalid Login');
            res.end("<h1> Invalid Login</h1>");

        }
    }
    
}).listen(8082);