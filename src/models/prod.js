const mongoose = require('mongoose')

const prodSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: false,
        trim: true
    },
    code: {
        type: String,
        require: true,
        trim: true
    },
    price: {
        type: String,
        require: true,
        trim: true
    },
    image: {
        type: String,
        require: true,
        trim: true
    },
    // status: {
    //     type: String,
    //     require: true,
    //     trim: true,
    //     enum: ['Vivo', 'Muerto', 'Unknow']
    // },
    // description: {
    //     type: String,
    //     require: true,
    //     trim: true,
    //     enum: ['Humano', 'Alien', 'Robot'],
    // },

    // gender: {
    //     type: String,
    //     require: true,
    //     enum: ['Male', 'Female', 'Unknow'],
    // },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
}, { timestamps: true })


module.exports = mongoose.model('Prod', prodSchema)