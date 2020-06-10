const server = require("orientjs");
const orientDBClient = server.OrientDBClient;

const config = require("../config");

function connectDb() {
  return orientDBClient
    .connect({
      host: config.db.host,
      port: config.db.port,
    })
    .then((client) => {
      return client.session({
        name: config.db.tableName,
        username: config.db.username,
        password: config.db.password,
      });
    });
}

module.exports = connectDb;
