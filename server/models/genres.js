const db = require('../services/dbConnection');

const genres = {
    getAllGenres() {
        return db().then(session => {
            return session.class.get('GENRE');
        })
    },
    getGenre(id) {
        return db().then(session => {
            return session.record.get(id);
        });
    },
    createGenre(data) {
        return db().then(session => {
            session.class.get('GENRE').then(Genre => {
                Genre.create({...data});
            });
        })
    },
    updateGenre(id, data) {
        return db().then(session => {
            this.getGenre(id).then(genre => {
                const updatedGenre = {
                    ...genre,
                    ...data,
                }
                session.record.update(updatedGenre);
            })
        })
    },
    deleteGenre(id) {
        return db().then(session => {
            session.record.delete(id)
        })
    }
}

module.exports = genres;