const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Please add a name'],
    },
    email : {
        type: String,
        required: [true,"Please add email"],
    },
    password : {
        type: String,
        required: [true,"Please add password"],
    } 
},
{
    timeStamps: true,
})

module.exports = mongoose.model('User',userSchema);

