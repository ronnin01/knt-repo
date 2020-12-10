const epxress = require('express');
const patn = require('path');
const app = epxress();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
  res.sendFile(patn.join(__dirname,'index.html'));
})
app.listen(port,() =>{
  console.log('server startrd');
})