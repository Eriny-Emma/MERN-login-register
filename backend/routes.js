const express = require('express');
const router = express.Router();
//import controller

const {login ,register} = require('./controllers/export');


router.post('/login',login );
router.post('/register',register);

module.exports = router;