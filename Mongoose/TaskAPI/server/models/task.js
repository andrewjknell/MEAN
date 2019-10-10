const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 1 },
    desc: { type: String },
    completed: { type: Boolean, default: false }

}, { timestamps: true })

const Task = mongoose.model('Task', TaskSchema);