import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        select : false,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    },
    profilePic : {
        type : String,
    },
    username:{
        type : String,
        required : true,
        unique : true
    }
})


export const User = mongoose.model("User", schema)