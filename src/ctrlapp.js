"use strict";
const users = {
  id: ["yalo", "hi", "hello"],
  pw: ["1234", "1234", "123456"],
};

const output = {
  home: (req, res) => {
    res.render("route");
  },

  login: (req, res) => {
    res.render("login");
  },
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success: false,
      msg: "Failded Lofi",
    });
  },
};

module.exports = {
  output,
  process,
};
