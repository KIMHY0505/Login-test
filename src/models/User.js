"use strict";

const UserStorage = require("./UserStorage");

class Users {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const client = this.body;
    const { id, pw } = await UserStorage.getUsersInfo(client.id);

    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, msg: "Password is not wrong" };
    }
    return { success: false, msg: "ID is not wrong" };
  }

  register() {
    const client = this.body;
    const response = UserStorage.save(client);

    return response;
  }
}

module.exports = Users;
