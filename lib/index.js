var youtubedl = require('youtube-dl');
var ffmpeg = require('fluent-ffmpeg');
var exec = require('child_process').exec;
var errorHandler;

/**
 * Error handle
 */
module.exports.error = function (errorCb) {

  // catches any errors
  errorHandler = errorCb;
};

/**
 * execute function
 */
module.exports.exec = function (url, type, cb) {

  var dl = youtubedl.download(url,
    '.',
    // optional arguments passed to youtube-dl
    ['--max-quality=18']);

  dl.on('error', errorHandler);

  // called when youtube-dl finishes
  dl.on('end', function(data) {

    try {
      var fileType = 'mp3',
          targetFileName,
          proc;

      if (type !== fileType) {
        cb(null, data.filename);
        return;
      }

      targetFileName = data.filename.replace(/[.].+/g, '.' + fileType);


      proc = new ffmpeg({ source: './' + data.filename, priority: 10 })
        .toFormat('mp3')
        .saveToFile('./' + targetFileName, function(retcode, error) {
          // delete the origin files
          exec('rm ./' + data.filename);
        });

      cb(null, targetFileName);

    }catch(e) {
      cb(data.filename);
      errorHandler(data.filename);
    }

  });
};
