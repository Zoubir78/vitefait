'use strict';

const express = require('express');
const app = express();
const path = require('path');

const site = require('./routes/site');

const http = require('http').Server(app);
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Gestion des fichiers statiques
app.use('/css', express.static(__dirname + '/sources/css'));
app.use('/js', express.static(__dirname + '/sources/js'));
app.use('/images', express.static(__dirname + '/sources/images'));

//View engine for pug files
app.set('view engine', 'pug');
app.set('views', './public/views');

app.use('/',site);
app.use(express.static(path.join(__dirname, './public/html/')));

//le fichier 404
app.get('*',function (req, res, next) {
	return res.status(404).sendFile('404.html', {root:'./public/html/err/'});
});

app.listen(8000,function() {   
    console.log('Serveur http disponible sur le port 8000');
});