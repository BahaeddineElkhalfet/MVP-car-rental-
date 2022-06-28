
const express=require('express');
const app=express()
const cors =require ('cors')
const data=require('./data/mongo')

app.use(express.json())
app.use(cors())


//set the port 
let PORT = 1128

//start with sending the data of cra to the database 
app.post('/add',function(req,res){
data.addCar(req.body,(err,data)=>{
 res.send(data)
});
});
//to get all data from the database
app.get('/cars',function(req,res){

    data.getCars((err,data)=>{
     if(err) send(err)
     else send(data)
}).then(data=>{res.send(data)})
});
// try to delete a car from the data base by target her id 
app.delete('/del/:_id',function(req,res){

    data.delCar(req.params.id,(err,data)=>
    {
        if (err) send(err)
        else send({msg:"delete with sucess"},data)
    }).then(data=>{res.send(data)})
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
