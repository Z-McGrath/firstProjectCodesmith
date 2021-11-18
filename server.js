const express = require('express');
const path = require('path');
const controller = require('./controller')
const PORT = 8080;
const app = express();

app.use(express.static(__dirname + '/public'));
app.listen(PORT);

app.get('/home',(req,res)=>{
    res.sendFile(path.resolve(__dirname + '/public/index.html'))
})
//created a route for restaurants
app.get('/restaurants',(req,res)=>{
   const data =  controller.getRestaurants()
    res.send(data)
})

app.get('/',(req,res)=>{
    const data =  controller.getRestaurants()
     res.send(data)
 })
 
 app.get('/Things to do',(req,res)=>{
    const data =  controller.getRestaurants()
     res.send(data)
 })

 app.get('/Best Beaches in Town',(req,res)=>{
    const data =  controller.getRestaurants()
     res.send(data)
 })

 app.get('/Nigth Life',(req,res)=>{
    const data =  controller.getRestaurants()
     res.send(data)
 })

 app.get('/Insta Worthy Spots',(req,res)=>{
    const data =  controller.getRestaurants()
     res.send(data)
 })