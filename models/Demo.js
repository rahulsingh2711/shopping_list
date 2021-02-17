const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Demo = new Schema({
    name:{
        type: String,
        required: true
    },

    age:{
        type:Number,
        required: true
    },

    mob:{
        type: Number,
        required: true
    }

});

module.exports = Data = mongoose.model('demo',Demo);
