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
            session.class.get('BOOK').then(Book => {
                Book.create({...data});
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