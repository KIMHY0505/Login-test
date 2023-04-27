"use strict";

function register() {
  const id = document.querySelector("#ID");
  const name = document.querySelector("#name");
  const confirm_PW = document.querySelector("#confirm-PW");
  const pw = document.querySelector("#PW");

  if (!id.value) return alert("Please write your ID");
  if (pw.value !== confirm_PW.value) return alert("Don't Coincide Password");
  const req = {
    id: id.value,
    name: name.value,
    pw: pw.value,
  };

  //   console.log(req);

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((e) => e.json())
    .then((e) => {
      if (e.success) {
        location.href = "/login";
      } else {
        alert(e.msg);
      }
    })
    .catch((err) => {
      console.error("Error: Can not Trying register");
    });
}
