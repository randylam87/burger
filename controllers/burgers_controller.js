const express = require('express');
const router = express.Router();
const burgers = require('../models/burger.js');

router.get('/',(req,res)=>{
    burgers.all((data)=>{
        let hbsObject = {
            burgers: data
        };
        res.render('index',hbsObject);
    });
});

module.exports = router;