const db = require('../services/dbConnection');

const users = {
    getAllUsers() {
        return db().then(session => {
            return session.class.get('USERS').catch(err => {});
        })
    },
    getUser(id) {
        return db().then(session => {
            return session.record.get(id).catch(err => {});
        });
    },
    createUser(data) {
        return db().then(session => {
            session.class.get('USERS').then(User => {
                User.create({...data});
            });
        })
    },
    updateUser(id, data) {
        return db().then(session => {
            this.getUser(id).then(User => {
                const updatedUser = {
                    ...User,
                    ...data
                }
                session.record.update(updatedUser);
            })
        })
    },
    deleteUser(id) {
        return db().then(session => {
            session.record.delete(id)
        })
    }
}

module.exports = users;