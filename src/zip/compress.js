import { createGzip } from 'zlib';
import { pipeline } from 'stream';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import { promisify } from 'util';

const __dirname = dirname(fileURLToPath(import.meta.url));

const compress = async () => {
  const input = join(__dirname, 'files/fileToCompress.txt');
  const output = `${input}.gz`;
  const pipe = promisify(pipeline);
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipe(source, gzip, destination);
};

await compress();