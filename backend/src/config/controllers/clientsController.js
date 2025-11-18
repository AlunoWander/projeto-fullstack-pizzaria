const db = require('../data');
const fetch = (...args) => import('node-fetch').then(({default: f}) => f(...args));


exports.list = (req,res)=>{
res.json(db.clients);
}


exports.get = (req,res)=>{
const id = Number(req.params.id);
const c = db.clients.find(x=>x.id===id);
if(!c) return res.status(404).json({message:'Cliente não encontrado'});
res.json(c);
}


exports.create = (req,res)=>{
const {name,phone,cep,street,neighborhood,city,state,number} = req.body;
if(!name||!phone) return res.status(400).json({message:'Nome e telefone obrigatórios'});
const id = db.clients.length? Math.max(...db.clients.map(x=>x.id))+1 : 1;
const client = { id, name, phone, address:{cep, street, neighborhood, city, state, number} };
db.clients.push(client);
res.status(201).json(client);
}


exports.update = (req,res)=>{
const id = Number(req.params.id);
const idx = db.clients.findIndex(x=>x.id===id);
if(idx<0) return res.status(404).json({message:'Cliente não encontrado'});
const updated = { ...db.clients[idx], ...req.body };
db.clients[idx] = updated;
res.json(updated);
}


exports.remove = (req,res)=>{
const id = Number(req.params.id);
const idx = db.clients.findIndex(x=>x.id===id);
if(idx<0) return res.status(404).json({message:'Cliente não encontrado'});
}