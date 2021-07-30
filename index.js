const express = require('express');

const app = express();

function rootCall(req,res){
    res.send('thanks you')
}

app.get('/',rootCall)


app.listen(3000,() => console.log('listen'))