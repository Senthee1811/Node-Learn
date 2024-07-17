const express = require('express') 
const app = express() 
 
app.get('/',(req,res)=>{
    res.send("HomePage")
}) 

app.get('/about',(req,res) => {
    res.send("About Page")
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource Not FOUND!!!</h1>')
})



app.listen(5000,()=> {
    console.log("Server is listening on port number 5000")
})

//app.get()
//app.post()
//app.put()
//app.delete()
//app.all()
//app.use() -> For Middleware