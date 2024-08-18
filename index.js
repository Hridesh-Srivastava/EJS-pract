import express from "express";
const app=express();
const port=5000;

let arr=['ramu','shyamu','gamu'];

app.get('/',(req,res)=>{
    res.render('app.ejs',{
        name:arr,
    });
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
});