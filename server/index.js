
const express=require('express');
const app=express()
const data=require('./data/mongo')
var cors = require('cors')

app.use(express.json())
app.use(cors()) // Use this after the variable declaration




//set the port 
let PORT = 1128

//to get all data from the database
app.get('/gett',function(req,res){

    data.getCars((err,result)=>{
        if(err) res.sendStatus(500)
        else res.send(result)
    })
});
app.get('/getone',function(req,res){

    data.getOneCar((err,result)=>{
        if(err) res.sendStatus(500)
        else res.send(result)
    })
});



//start with sending the data of cra to the database 
app.post('/post',function(req,res){
data.addCar(req.body,(err,data)=>{
 res.send(req.body)
});
});
// try to delete a car from the data base by target her id 
app.delete('/del/id',function(req,res){

    data.delCar(req.params.id, () => {
        res.send({ msg: "succ" });
      });
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
