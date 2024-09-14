const mongoose = require('mongoose')


const dataSchema = new mongoose.Schema({
    name: String,
    email: String,
    address: String,
    contact: Number,
    gender: {
        type: String,
        required: true
    }

})


const dataModel = mongoose.model("data", dataSchema)

module.exports = dataModel