import express from "express";
const app=express();
const port=30000;
app.get('/',(req,res)=>{
    res.send("this is muskan joshi")
});
app.listen(port,()=>{
    console.log(`server is running at http:localhost:${port}`);
});