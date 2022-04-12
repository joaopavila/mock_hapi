const mock = require("./mock");

const user = {
  method: ["GET"],
  path: "/user",
  handler: () => mock,
};

module.exports = user;
