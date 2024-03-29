const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB");
const fruitschema = new mongoose.Schema({
  name: "string",
  review: "string",
  rating: Number,
});
const Fruit = mongoose.model("Fruit", fruitschema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty solid as fruit",
});
//fruit.save();
const pinapple = new Fruit({
    name: "pinapple",
    score: 7,
    review: "great fruit"
})
pinapple.save();
const peopleschema = new mongoose.Schema({
name: {
        type: String,
        required: [true, "please check your data entry, name is required"]
      },
  age: Number,
  favouritefruit: fruitschema
});
const Person = mongoose.model("Person", peopleschema);

const person = new Person({
  name: "Emmy",
  age: 23,
  favouritefruit: pinapple
   
});
person.save();

const kiwi = new Fruit({
  name: "kiwi",
  score: 10,
  review: "Best fruit",
});
const orange = new Fruit({
  name: "orange",
  score: 4,
  review: "Too sour for me",
});
const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "weird taste",
});
// adding many fruit at once
/*Fruit.insertMany([kiwi, orange, banana])
  .then(function () {
    console.log("Successfully saved to DB");
  })
  .catch(function (err) {
    console.log(err);
  });
  */
 // reading data in our database and console.log the names using forEach
 /* Fruit.find()
  .then(function(fruits) {
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
    mongoose.connection.close();
  })
  .catch(function(err) {
    console.log(err);
  });
*/ 
// updating one data in database
 /* Fruit.updateOne(
    { _id: "6606be71d073d44cec7b40de" }, // Filter criteria
    { $set: { name: "Peach" } }           // Update operation
  )
  .then(function() {
    console.log("Success: Document updated successfully.");
  })
  .catch(function(err) {
    console.log("Error:", err);
  });
       // deleting one item in database
  Fruit.deleteOne(
    { name: "Apple" })
  .then(function() {
    console.log("Success: Document deleted successfully.");
  })
  .catch(function(err) {
    console.log("Error:", err);
  });
  
*/
  
