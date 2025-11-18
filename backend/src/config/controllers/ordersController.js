const db = require('../data');


function calcTotal(items){
let total = 0;
for(const it of items){
const p = db.products.find(x=>x.id===Number(it.productId));
if(p) total += p.price * Number(it.qty);
}
return total;
}


exports.list = (req,res)=> res.json(db.orders);


exports.get = (req,res)=>{
const id = Number(req.params.id);
const o = db.orders.find(x=>x.id===id);
if(!o) return res.status(404).json({message:'Pedido não encontrado'});
res.json(o);
}


exports.create = (req,res)=>{
const {clientId, items} = req.body;
if(!clientId || !Array.isArray(items) || items.length===0) return res.status(400).json({message:'Dados do pedido inválidos'});
const id = db.orders.length? Math.max(...db.orders.map(x=>x.id))+1 : 1;
const total = calcTotal(items);
const order = { id, clientId, items, status:'Recebido', total, createdAt: new Date().toISOString() };
db.orders.push(order);
res.status(201).json(order);
}


exports.update = (req,res)=>{
const id = Number(req.params.id);
const idx = db.orders.findIndex(x=>x.id===id);
if(idx<0) return res.status(404).json({message:'Pedido não encontrado'});
db.orders[idx] = { ...db.orders[idx], ...req.body };
// recalc total if items changed
}