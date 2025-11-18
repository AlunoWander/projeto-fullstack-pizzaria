const db = require('../data');


exports.list = (req,res)=> res.json(db.products);


exports.create = (req,res)=>{
const {name,description,price,category} = req.body;
if(!name||!price) return res.status(400).json({message:'Dados incompletos'});
const id = db.products.length? Math.max(...db.products.map(p=>p.id))+1 : 1;
const product = {id,name,description,price:Number(price),category};
db.products.push(product);
res.status(201).json(product);
}


exports.update = (req,res)=>{
const id = Number(req.params.id);
const idx = db.products.findIndex(p=>p.id===id);
if(idx<0) return res.status(404).json({message:'Produto não encontrado'});
db.products[idx] = {...db.products[idx], ...req.body };
res.json(db.products[idx]);
}


exports.remove = (req,res)=>{
const id = Number(req.params.id);
const idx = db.products.findIndex(p=>p.id===id);
if(idx<0) return res.status(404).json({message:'Produto não encontrado'});
db.products.splice(idx,1);
res.json({message:'Produto removido'});
}