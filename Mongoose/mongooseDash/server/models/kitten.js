const mongoose = require('mongoose');

const KittenSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true, minlength: 2 
    },
    food: {
        type: String,
        required: true, minlength: 2
     },
})
var Kitten = mongoose.model('kitten', KittenSchema);
