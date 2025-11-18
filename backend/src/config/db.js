// Configura conexão com MongoDB - [SeuNome]
const mongoose = require('mongoose');


const connectDB = async (uri) => {
try {
await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log('MongoDB conectado');
} catch (err) {
console.error('Erro ao conectar MongoDB:', err.message);
process.exit(1);
}
};


module.exports = connectDB;