import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const file = 'script.js';
  const options = {
    cwd: './src/cp/files',
  };
  const child = fork(file, args, { ...options });
  child.on('message', (msg) => console.log(`Parent message: ${msg}`));
};

spawnChildProcess(['arg1', 'arg2', 'arg3', 'arg4', 'arg5']);
