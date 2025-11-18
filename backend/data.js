// Banco em memória simples - [Equipe]
module.exports = {
users: [
{ id: 1, name: 'Admin', email: 'admin@pizzaria.com', password: 'admin123' }
],
clients: [],
products: [
{ id: 1, name: 'Margherita', description: 'Tomate, mussarela, manjericão', price: 28.0, category: 'Pizza' },
{ id: 2, name: 'Coca-Cola 350ml', description: 'Refrigerante', price: 6.0, category: 'Bebida' }
],
orders: []
};