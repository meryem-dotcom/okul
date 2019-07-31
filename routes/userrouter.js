const express = require('express');
const router = express.Router();

router.get('/login',(req,res)=>{
    res.send('route ile login page');
});
router.get('/register',(req,res)=>{
    res.send('route ile register page');
});

module.exports = router;
