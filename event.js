const EventEmitter = require('events')

const customEmitter = new EventEmitter(); 

customEmitter.on('response',(name,id) => {
    console.log(`Data received user ${name} with ${id}`);
})
customEmitter.on('response',() => {
    console.log(`Some other Logic`);
})
customEmitter.emit('response',"John",34);