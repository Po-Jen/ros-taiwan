'use strict';

var request = require('request');
var cheerio = require('cheerio');
var Promise = require('bluebird');
var toMarkdown = require('to-markdown');


module.exports = function(url) {
  return getBody(url)
    .then(function(body) {
      var $ = cheerio.load(body)
      return toMarkdown($('#page').html());
    })
}


function getBody(url) {
  return new Promise(function(resolve, reject) {
    request(url, function(err, res, body) {
      if (!err && res.statusCode == 200) {
        resolve(body);
      } else {
        reject(err || new Error('not status 200'));
      }
    })
  })
}
