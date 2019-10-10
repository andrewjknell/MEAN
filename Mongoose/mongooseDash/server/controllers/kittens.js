const mongoose = require('mongoose');
const Kitten = mongoose.model('kitten');

module.exports = {
    index: function (req, res) {        

        Kitten.find()
            .then(data => res.render('index', { kittens: data }))
            .catch(err => res.json(err));
    },

    editView: function (req, res) {
        const { id } = req.params;
        console.log(id);
        Kitten.findById(id)
            //console.log('help')
            .then(allKittenData => res.render('edit', { kittens: allKittenData }))
            .catch(err => res.json(err));
    },

    edit: function (req, res) {
        const { id } = req.params;
        Kitten.updateOne({ _id: id }, {
            name: req.body.name,
            food: req.body.food
        })
            .then(result => {
                res.redirect('/')
            })
            .catch(err => {
                console.log(err);
                res.redirect('/edit' + id)
            })
    },

    delete: function (req, res) {
        const { id } = req.params;
        Kitten.remove({ _id: id })
            .then(deleteUser => {
                res.redirect('/')
            })
            .catch(err => {
                res.redirect('/')
            })
    },

    viewOne: function (req, res) {
        res.render('new');
    },

    create: function (req, res) {
        const kitten = new Kitten();
        kitten.name = req.body.name;
        kitten.food = req.body.food;
        kitten.save()
            .then(newKittenData => {
                console.log("kitten made:", newKittenData);
                res.redirect('/')
            })
            .catch(err => {
                console.log(err);
                res.redirect('/new')
            })

    },
}