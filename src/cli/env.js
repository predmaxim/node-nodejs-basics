const parseEnv = () => {
  const arr = Object.entries(process.env).reduce((acc, el) => {
    /^RSS_*/.test(el[0]) && acc.push(`${el[0]}=${el[1]}`);
    return acc;
  }, [])
  arr.forEach(el => console.log(el));
};

parseEnv();