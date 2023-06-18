import { unzip } from 'zlib';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { readFile } from 'fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
  const filePath = join(__dirname, 'files/fileToCompress.txt.gz');
  const input = await readFile(filePath);
  const buffer = Buffer.from(input, 'base64');
  const do_unzip = promisify(unzip);

  do_unzip(buffer)
    .then((buf) => console.log(buf.toString('utf8')))
    .catch((err) => {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    });
};

await decompress();