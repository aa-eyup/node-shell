// registered a "listener" so node won't kill process automatically -> kill w cmd+c

const pwdLogic = require('./pwd');
const fsLogic = require('./fs');
const cat = require('./cat');
const curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().split(' ')[0];

  if (cmd === 'cat') {
    const fileName = `${process.env.PWD}/${data
      .toString()
      .split(' ')[1]
      .trim()}`;
    cat(fileName);
  }

  // curl logic places below into separate stdin
  // if (cmd === 'curl') {
  //   const siteName = data.toString().split(' ')[1].trim();
  //   curl(siteName);
  // }
});

process.stdin.on('data', (data) => {
  // curl https://google.com => second element (idx = 1) will be the url
  const cmd = data.toString().split(' ');

  if (cmd[0] === 'curl') {
    const siteName = cmd[1].trim();
    curl(siteName);
    // runtime (?) does not comeback back to this EC
    // placed new line prompt within curl.js
  }
});

/*
process.env
{
  TERM: 'xterm-256color',
  SHELL: '/usr/local/bin/bash',
  USER: 'maciej',
  PATH: '~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin',
  PWD: '/Users/maciej',
  EDITOR: 'vim',
  SHLVL: '1',
  HOME: '/Users/maciej',
  LOGNAME: 'maciej',
  _: '/usr/local/bin/node'
}
*/
