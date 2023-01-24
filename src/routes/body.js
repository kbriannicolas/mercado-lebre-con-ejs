const express= require('express');
const router= express.Router();

const {index,login,register}=require('../controllers/body')


router.get('/',index);
router.get('/login',login)
router.get('/register',register)

module.exports=router;