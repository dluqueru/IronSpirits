const express = require('express');
const res = require('express/lib/response');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

app.use(express.static('public'));

// app.get(path, code);

app.get("/", (req, res, next) => {
    res.sendFile(__dirname + '/views/home.html');
})

app.get("/about", (req, res, next) => { //request , resolve
    // console.log(req.url);
    // console.log("a request on the ABOUT page was received");
    res.sendFile(__dirname + '/views/about.html');
});

app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html');
});

app.get("/limoncello", (req, res, next) => {
    const data = {
        title: "Limoncello",
        price: 20,
        imageFile: "limoncello-weno.jpg",
        stores: ["Online","Albacete", "Freiburg", "Amsterdam"]
    }
    res.render("product", data);
})

app.get("/single-malt", (req, res, next) => {
    const data = {
        title: "Single-malt",
        price: 100,
        imageFile: "single-malt.jpg"
    }
    res.render("product", data);
})

app.get("/tequila", (req, res, next) => {
    const data = {
        title: "Tequila",
        price: 40,
        imageFile: "tequila.jpg"
    }
    res.render("product", data);
})


app.listen(3000, () => {
    console.log("server listening to requests...");
});