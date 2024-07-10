const http = require('http'); 

 const sever = http.createServer(function(req,res){
    if (req.url === '/'){
        res.end("This is Home Page")
    }
    if(req.url === '/about'){
        res.end("This is about page")
    }
    res.end(`
        <h1>Oops</h1>
        <p>We didnt found that page!!!!</p>
        
        `)
})

sever.listen(8080) //Server listens in the port 8080 

