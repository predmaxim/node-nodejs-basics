import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      this.push(`${chunk.reverse()}\n`);
      callback();
    },
  });

  stdin.pipe(reverseText).pipe(stdout);
};

await transform();