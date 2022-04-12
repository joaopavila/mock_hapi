const mock = require("./mock");

const example = {
  method: ["GET"],
  path: "/example",
  handler: () => mock,
};

module.exports = example;
