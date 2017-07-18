const cheerio = require('cheerio');
const _ = require('lodash');
const request = require('request');

module.exports = function(app) {
    app.post('/', function(req, res) {
        request('https://www.reddit.com/r/worldnews/', function(error, response, html) {
            var $ = cheerio.load(html);
            var articles = [];
            var authors = [];

            $('p.tagline').each(function(i, element) {
                authors.push({
                    author: $(element).children('a').text(),
                    time: $(element).children('time').text(),
                });
            });

            $('a.title').each(function(i, element) {
                var title = $(element).text();
                var link  = $(element).attr("href");

                articles.push({
                    title: title,
                    link: link
                });
            });
            var headlines = _.merge(articles, authors);   
            //console.log(headlines);
            res.send({headlines}); 
        });
    });    
}