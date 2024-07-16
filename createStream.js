// const {writeFileSync} = require('fs'); 

// for (let i = 0; i < 10000;i++){
//     writeFileSync('./content/big.txt',`hello world ${i} times`,{flag: 'a'});
// }

const {createReadStream} = require('fs'); 

// const stream = createReadStream('./content/big.txt'); 

// stream.on('data',(result) => {
//     console.log(result);
// })

const stream = createReadStream('./content/big.txt',{highWaterMark:90000,
    encoding:'utf8' 
}); 

stream.on('data',(result) => {
    console.log(result);
})

stream.on('error',error => console.log(error))

