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

  if (cmd === 'curl') {
    const siteName = data.toString().split(' ')[1].trim();
    curl(siteName);
  }
});

//cat thefilename

// registered a "listener" so node won't kill process automatically -> kill w cmd+c

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
