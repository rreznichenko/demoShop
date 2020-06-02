const authorsModel = require('../models/authors');

const Authors = {
    getAuthors(req, res, pathArgs) {
        if(pathArgs) {
            authorsModel.getAuthor(`#${pathArgs}`).then(author => {
                res.send(author);
            });
            return;
        }
        authorsModel.getAllAuthors().then(authorsClass => {
            authorsClass.list().then(authors => {
                res.send(authors);
            });
        });
    },
    postAuthors(req, res) {
        const data = req.body;
        authorsModel.createAuthor(data);
        res.send('post')
    },
    putAuthors(req, res) {
        const params = req.body;
        const { id } = params;
        authorsModel.updateAuthor(id, params);
        res.send('put')
    },
    deleteAuthors(req, res, pathArgs) {
        if(pathArgs) {
            authorsModel.deleteAuthor(`#${pathArgs}`)
            res.send('succes delete')
            return;
        }
        res.send('delete')
    }
}
module.exports = Authors;