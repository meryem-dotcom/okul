const express = require('express');
const userController = require('../controllers/usercontroller');
const router = express.Router();

router.get('/login',userController.loginGet);
router.post('/login',userController.loginPost);

router.get('/register',userController.registerGet);
router.post('/register',userController.registerPost);

module.exports = router;
