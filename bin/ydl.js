#!/usr/bin/env node

var program = require('commander');
var ydl = require('../index');
var version = '0.0.1';

function ydlErrorHandler (url) {
    // youtube download error happen
    ydl.error(function () {
      console.log('[STATUS] FAIL Fetch URL : ' + env);
    });
}

program
.version(version)
.option('--url <url>', 'Give me the YouTube URL, Fetch YouTube video')
.option('--mp3 <url>', 'Give me the YouTube URL, Convert Video to MP3 file')

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    ydl http://www.youtube.com/watch?v=9bZkp7q19f0', ' Fetching the GANGNAM Style Music Video');
  console.log('');
  console.log('  version: ', version);
});

program
.command('*')
.description('Add YouTube URL, default will convert video to mp3')
.action(function(env){
    console.log('[STATUS] Fetch URL : ' + env);

    // youtube download error happen
    ydlErrorHandler(env);

    // youtube download execute
    ydl.exec(env, 'mp3', function () {
      console.log('[STATUS] Success fetch URL : ' + env);
      console.log('[STATUS] Convert file to mp3 type');
    });
});

program.parse(process.argv);

if (program.mp3) {
  console.log('Start fetching URL...');
  console.log('[MODE] MP3 mode');
  var env = program.url;

  // youtube download error happen
  ydlErrorHandler(env);

  // youtube download execute
  ydl.exec(env, 'mp3', function () {
    console.log('[STATUS] Success fetch URL : ' + env);
    console.log('[STATUS] Convert file to mp3 type');
  });
}

// normal fetch file version
if (program.url) {
  console.log('Start fetching URL...');
  console.log('[MODE] Normal mode');
  var env = program.url;

  // youtube download error happen
  ydlErrorHandler(env);

  // youtube download execute
  ydl.exec(env, 'flv', function () {
    console.log('[STATUS] Success fetch URL : ' + env);
    console.log('[STATUS] Finish');
  });
}
