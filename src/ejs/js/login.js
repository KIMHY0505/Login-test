"use strict";

function login() {
  const id = document.querySelector("#ID");
  const pw = document.querySelector("#PW");
  const btn = document.querySelector("btn");

  const req = {
    id: id.value,
    pw: pw.value,
  };
  // console.log(req);
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((e) => e.json())
    .then((e) => {
      if (e.success) {
        location.href = "/";
      } else {
        alert(e.msg);
      }
    })
    .catch((err) => {
      console.error("Error: Can not Trying login");
    });
}
