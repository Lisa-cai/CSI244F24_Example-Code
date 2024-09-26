//http module is uses to set up a webserver
//#1 require http
//#2 create variable using http.createServer()
//# tell the server to listen on a port
const http = require ("http"); 
//we need to read the file about.html. use module and send html fine to the server
const fs = require("fs");
const path = require("path");
const server = http.createServer((req, res)=>{
    //handle the different types of requests
    //req contains all of the information that came into your webserver
    //res is how you send something back to user
    if(req.url ==="/"){
        res.end("This is index");
    }
    if (req.url==="/about"){
        //we need to access about.html and send
        const filePath = path.join(__dirname,"about.html");
        fs.readFile(filePath, "utf8", (error, data)=>{
            if(error){
                res.end(error);
            }else{
                res.end(data);
            }
        });
    }
});
//listen on a port
//this runs on localhost:3000 127.0.0.1:3000
server.listen(3000, ()=>{
    console.log("Server started on port 3000")
});