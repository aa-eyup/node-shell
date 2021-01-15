const fs = require('fs');

module.exports = function (fileName) {
  fs.readFile(fileName, 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files);
    }
    // fs.readdir('./', 'utf8', (err, files) => {
    //   if (err) {
    //     throw err;
    //   } else {
    //     process.stdout.write(files.join('\n'));
    process.stdout.write('\nprompt > ');
  });
};
