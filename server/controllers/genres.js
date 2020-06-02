const genresModel = require('../models/genres');

const Genres = {
    getGenres(req, res, pathArgs) {
        if(pathArgs) {
            genresModel.getGenre(`#${pathArgs}`).then(genre => {
                res.send(genre);
            });
            return;
        }
        genresModel.getAllGenres().then(genresClass => {
            genresClass.list().then(genres => {
                res.send(genres);
            });
        });
    },
    postGenres(req, res) {
        const data = req.body;
        genresModel.createGenre(data);
        res.send('post')
    },
    putGenres(req, res) {
        const params = req.body;
        const { id } = params;
        genresModel.updateGenre(id, params);
        res.send('put')
    },
    deleteGenres(req, res, pathArgs) {
        if(pathArgs) {
            genresModel.deleteGenre(`#${pathArgs}`)
            res.send('succes delete')
            return;
        }
        res.send('delete')
    }
}
module.exports = Genres;