const mongoose = require('mongoose');
const Kitten = mongoose.model('kitten');
const kittens = require('./../controllers/kittens.js')

module.exports = function (app) {
    app.get('/edit/:id', (req, res) => {
        kittens.editView(req, res);
    })

    app.post('/update/:id', (req, res) => {
        kittens.edit(req, res);
    })

    app.get('/', (req, res) => {

        kittens.index(req, res);

    })
    app.post('/delete/:id', (req, res) => {
        kittens.delete(req, res);
    })

    app.get('/new', (req, res) => {
        kittens.viewOne(req, res);
    })

    app.post('/create', (req, res) => {
        kittens.create(req, res)
    })
}