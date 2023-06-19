import { createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdin } from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const write = async () => {
  const filePath = join(__dirname, 'files/fileToWrite.txt');
  stdin.pipe(createWriteStream(filePath));
};

await write();