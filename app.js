"use strict";

const express = require("express");
const app = express();
const home = require("./src/index");

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", "./ejs");

app.use("/", home);

module.exports = {
  app,
  PORT,
};
