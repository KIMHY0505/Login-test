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

  static #getUsers(data, isAll, content) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = content.reduce((newUsers, content) => {
      if (users.hasOwnProperty(content)) {
        newUsers[content] = users[content];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsers(isAll, ...content) {
    return fs
      .readFile("./src/databases/data.json")
      .then((data) => {
        return this.#getUsers(data, isAll, content);
      })
      .catch(console.error);
    // const users = this.#users;
  }

  static getUsersInfo(id) {
    return fs
      .readFile("./src/databases/data.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  static async save(userInfo) {
    const data = await this.getUsers(true);
    if (data.id.includes(userInfo.id)) {
      throw "This is duplicated id";
    }

    data.id.push(userInfo.id);
    data.pw.push(userInfo.pw);
    data.name.push(userInfo.name);

    fs.writeFile("./src/databases/data.json", JSON.stringify(data));

    return { success: true };
  }
}

module.exports = UserStorage;
