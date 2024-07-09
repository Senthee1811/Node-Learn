const os = require('os'); 

//Info about Current User 
const user = os.userInfo() 
console.log(user)

//Sys Uptime in seconds
const uptime = os.uptime()
console.log(`System Uptime is ${uptime} seconds`);

const currentOS ={
    name:os.type(),
    release: os.release(), 
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);