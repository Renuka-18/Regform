const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    gender: String,
    phonenumber: String,
    regdate: String,
    status: String
});

const UsersModel = mongoose.model('User', UserSchema);

module.exports = UsersModel;
