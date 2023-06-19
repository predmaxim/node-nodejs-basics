import { createReadStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __dirname = dirname(fileURLToPath(import.meta.url));

const read = async () => {
  const filePath = join(__dirname, 'files/fileToRead.txt');
  createReadStream(filePath).pipe(stdout);
};

await read();