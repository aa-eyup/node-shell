module.exports = process.stdin.on('data', (data) => {
  // process.stdout.write(data.toString()); // => pwd

  const cmd = data.toString().trim(); // data = user's input

  // process.stdout.write('You typed: ' + cmd);

  if (cmd === 'pwd') {
    process.stdout.write(process.env.PWD);
    process.stdout.write('\nprompt > ');
  }
});
