#!/usr/bin/env node
'use strict';

var parse = require('./parse');
var url = process.argv[2];

parse(url)
.then(console.log.bind(console));
