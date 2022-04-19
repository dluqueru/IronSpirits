const express = require('express');

// We create our own server named app
// Express server will be handling requests and responses
const app = express();

app.use(express.static('public'));

// app.get(path, code);

app.get("/about", (req, res, next) => { //request , resolve
    // console.log(req.url);
    // console.log("a request on the ABOUT page was received");
    res.sendFile(__dirname + '/views/about.html')
});

app.get("/contact", (req, res, next) => {
    res.sendFile(__dirname + '/views/contact.html')
});

app.listen(3000, () => {
    console.log("server listening to requests...");
});