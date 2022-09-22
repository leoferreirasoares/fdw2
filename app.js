const express =require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('Hello Word!')
})
app.get('/produtos',(req,res)=>{
    res.send('Listagem de produtos!')
})
app.listen(port,()=>{
    console.log('example app listening on port ${port}')
})