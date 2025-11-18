// Modelo Cliente - [João Silva]
const mongoose = require('mongoose');


const ClientSchema = new mongoose.Schema({
name: { type: String, required: true },
phone: { type: String },
cep: { type: String },
address: { type: String },
state: { type: String },
city: { type: String }
}, { timestamps: true });


module.exports = mongoose.model('Client', ClientSchema);