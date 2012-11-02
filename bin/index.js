#!/usr/bin/env node

var program = require('commander');
var version = '0.0.1';

program
.version(version)
.option('-u, --url <url>', 'Add YouTube url link')
.option('-h, --help', 'Help commnand line')
.parse(process.argv);


program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('ydl url', 'Add YouTube url link');
  console.log('');
  console.log('version: ', version);
});
//var ydl = require('../index');
console.log(program.url);
