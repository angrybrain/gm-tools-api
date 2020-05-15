const mongoose = require('mongoose')

const goonSchema = mongoose.Schema({
    name: String,
    active: Boolean,
    stress: Number,
    resolve: Number,
    effects: [],
    advantages: {
        Stress: Boolean,
        STR: Boolean,
        SPD: Boolean,
        INT: Boolean,
        CMB: Boolean,
        Sanity: Boolean,
        Fear: Boolean,
        Body: Boolean,
        Armor: Boolean,
    },
    disadvantages: {
        Stress: Boolean,
        STR: Boolean,
        SPD: Boolean,
        INT: Boolean,
        CMB: Boolean,
        Sanity: Boolean,
        Fear: Boolean,
        Body: Boolean,
        Armor: Boolean,
    },
    stats: {
        STR: Number,
        SPD: Number,
        INT: Number,
        CMB: Number,
    },
    saves: {
        Sanity: Number,
        Fear: Number,
        Body: Number,
        Armor: Number,
    },
    health: {
        Head: Number,
        Torso: Number,
        ArmR: Number,
        ArmL: Number,
        LegR: Number,
        LegL: Number,
    },
    armor: {
        Head: Number,
        Torso: Number,
        ArmR: Number,
        ArmL: Number,
        LegR: Number,
        LegL: Number,
    },
})

module.exports = mongoose.model('Goon', goonSchema)