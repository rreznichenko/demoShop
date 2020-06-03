const server = require("orientjs");
const orientDBClient = server.OrientDBClient;
const config = require("../config.json");

// CREATE BOOK

orientDBClient
  .connect({
    host: config.db.host,
    port: config.db.port,
  })
  .then((client) => {
    client
      .session({
        name: config.db.tableName,
        username: config.db.username,
        password: config.db.password,
      })
      .then((session) => {
        // use the session
        session
          .command("CREATE CLASS BOOK EXTENDS V")
          .all()
          .then((result) => {
            session.command("CREATE PROPERTY BOOK.name STRING");
            session.command("CREATE PROPERTY BOOK.description STRING");
            session.command("CREATE PROPERTY BOOK.shortDesc STRING");
            session
              .command("CREATE PROPERTY BOOK.price STRING")
              .all()
              .then((result) => {
                return session.close().then(() => {
                  client.close();
                });
              });
          });
      });
  })
  .then(() => {
    console.log("Books created");
  });

// CREATE Genre

orientDBClient
  .connect({
    host: config.db.host,
    port: config.db.port,
  })
  .then((client) => {
    client
      .session({
        name: config.db.tableName,
        username: config.db.username,
        password: config.db.password,
      })
      .then((session) => {
        // use the session
        session
          .command("CREATE CLASS GENRE EXTENDS V")
          .all()
          .then((result) => {
            session
              .command("CREATE PROPERTY GENRE.name STRING")
              .all()
              .then((result) => {
                return session.close().then(() => {
                  client.close();
                });
              });
          });
      });
  })
  .then(() => {
    console.log("genre created");
  });

orientDBClient
  .connect({
    host: config.db.host,
    port: config.db.port,
  })
  .then((client) => {
    client
      .session({
        name: config.db.tableName,
        username: config.db.username,
        password: config.db.password,
      })
      .then((session) => {
        // use the session
        session
          .command("CREATE CLASS AUTHOR EXTENDS V")
          .all()
          .then((result) => {
            session
              .command("CREATE PROPERTY AUTHOR.name STRING")
              .all()
              .then((result) => {
                return session.close().then(() => {
                  client.close();
                });
              });
          });
      });
  })
  .then(() => {
    console.log("author created");
  });

orientDBClient
  .connect({
    host: config.db.host,
    port: config.db.port,
  })
  .then((client) => {
    client
      .session({
        name: config.db.tableName,
        username: config.db.username,
        password: config.db.password,
      })
      .then((session) => {
        // use the session
        session
          .command("CREATE CLASS USERS EXTENDS V")
          .all()
          .then((result) => {
            session.command("CREATE PROPERTY USERS.name STRING");
            session
              .command("CREATE PROPERTY USERS.password STRING")
              .all()
              .then((result) => {
                return session.close().then(() => {
                  client.close();
                });
              });
          });
      });
  })
  .then(() => {
    console.log("users created");
  });

orientDBClient
  .connect({
    host: config.db.host,
    port: config.db.port,
  })
  .then((client) => {
    client.session({
      name: config.db.tableName,
      username: config.db.username,
      password: config.db.password,
    }).then((session) => {
      session.class
        .create("BookAuthor", "E")
        .then((player) => console.log("BookAuthor Created"));
      session.class
        .create("BookGenres", "E")
        .then((result) => {
          console.log("BookGenres Created")
          return session.close().then(() => {
            console.log("finished");
            client.close();
          });
        });
    });
  })
  

// orientDBClient.connect({
//   host: "localhost",
//   port: 2424
// }).then(client => {
//   client.session({ name: "demoShop", username: "root", password: "235387qqQQ@@"})
//   .then(session => {
//       // use the session

//       const Book = session.class.get('BookAuthor')
//       .then(book => {
//         book.list().then(items => {
//           items.forEach(item => {
//             console.log(`#${item.out.cluster}:${item.out.position}`)
//             session.record.get(`#${item.out.cluster}:${item.out.position}`).then(outItem => {
//               console.log(outItem)
//             }).then(result => {
//               return session.close().then(() => {
//                   client.close();
//               });
//           })
//           })
//         })
//       })

//   })
// }).then(()=> {
//    console.log("author created");
// });
