const {readFile} = require('fs'); 

console.log('First Task'); 

readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.log(err); 
        return
    }
    console.log(result); 
    console.log('Completed First Task'); 

})
console.log("Starting next Task");
