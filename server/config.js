console.log("connecting to:",process.env.DB_HOST)
const  config = {
  "db": {
    "host": process.env.DB_HOST || 'localhost',
    "port": Number(process.env.DB_PORT) || 2424,
    "tableName": "demoShop",
    "username": "root",
    "password": "test"
  },
  "adminPanel": {
     "login": "admin",
     "password": "admin"
  }
};

module.exports = config;
