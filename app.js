const express = require('express');
const res = require('express/lib/response');
const Product = require('./models/Product.model');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
    

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect('mongodb://localhost/ironborn-ecommerce')
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

// app.get(path, code);

app.get("/", (req, res, next) => {
    res.render('home');
})

app.get("/about", (req, res, next) => { //request , resolve
    // console.log(req.url);
    // console.log("a request on the ABOUT page was received");
    // res.sendFile(__dirname + '/views/about.html');
    res.render('about');
});

app.get("/contact", (req, res, next) => {
    res.render('contact');
});

app.get("/products", (req, res, next) => {

    let filter;
    const max = req.query.maxPrice;
    
    if(max === undefined) {
        filter = {};
    } else {
        filter = {price: {$lte: max}}
    }

    Product.find(filter)
        .then((productsArr) => {
            res.render('productList', {products: productsArr});
        })
        .catch(error => console.error('error getting products from DB', error));
});

// app.get("/limoncello", (req, res, next) => {

//     Product.findOne({title: 'Limoncello'})
//         .then((productDetails) => {
//             res.render("product", productDetails);
//         })
//         .catch(error => console.log('error quetting product from DB', error));
// })

// app.get("/single-malt", (req, res, next) => {

//     Product.findOne({title: 'Single-malt'})
//         .then((productDetails) => {
//             res.render("product", productDetails);
//         })
//         .catch(error => console.log('error quetting product from DB', error));
// })

// app.get("/tequila", (req, res, next) => {

//     Product.findOne({title: 'Tequila'})
//         .then((productDetails) => {
//             res.render("product", productDetails);
//         })
//         .catch(error => console.log('error quetting product from DB', error));
// })

// app.get("/lambrusco", (req, res, next) => {

//     Product.findOne({title: 'Lambrusco'})
//         .then((productDetails) => {
//             res.render("product", productDetails);
//         })
//         .catch(error => console.log('error quetting product from DB', error));
// })

app.get("/products/:productId", (req, res, next) => {

    Product.findById(req.params.productId)
        .then((productDetails) => {
        res.render("product", productDetails);
        })
        .catch(error => console.log('error quetting product from DB', error));
    
})

app.post("/new", (req, res, next) => {

    const newProduct = {
        title: req.body.title,
        price: req.body.price
    };
    Product.create(newProduct)
        .then( newProduct => {
            res.redirect("/products");
        })
        .catch(error => console.log('error creating new product', error));
})


app.listen(3000, () => {
    console.log("server listening to requests...");
});