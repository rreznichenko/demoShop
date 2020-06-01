const db = require('../services/dbConnection');

const books = {
    getAllBooks() {
        return db().then(session => {
            return session.class.get('BOOK');
        })
    },
    getBook(id) {
        return db().then(session => {
            return session.record.get(id);
        });
    },
    createBook(data) {
        return db().then(session => {
            const Book = session.class.get('BOOK');
            Book.create({...data});
        })
    },
    updateBook(id, data) {
        return db().then(session => {
            this.getBook(id).then(book => {
                console.log(book)
                const updatedBook = {
                    ...book,
                    ...data
                }
                session.record.update(updatedBook);
            })
        })
    }
}

module.exports = books;