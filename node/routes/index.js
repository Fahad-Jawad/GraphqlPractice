const express = require('express');
const router = express.Router();
const jwt=require("jsonwebtoken")
const  {login,verify}=require("../Controllers/AuthController")
const  {getProducts}=require("../Controllers/ProductsController");
const { isLoggedin } = require('../middleware/AuthMiddleware');

router.post("/login",login)

router.post("/authenticate",verify)
router.get("/getdata",isLoggedin,getProducts)

module.exports=router;