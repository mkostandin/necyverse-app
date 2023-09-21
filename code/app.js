const Tween = require("@tweenjs/tween.js"); //3d animation for map
const google = require("google-maps");
const path = require("path");
const serveIndex = require('serve-index');//makes deep links possible

const express = require("express");

const mainRoutes = require("./routes/main.routes");

const app = express();

//middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use('/.well-known', express.static('.well-known'), serveIndex('.well-known'));
app.use(express.static("public"));

app.use(mainRoutes);

app.use(function (error, req, res, next) {
  res.status(500).render("500");
});

let port = 3000;

if (process.env.PORT){
  port = process.env.PORT;
}

app.listen(port);
