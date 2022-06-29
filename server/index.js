
const express=require('express');
const app=express()
const data=require('./data/mongo')

app.use(express.json())




//set the port 
let PORT = 1128

//to get all data from the database
app.get('/get',function(req,res){

    data.getCars((err,result)=>{
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
app.delete('/del/:_id',function(req,res){

    data.delCar(req.params._id,(err,data)=>
    {
        if (err) send(err)
        else send({msg:"delete with sucess"},data)
    }).then(data=>{res.send(data)})
});

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})
