import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const calculateHash = async () => {
  try {
    const file = await readFile(join(__dirname, 'files/fileToCalculateHashFor.txt'));
    const hash = createHash('sha256').update(file).digest("hex");
    console.log(`File hash is: ${hash}`);
  } catch (error) {
    console.log('🚀 ~ calculateHash ~ error:', error);
  }
};

await calculateHash();