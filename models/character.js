const mongoose = require('mongoose')

const characterSchema = mongoose.Schema({
    name: { type: String, default: 'J.Doe' },
    active: { type: Boolean, default: false },
    stress: { type: Number, default: 2 },
    resolve: { type: Number, default: 0 },
    effects: { type: String, default: "" },
    items: { type: String, default: "Empty" },
    notes: { type: String, default: "..." },
    advantages: {
        Stress: { type: Boolean, default: false },
        STR: { type: Boolean, default: false },
        SPD: { type: Boolean, default: false },
        INT: { type: Boolean, default: false },
        CMB: { type: Boolean, default: false },
        Sanity: { type: Boolean, default: false },
        Fear: { type: Boolean, default: false },
        Body: { type: Boolean, default: false },
        Armor: { type: Boolean, default: false },
    },
    disadvantages: {
        Stress: { type: Boolean, default: false },
        STR: { type: Boolean, default: false },
        SPD: { type: Boolean, default: false },
        INT: { type: Boolean, default: false },
        CMB: { type: Boolean, default: false },
        Sanity: { type: Boolean, default: false },
        Fear: { type: Boolean, default: false },
        Body: { type: Boolean, default: false },
        Armor: { type: Boolean, default: false },
    },
    stats: {
        STR: { type: Number, default: 0 },
        SPD: { type: Number, default: 0 },
        INT: { type: Number, default: 0 },
        CMB: { type: Number, default: 0 },
    },
    saves: {
        Sanity: { type: Number, default: 0 },
        Fear: { type: Number, default: 0 },
        Body: { type: Number, default: 0 },
        Armor: { type: Number, default: 0 },
    },
    health: {
        Head: { type: Number, default: 0 },
        Torso: { type: Number, default: 0 },
        ArmR: { type: Number, default: 0 },
        ArmL: { type: Number, default: 0 },
        LegR: { type: Number, default: 0 },
        LegL: { type: Number, default: 0 },
    },
    armor: {
        Head: { type: Number, default: 0 },
        Torso: { type: Number, default: 0 },
        ArmR: { type: Number, default: 0 },
        ArmL: { type: Number, default: 0 },
        LegR: { type: Number, default: 0 },
        LegL: { type: Number, default: 0 },
    },
})

module.exports = mongoose.model('Character', characterSchema)