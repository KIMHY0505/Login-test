"use strict";

class UserStorage {
  static #users = {
    id: ["yalo", "hi", "hello"],
    pw: ["1234", "1234", "123456"],
    name: ["우리밋", "나개발", "김팀장"],
  };

  static getUsers(...content) {
    const users = this.#users;
    const newUsers = content.reduce((newUsers, content) => {
      if (users.hasOwnProperty(content)) {
        newUsers[content] = users[content];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUsersInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users); // => [id, pw, name]
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;
