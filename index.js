const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')

 
const app = express() 
app.use(cors()) 
app.use(bodyParser.json());


function rootCall(req,res){
    res.send('thankss') 
}
 

app.get('/',rootCall)
  
app.get('/free',(req,res) =>{
    res.send({saurav:'kew nai'})
})

const users = ["saurav", "raju", "shuvo", "shahana"];
app.get('/user/:id',(req,res) =>{
   const id = req.params.id;
   const name = users[id]
   res.send({id,name});
}) 

app.post('/addUser',(res,req) =>{
    const user = req.body;
    user.id = 55;
   res.send(user)
})

app.listen(3000,() => console.log('listen'))



