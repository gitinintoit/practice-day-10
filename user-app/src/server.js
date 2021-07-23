const expressModule=require('express');
//console.log(expressModule);
const bodyParser=require('body-parser');
const dal = require('./DAL');
const cors=require('cors');
const server=expressModule();
server.use(bodyParser.json())
server.use(cors());
server.get('/user', function(request, response){
    console.log("get called");
    dal.getUsers(rows=>{
        console.log(rows);  
    })
    response.send('hello');
    
})

server.post('/user',(req,res)=>{
    console.log(req.body);
    dal.saveUser(req.body);
    res.send('saved');
})

server.listen(3001, function(request, response){
    console.log("server started");
})

console.log("I go first");