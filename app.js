const http = require('http'); 


const server = http.createServer((req,res)=> {
    const url = req.url; 

    //Home page
    if(url == '/'){
    res.writeHead(200,{'content-type':'text/html'});
     res.write('<h1>Hello World</h1>')
     res.end();
    }
    //About Page
    else if(url === '/about'){
        res.writeHead(200,{'content-type':'text/html'});
     res.write('<h1>About</h1>')
     res.end();
    }
    else{
        res.writeHead(404,{'content-type':'text/html'});
     res.write('<h1>Forbidden</h1>')
     res.end();
    }

     
})

server.listen(5000)