"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // => [id, pw, name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static getUsers(...content) {
    // const users = this.#users;
    const newUsers = content.reduce((newUsers, content) => {
      if (users.hasOwnProperty(content)) {
        newUsers[content] = users[content];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsersInfo(id) {
    return fs
      .readFile("./src/databases/data.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
    return;
  }

  static save(userInfo) {
    /* this.#users.id.push(userInfo.id);
    this.#users.pw.push(userInfo.pw);
    this.#users.name.push(userInfo.name);
    return { success: true }; */
  }
}

module.exports = UserStorage;
