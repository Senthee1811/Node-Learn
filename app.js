const express = require('express'); 
const app = express(); 
const logger = require('./logger.js')
const authorize = require('./authorize.js')
//req => middleware => res 

const PORT = process.env.PORT || 3000;
const mockUsers = [{id:1,name:"John"},{id:2,name:"Albert"},{id:3,name:"David"}]
app.get('/',(req,res)=>{
    res.send("Home")
})

app.get('/api/users',(req,res)=>{
    res.send(mockUsers)
    
})

app.get('/api/users/:id',(req,res)=>{
    const parsedId = parseInt(req.params.id);
    console.log(parsedId)
    if(isNaN(parsedId)){
        res.status(400).send("Not FOUND")
    }
    const findUser = mockUsers.find((user)=>user.id === parsedId)
        if(!findUser) return res.sendStatus(404)  
            return res.send(findUser)
})



app.get('/api/products',(req,res)=>{
       res.send([{name:"Sofa",id:1},{name:"Laptop",id:2},{name:"Vase",id:3}])
})
app.use(express.json())

app.post('/api/users',(req,res)=>{
    const {body} = req
    const newuser = {id:mockUsers[mockUsers.length - 1].id + 1,...body}
    mockUsers.push(newuser)
    res.status(201).send(newuser)
})

app.put('/api/users/:id', (req, res) => {
    const {
        body,
        params: { id }
    } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) return res.sendStatus(404);
    mockUsers[findUserIndex] = { id: parsedId, ...body };
    return res.status(200).send(mockUsers[findUserIndex]);
});

app.patch('/api/users/:id', (req, res) => {
    const {
        body,
        params: { id }
    } = req;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.sendStatus(400);
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId);
    if (findUserIndex === -1) return res.sendStatus(404);
    mockUsers[findUserIndex] = {...mockUsers[findUserIndex],...body} 
    res.sendStatus(200)

})

app.delete("/api/users/:id",(req,res)=>{
    const{
        params:{id},
    } = req;

    const parsedId = parseInt(id); 
    if(isNaN(parsedId)) return res.sendStatus(400); 
    const findUserIndex = mockUsers.findIndex((user) => user.id === parsedId); 
    if(findUserIndex === -1) return res.sendStatus(404);
    mockUsers.splice(findUserIndex); 
    return res.sendStatus(200);
})


app.listen(PORT,()=>{
    console.log('Server is running')
})