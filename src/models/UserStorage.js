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
}

module.exports = UserStorage;
