"use strict";

const User = require("./models/User");

const output = {
  home: (req, res) => {
    res.render("route");
  },

  login: (req, res) => {
    res.render("login");
  },

  register: (req, res) => {
    res.render("register");
  },
};

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    console.log(response);
    return res.json(response);

    /* const id = req.body.id,
      pw = req.body.pw;
    const users = UserStorage.getUsers("id", "pw");
    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        response.success = true;
        return res.json(response);
      }
    }
    response.success = false;
    response.msg = "Login failed";
    return res.json(response); */
  },

  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    console.log(response);
    return res.json(response);
  },
};

module.exports = {
  output,
  process,
};
