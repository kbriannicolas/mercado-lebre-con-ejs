const products = require('../database/productos');
const path = require('path');

const index=(req,res)=>{
    res.render(path.join(__dirname,'../views/home.ejs'),{'productos':products})
}
const login=(req,res)=>{
    res.render(path.join(__dirname,'../views/login'))
}
const register=(req,res)=>{
    res.render(path.join(__dirname,'../views/register.ejs'))
}

module.exports={
    index,
    login,
    register
}