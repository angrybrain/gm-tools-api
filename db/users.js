var mongoose = require('mongoose');
const User = require('../models/user')
mongoose.connect(process.env.DB_HOST, { useUnifiedTopology: true, useNewUrlParser: true });

async function getUserByUsername(username) {
    return User.findOne({ username: username })
}

async function getUserById(id) {
    return User.findById(id);
}

async function createUser(user) {
    const newUser = new User(user)
    return newUser.save();
}

async function updateUser(id, data) {
    return User.findByIdAndUpdate(id, data, { new: true });
}

async function deleteUser(id) {
    return User.findByIdAndDelete(id);
}

module.exports = { deleteUser, updateUser, createUser, getUserById, getUserByUsername }