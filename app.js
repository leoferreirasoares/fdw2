const express =require('express');
const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('Hello Word!')
})
app.get('/produtos',(req,res)=>{
    res.send('Listagem de produtos!')
})
app.post('/produtos',(req,res)=>{
    res.send('cadastrando produtos!')
})
app.get('/produtos/:id',(req,res)=>{
    res.send('Buscando o produto'+req.params.id)
})
app.put('/produtos/:id',(req,res)=>{
    res.send('Atualizando o produto'+req.params.id)
})
app.delete('/produtos/:id',(req,res)=>{
    res.send('Deletando o produto'+req.params.id)
})
app.listen(port,()=>{
    console.log('example app listening on port ${port}')
})