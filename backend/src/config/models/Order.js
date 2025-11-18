const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
quantity: { type: Number, default: 1 },
price: { type: Number, required: true }
});


const OrderSchema = new mongoose.Schema({
client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
items: [ItemSchema],
status: { type: String, enum: ['recebido','em_preparo','a_caminho','entregue','cancelado'], default: 'recebido' },
total: { type: Number, required: true },
date: { type: Date, default: Date.now }
}, { timestamps: true });


module.exports = mongoose.model('Order', OrderSchema);