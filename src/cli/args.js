const parseArgs = () => {
  const res = process.argv.reduce((acc, el, i, arr) => {
    /^--\w*/.test(el) && (acc += `${el} is ${arr[i + 1]}, `);
    return acc;
  }, '');

  console.log(res.slice(0, res.length - 2));
};

parseArgs();