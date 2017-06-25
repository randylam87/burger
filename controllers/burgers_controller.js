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

router.post('/',(req,res)=>{
    let burger = req.body.burger;
    burgers.add(burger,(data)=>{
        let hbsObject = {
            burgers: data
        };
        res.redirect('/');
    })
})

module.exports = router;