const mongoose = require('mongoose');
const Product = require("../models/Product.model")

mongoose
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

const products = [
    {
        title: "Limoncello",
        price: 20,
        imageFile: "limoncello-weno.jpg",
    },
    {   title: "Single-malt",
        price: 100,
        imageFile: "single-malt.jpg"
    },
    {
        title: "Tequila",
        price: 40,
        imageFile: "tequila.jpg"
    },
    {
        title: "Lambrusco",
        price: 18,
        imageFile:
    }
]

Product.insertMany(products)
    .then(response => console.log(`${response.length} products created!`, response))
    .catch(err => console.log("error creating products in DB", error))
    .finally(() => {
        mongoose.connection.close();
    })

