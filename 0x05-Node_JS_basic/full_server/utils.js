import * as fs from 'fs';

function readDatabase(path) {
  const promise = (resolve, reject) => {
    fs.readFile(path, (err, data) => {
      const obj = {};
      if (err) {
        reject(new Error('Cannot load the database'));
      }

      if (data) {
        let dbData = data.toString().split('\n');
        dbData = dbData.slice(1, dbData.length - 1);

        dbData.forEach((element) => {
          const student = element.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
      }
      resolve(obj);
    });
  };

  return new Promise(promise);
}

module.exports = readDatabase;
