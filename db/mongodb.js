var mongoose = require('mongoose');
const Goon = require('../models/goon')
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });


async function getGoons(filter = null) {
    return Goon.find(filter);
}


async function getGoonById(id) {
    return Goon.findById(id);
}

async function createGoon(goon) {
    const newGoon = new Goon(goon)
    return newGoon.save();
}

async function updateGoon(id, data) {
    return Goon.findByIdAndUpdate(id, data, { new: true });
}

async function deleteGoon(id) {
    return Goon.findByIdAndDelete(id);
}

module.exports = { deleteGoon, updateGoon, createGoon, getGoons, getGoonById }