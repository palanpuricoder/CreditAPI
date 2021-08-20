const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    company_name : {
        type : String,
    },
    mobile : {
        type : String,
    },
    company_mobile : {
        type : String,
    },
    email : {
        type : String,
    },
    company_email : {
        type : String,
    },
    status : {
        type : Number ,  // 0 and 1 means user active and inactive
        default : 0
    },
    address : {
        type : String,
    },
    city:{
        type: String,
    },
    state : {
        type : String,
    },
    country : {
        type : String
    },
    postal : {
        type : String
    },
    createdAt : {
        type : Date , 
        default : Date.now
    }
});

module.exports = mongoose.model("User", userSchema);