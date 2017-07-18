const cheerio = require('cheerio');
const _ = require('lodash');
const request = require('request');

module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index', {});
    });
}