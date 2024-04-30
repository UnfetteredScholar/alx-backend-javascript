const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

function countStudents(path) {
  const promise = (res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(Error('Cannot load the database'));
      }
      let result = '';
      if (data) {
        let dbData = data.toString().split('\n');
        dbData = dbData.slice(1, dbData.length - 1);
        result = `Number of students: ${dbData.length}`;
        const obj = {};
        dbData.forEach((element) => {
          const student = element.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(student[0]);
        });
        for (const cls in obj) {
          if (cls) result += `\nNumber of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`;
        }
      }
      res(result);
    });
  };

  return new Promise(promise);
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const title = 'This is the list of our students';
  try {
    const students = await countStudents(process.argv[2]);
    res.send(`${title}\n${students}`);
  } catch (error) {
    res.send(`${title}${error.message}`);
  }
});

app.listen(port);
module.exports = app;
