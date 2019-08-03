const registerValidation = require('../validation/registervalidation');
const bcryptjs = require('bcryptjs');

module.exports.loginGet = (req,res)=>{
    res.render('pages/login');
}
module.exports.loginPost = (req,res)=>{
    res.render('pages/login');
}
module.exports.registerGet = (req,res)=>{
    res.render('pages/register');
}
module.exports.registerPost = (req,res)=>{
    let username = req.body.username;
    let password = req.body.password;

    let errordizisi = registerValidation(username,password);
    pageMessage = {
        username : username,
        password : password,
        errors : errordizisi
    }
    if(errordizisi.length > 0){
        return res.render('pages/register',pageMessage);
    }

    res.render('pages/register',pageMessage);
}
