const db = require('../services/dbConnection');

const genres = {
    getAllGenres() {
        return db().then(session => {
            return session.class.get('GENRE').catch(err => {});
        })
    },
    getGenre(id) {
        return db().then(session => {
            return session.record.get(id).catch(err => {});
        });
    },
    createGenre(data) {
        return db().then(session => {
            return session.class.get('GENRE').then(Genre => {
                return Genre.create({...data})
            }).catch(err => { 
                process.exit(1)
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