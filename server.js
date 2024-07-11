const http = require('http'); 

server = http.createServer((req,res) => {
    console.log('Request Event'); 
    res.end("Hello World")

}) 
server.listen(8080,() =>{
    console.log("Server Running on PORT 8080");
})

