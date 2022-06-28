const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/fetcher');
let data = mongoose.connection
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
   car.create(data, (err, cars) => {
      if (err) CB(err, null)
      else CB(null, cars)
  })
};

// to check the storage 
let getCars = (CB) => {
   car.find({}, (err, cars) => {
      if (err) CB(err, null)
      else CB(null, cars)
   })
};

let getOneCar = (name)=>{
   car.find({ car: name })
};

// delete an element from database 
let delCar = (id) => {
   car.deleteOne({ _id: id }, (err, cars) => {
      if (err) send(err)
      else send({ msg: "delete with sucess" }, cars)
   })
   return getCars()
};

//export functions to data/index.js
module.exports.addCar = addCar
module.exports.getCars = getCars
module.exports.delCar = delCar