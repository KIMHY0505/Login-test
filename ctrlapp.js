"use strict";

const home = (req, res) => {
  res.render("route");
};

const login = (req, res) => {
  res.render("login");
};

module.exports = {
  home,
  login,
};
