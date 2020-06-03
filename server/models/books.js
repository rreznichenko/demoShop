const db = require('../services/dbConnection');

const books = {
    getAllBooks() {
        return db().then(session => {
            return session.class.get('BOOK').catch(err => {});
        })
    },
    getBook(id) {
        return db().then(session => {
            return session.record.get(id).catch(err => {});
        });
    },
    createBook(data) {
        return db().then(session => {
            session.class.get('BOOK').then(Book => {
               return Book.create({...data});
            }).then(Book => {
                const authors = JSON.parse(data.authors)
                const genres =  JSON.parse(data.genres)
                if(authors && authors.length) {
                    authors.map(author => {
                        session.command(`CREATE EDGE BookAuthor FROM ${author} TO ${Book['@rid']}`);
                    });
                }
                if(genres && genres.length) {
                    genres.map(genre => {
                        session.command(`CREATE EDGE BookGenres FROM ${genre} TO ${Book['@rid']}`);
                    });
                }
            });
        })
    },
    updateBook(id, data) {
        return db().then(session => {
            this.getBook(id).then(book => {
                const updatedBook = {
                    ...book,
                    ...data,
                }
                session.record.update(updatedBook);
            })
        })
    },
    deleteBook(id) {
        return db().then(session => {
            session.record.delete(id)
        })
    }
}

module.exports = books;