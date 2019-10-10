const mongoose = require('mongoose');
const Task = mongoose.model('Task');

module.exports = {
    index: function (req, res) {
        Task.find()
            .then(task => res.json(task))
            .catch(err => res.json(err));
    },
    details: function (req, res) {
        const { id } = req.params;
        Task.findById({ _id: id })
            .then(idFound => res.json(idFound))
            .catch(err => res.json(err));
    },
    addTask: function (req, res) {
        console.log("here")
        const task = new Task(req.body);
        task.save()
            .then(taskData => res.json(taskData))
            .catch(err => res.json(err));
    },
    editTask: function (req, res) {
        const { id } = req.params;
        Task.findByIdAndUpdate({ _id: id }, {
            title: req.body.title,
            desc: req.body.desc
        },{new:true})
            .then(results => res.json(results))
            .catch(err => res.json(err));
    },
    deleteTask: function (req, res) {
        const { id } = req.params;
        Task.findByIdAndDelete({ _id: id })
            .then(deletedName => res.json(deletedName))
            .catch(err => res.json(err));
    },
}