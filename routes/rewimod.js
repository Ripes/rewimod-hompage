var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

router.get('/', function (req, res) {
    fs.readFile(path.join(__dirname, '/../public/static/index.html'), 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        res.send(text);
    });
});

router.get('/features', function (req, res) {
    fs.readFile(path.join(__dirname, '/../public/static/features.html'), 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        res.send(text);
    });
});

router.get('/download', function (req, res) {
    fs.readFile(path.join(__dirname, '/../public/static/download.html'), 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        res.send(text);
    });
});

router.get('/download/:version', function (req, res) {
    var version = req.params.version;
    // TODO: Insert Code for RSS Reader from Jenkins @Sofaklient
});

router.get('/join', function (req, res) {
    fs.readFile(path.join(__dirname, '/../public/static/join.html'), 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        res.send(text);
    });
});

router.get('/legal', function (req, res) {
    fs.readFile(path.join(__dirname, '/../public/static/legal.html'), 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        res.send(text);
    });
});
module.exports = router;