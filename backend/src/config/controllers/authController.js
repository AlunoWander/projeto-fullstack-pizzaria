const jwt = require('jsonwebtoken');
const db = require('../data');


exports.register = (req,res)=>{
const {name,email,password} = req.body;
if(!name||!email||!password) return res.status(400).json({message:'Dados incompletos'});
const exists = db.users.find(u=>u.email===email);
if(exists) return res.status(409).json({message:'Usuário já existe'});
const id = db.users.length? Math.max(...db.users.map(u=>u.id))+1 : 1;
const user = {id,name,email,password};
db.users.push(user);
res.status(201).json({message:'Usuário criado', user:{id,name,email}});
}


exports.login = (req,res)=>{
const {email,password} = req.body;
if(!email||!password) return res.status(400).json({message:'Dados incompletos'});
const user = db.users.find(u=>u.email===email && u.password===password);
if(!user) return res.status(401).json({message:'Credenciais inválidas'});
const token = jwt.sign({id:user.id,name:user.name,email:user.email}, process.env.JWT_SECRET||'changeme', {expiresIn:'8h'});
res.json({token, user:{id:user.id,name:user.name,email:user.email}});
}