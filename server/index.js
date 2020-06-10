const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./router");

const books = require("./models/books");
const authors = require("./models/authors");
const genres = require("./models/genres");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("starting db content");
authors
  .createAuthor({
    name: "demo author",
  })
  .then(author => {
      console.log(author)
    return genres.createGenre({
        name: "demo genre",
      })
      .then((genre) => {
          console.log(genre)
          const authorRid = `["#${author['@rid'].cluster}:${author['@rid'].position}"]`;
          const genreRid = `["#${genre['@rid'].cluster}:${genre['@rid'].position}"]`;
            books
            .createBook({
                name: "demo book",
                description: "demo description",
                price: 300,
                shortDesc: "short demo desc",
                authors: authorRid,
                genres: genreRid,
            })
            .catch((err) => {
                process.exit(1);
            });
        console.log("finished db content");
      })
      .catch((err) => {
        process.exit(1);
      });
  })
  .catch((err) => {
    process.exit(1);
  });

app.all("*", (req, res) => {
  router(req, res);
});

app.listen(3000, () => {
  console.log("started");
});
