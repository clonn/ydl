/**
 * ydl Example,
 */
var ydl = require('../index');
var url = '[youtube url]';
var filetype = 'mp3';

// youtube download error happen
ydl.error(function () {
  console.log('[STATUS] FAIL Fetch URL');
  // do someting when error
});

// youtube download success happen
ydl.exec(url, filetype, function (filename) {
  console.log('[STATUS] Success fetch filename : ' + filename);
  // do someting when success
});
