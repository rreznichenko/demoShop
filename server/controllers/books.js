const booksModel = require('../models/books');

const Books = {
    getBooks(req, res) {
        booksModel.getAllBooks().then(booksClass => {
            booksClass.list().then(books => {
                res.send(books);
            })
        });
    },
    postBooks(req, res) {
        res.send('post')
    },
    putBooks(req, res) {
        const params = req.body;
        const { id } = params;
        booksModel.updateBook(id, params);
        res.send('put')
    },
    deleteBooks(req, res) {
        res.send('delete')
    }
}
module.exports = Books;