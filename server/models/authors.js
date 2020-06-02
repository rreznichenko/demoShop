const db = require('../services/dbConnection');

const authors = {
    getAllAuthors() {
        return db().then(session => {
            return session.class.get('AUTHOR');
        })
    },
    getAuthor(id) {
        return db().then(session => {
            return session.record.get(id);
        });
    },
    createAuthor(data) {
        return db().then(session => {
            session.class.get('AUTHOR').then(Author => {
                Author.create({...data});
            });
        })
    },
    updateAuthor(id, data) {
        return db().then(session => {
            this.getAuthor(id).then(Author => {
                const updatedAuthor = {
                    ...Author,
                    ...data
                }
                session.record.update(updatedAuthor);
            })
        })
    },
    deleteAuthor(id) {
        return db().then(session => {
            session.record.delete(id)
        })
    }
}

module.exports = authors;