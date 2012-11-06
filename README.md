ydl
===

youtube download library, and command line tool.

###Requirement

 * Node.js > 0.6.x
 * NPM
 * ffmpeg

###Install ydl as commandline

Command line mode

        npm install -g ydl

###ydl cli usage

Use ydl cli to fetch youtube video files, please respect the COPYRIGHT first.
default ydl will auto convert the video to mp3 files.

        ydl 'http://www.youtube.com/watch?v=9bZkp7q19f0'

Save the origin video,

        ydl --url 'http://www.youtube.com/watch?v=9bZkp7q19f0'

that will save video file to mp4 / flv file type.

###Install ydl as library

        npm install ydl

### ydl library usage

Can check the example folder,
<pre>

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

</pre>

###Install ffmpeg

Mac OS, use [homebrew](http://mxcl.github.com/homebrew/)

        brew install ffmpeg

###NOTICE

Respect the CopyRight, Have to follow CopyRight of YouTube video lisence.

###License
(The MIT License)
