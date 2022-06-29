const { error } = require('jquery');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');


let data = mongoose.connection
data.on("error", function () {
   console.log("mongoose connection error");
 });
 
 data.once("open", function () {
   console.log("mongoose connected successfully");
 });

//create the schema model which describe the rented car
let cars = mongoose.Schema({
   id: { type: Number, uniaue: true },
   car: String,
   car_color: String,
   price: String,
   disc: String,
   availability: Boolean
});


let car = mongoose.model('car', cars);

//func to create new car
let addCar = (data, CB) => {
   car.create(data, (err, result) => {
      if (err) CB(err, null)
      else CB(null, result)
  })
};

// to check the storage 
let getCars = (cb) => {
      return car.find({},(err, items) =>{
         if (err) {
           cb(err, null);
         } else {
           cb(null, items);
         }})
};

let getOneCar = (name)=>{
   car.find({ car: name })
};

// delete an element from database 
let delCar = (id) => {
   car.deleteOne({car: id }).then(console.log("Deleted"))
   .catch(error=>{
      console.log(error);
   })
   return getCars()
};

//export functions to data/index.js
module.exports.addCar = addCar
module.exports.getCars = getCars
module.exports.delCar = delCar
module.exports.getOneCar = getOneCar