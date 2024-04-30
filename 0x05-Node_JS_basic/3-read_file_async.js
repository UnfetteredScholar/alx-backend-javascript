const fs = require('fs');

function countStudents(path) {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(Error('Cannot load the database'));
      }

      if (data) {
        let dbData = data.toString().split('\n');
        dbData = dbData.slice(1, dbData.length - 1);
        console.log(`Number of students: ${dbData.length}`);
        const obj = {};
        dbData.forEach((element) => {
          const student = element.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
        for (const cls in obj) {
          if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
      res();
    });
  };

  return new Promise(promise);
}

module.exports = countStudents;
