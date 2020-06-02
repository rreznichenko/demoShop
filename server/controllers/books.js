const booksModel = require('../models/books');

const Books = {
    getBooks(req, res, pathArgs) {
        if(pathArgs) {
            booksModel.getBook(`#${pathArgs}`).then(book => {
                res.send(book);
            });
            return;
        }
        booksModel.getAllBooks().then(booksClass => {
            booksClass.list().then(books => {
                res.send(books);
            });
        });
    },
    postBooks(req, res) {
        const data = req.body;
        booksModel.createBook(data);
        res.send('post')
    },
    putBooks(req, res) {
        const params = req.body;
        const { id } = params;
        booksModel.updateBook(id, params);
        res.send('put')
    },
    deleteBooks(req, res, pathArgs) {
        if(pathArgs) {
            booksModel.deleteBook(`#${pathArgs}`)
            res.send('succes delete')
            return;
        }
        res.send('delete')
    }
}
module.exports = Books;