const Index = {
    getIndex(req, res) {
        res.send('get');
    },
    postIndex(req, res) {
        res.send('post')
    },
    putIndex(req, res) {
        res.send('put')
    },
    deleteIndex(req, res) {
        res.send('delete')
    }
}
module.exports =  Index;