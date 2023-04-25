"use strict";

const id = document.querySelector("#ID");
const pw = document.querySelector("#PW");
const btn = document.querySelector("btn");

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  console.log(req);
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((e) => e.json())
    .then(console.log);
}
