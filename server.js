const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello World!</h1>");
});

app.get("/contact", (req, res) => {
    res.send("<p>Contact me at: naccygame@gmail.com</p>");
});

app.get("/about", (req, res) => {
    res.send("<p>We are software developers</p>");
});

app.get("/login", (req, res) => {
    res.send("<p>login Page</p>");
});

app.listen(port, () => {
    console.log("Example app listening on port " + port);
});