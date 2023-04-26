"use strict";

const UserStorage = require("./UserStorage");

class Users {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, pw } = UserStorage.getUsersInfo(body.id);

    if (id) {
      if (id === body.id && pw === body.pw) {
        return { success: true };
      }
      return { success: false, msg: "Password is not wrong" };
    }
    return { success: false, msg: "ID is not wrong" };
  }
}

module.exports = Users;
