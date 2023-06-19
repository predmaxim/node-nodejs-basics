import { stat, readdir } from 'fs/promises';

export const isExists = async (path) => {
  try {
    const elem = await stat(path)
    return elem.isDirectory() || elem.isFile();
  } catch (error) {
    return false;
  }
};

export const getFiles = async (dirPath) => {
  try {
    const resArr = [];
    await readdir(dirPath, { withFileTypes: true })
      .then(filesData => filesData
        .forEach(file => resArr.push(file.name)));
    return resArr;
  } catch (error) {
    return false;
  }
};