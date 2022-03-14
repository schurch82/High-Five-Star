const mongoose = require('mongoose')

const providerSchema = mongoose.Schema({
    username: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    businessname: {
        type:String,
        required: true,
    },
    businesstype:{
        type: String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    rating: {
        type:Number,
        required: false
    }

})


module.exports = mongoose.model('Provider', providerSchema)