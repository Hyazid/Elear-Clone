//creating proxy for more security 
const express = require('express');
const next = require('next');
const {createProxyMiddleware}=require('http-proxy-middleware');


const dev = process.env.NODE_ENV !=="production";
const  app = next({dev});
const handler= app.getRequestHandler();


app.prepare().then(()=>{

    const server = express()
    if(dev){
server.use('/api', createProxyMiddleware({
    target:"http://localhost:3001",
    changeOrigin:true

}))
    }
    server.all('*', (req,res)=>{
        return handler(req, res);
    })

    server.listen(3000, (err)=>{
        if(err)throw err; 
        console.log("> ready to connect");
    })
}).catch((err)=>{
    console.log("error"+err);
})