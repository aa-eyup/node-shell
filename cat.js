//cat thefilename

const fs = require('fs');

module.exports = catFunc;

function catFunc(fileName) {
  fs.readFile(fileName, 'utf8', (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(files);
    }

    process.stdout.write('\nprompt > ');
  });
}
