var mongoose = require('mongoose');
const Character = require('../models/character')
mongoose.connect(process.env.DB_HOST, { useUnifiedTopology: true, useNewUrlParser: true });


async function getCharacters(filter = null) {
    return Character.find(filter);
}


async function getCharacterById(id) {
    return Character.findById(id);
}

async function createCharacter(body) {
    const newCharacter = new Character(body);
    return newCharacter.save();
}

async function updateCharacter(id, data) {
    return Character.findByIdAndUpdate(id, data, { new: true });
}

async function deleteCharacter(id) {
    return Character.findByIdAndDelete(id);
}

module.exports = { deleteCharacter, updateCharacter, createCharacter, getCharacters, getCharacterById }