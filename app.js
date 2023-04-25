"use strict";

const express = require("express");
const app = express();
const home = require("./src/index");

const PORT = 3000;
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", "./src/ejs");
app.use(express.static(`${__dirname}/src/ejs`));

app.use("/", home);

module.exports = {
  app,
  PORT,
};
