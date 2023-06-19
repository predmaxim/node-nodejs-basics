import os from 'os';
import { Worker } from 'worker_threads';


const makeWorker = (numOfWorkers) => {
  return [...Array(numOfWorkers)].map((_, i) => {
    return new Promise((resolve, reject) => {
      const start = Date.now();

      const worker = new Worker('./src/wt/worker.js', {
        workerData: 10 + i
      });

      worker.on('message',
        msg => resolve({
          id: worker.threadId,
          status: 'resolved',
          data: msg,
          time: `${Date.now() - start} ms`
        }));

      worker.on('error',
        () => reject({
          id: worker.threadId,
          status: 'error',
          data: null,
          time: `${Date.now() - start} ms`
        }));
    });
  })
};

const performCalculations = async () => {
  const numOfCPUCores = os.cpus().length;
  const res = [];

  const promises = makeWorker(numOfCPUCores);
  await Promise.allSettled(promises)
    .then(results => results.forEach(result => res.push(result.value)));

  console.log(`Number of Cores: ${numOfCPUCores}`);
  console.log('Workers result:', res);
};

await performCalculations();