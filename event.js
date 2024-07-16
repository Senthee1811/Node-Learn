const EventEmitter = require('events')

const customEmitter = new EventEmitter(); 

customEmitter.on('response',(name,id) => {
    console.log(`Data received user ${name} with ${id}`);
})
customEmitter.on('response',() => {
    console.log(`Some other Logic`);
})
customEmitter.emit('response',"John",34);

//Sever
// const server = http.createServer()

// server.on('request',(req,res) => {
//     res.end("Welcome")
// })

// server.listen(5000);