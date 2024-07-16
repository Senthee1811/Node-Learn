const http = require('http'); 
var fs = require('fs');
const fileStream = require('fs'); 

const server = http.createServer(function(req,res){
    // const text = fs.readFileSync('./content/big.txt','utf8')
    // res.end(text);
    const text = fs.createReadStream('./content/big.txt','utf8')
    

    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res) 
    })

    fileStream.on('error',(err)=>{
        console.log(err);
    } )
})

server.listen(5000);