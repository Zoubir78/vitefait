
const express = require('express');
const router = express.Router();

    router.get('/',function(req,res,next) {
        res.render('index',{title:'Bienvenue, '});
    });
    router.get('/debarras',function(req,res,next) {
        res.render('debarras',{title:'Débarras et petits transports'});
    });
    router.get('/petit-travaux',function(req,res,next) {
        res.render('petit-travaux',{title:'Déménagements ou débarras avec petits travaux'});
    });
    router.get('/architecture-int',function(req,res,next) {
        res.render('architecture-int',{title:'Architecture intérieure'});
    });
    router.get('/studio-relooking',function(req,res,next) {
        res.render('studio-relooking',{title:"Projet de transformation d'un studio"});
    });
    router.get('/contact',function(req,res,next) {
        res.render('contact',{title:'Contacter nous'});
    });

module.exports = router;