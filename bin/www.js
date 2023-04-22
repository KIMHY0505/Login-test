"use strict";

const sp = require("../app");

sp.app.listen(sp.PORT, () => {
  console.log("Server start Port:", sp.PORT);
});
