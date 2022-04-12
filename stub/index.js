const Hapi = require("@hapi/hapi");
const routes = require("./routes");
const map = require("lodash/map");

const server = new Hapi.Server({
  host: "localhost",
  port: 8000,
  routes: {
    cors: {
      origin: ["*"],
      credentials: true,
      headers: ["*", "Accept", "content-type"],
      additionalHeaders: ["X-Requested-With"],
      additionalExposedHeaders: ["*", "content-disposition"],
    },
  },
});

map(routes, (route) => server.route(route));

server.events.on("response", (response) => {
  console.log(
    `response - ${
      response.info.remoteAddress
    }: ${response.method.toUpperCase()} --> ${response.path} ${JSON.stringify(
      response.payload
    )} `
  );
});

async function start() {
  try {
    await server.start();
  } catch (e) {
    process.exit(1);
  }
  console.log(`🚀  Server ready at: ${server.info.uri}`);
}

start();
