const http = require('http'); 

http.createServer(function(req,res){
    res.write("Hello World"); //Writes a respond to the Client
    res.end();//Ends the response 
}).listen(8080) //Server listens in the port 8080 

