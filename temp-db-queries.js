const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

mongoose
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));



    // Product.create({title: "tequila", price: 55, tags: ["spirits", "drink"]})
    //  .then(product => console.log("a new product was created", product))
    //  .catch(error => console.log("an error creating a product in DB", error));


//   Product.create({title: "limoncello", price: 20})
//   .then(product => console.log("a new product was created", product))
//   .catch(error => console.log("an error creating a product in DB", error));

//   Product.create({title: "single-malt", price: 100})
//   .then(product => console.log("a new product was created", product))
//   .catch(error => console.log("an error creating a product in DB", error));

// Product.find({price: {$gt:30}})
//     .then((productsArr) => {
//         console.log("products with price above 30...", productsArr);
//     })
//     .catch(error => console.log("an error finding a product in DB", error));

// Product.updateMany({store: "online"})
//     .then((response) => {console.log("products aupdated successfully")})
//     .catch(error => console.log("an error finding a product in DB", error));

// Product.findByIdAndUpdate('626133b67ec07f0ffefac26a', {price: 69})
//   .then(productFromDB => console.log("price was updated", productFromDB))
//   .catch(error => console.log("an error finding a product in DB", error));

Product.findByIdAndRemove('626133b67ec07f0ffefac26a')
  .then(productFromDB => console.log("product was removed", productFromDB))
  .catch(error => console.log("an error finding a product in DB", error));