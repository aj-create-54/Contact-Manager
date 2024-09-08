const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    username:{
        type:String,
        required: [true, "Please add the user "],
    },

    email:{
        type:String,
        required: [true, "Please add the user email address"],
    },

    password:{
        type:String,
        required: [true, "Please add the user password"],
    },

},{
    timestamp : true,
})


module.exports = mongoose.model("User", userSchema)