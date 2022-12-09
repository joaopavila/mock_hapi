const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const server = new Hapi.Server({
  host: "localhost",
  port: 8000,
  routes: {
    cors: {
      origin: ["*"],
      credentials: true,
      headers: ["*", "Accept", "content-type", "X-Frame-Options"],
      additionalHeaders: ["X-Requested-With"],
      additionalExposedHeaders: ["*", "content-disposition"],
    },
  },
});

routes.map((route) => server.route(route));

async function start() {
  try {
    await server.start();
  } catch (e) {
    process.exit(1);
  }
  console.log(`🚀  Server ready at: ${server.info.uri}`);
}

start();
