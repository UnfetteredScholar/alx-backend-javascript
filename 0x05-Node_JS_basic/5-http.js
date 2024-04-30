const http = require('http');
const fs = require('fs');
const { argv } = require('process');

const DATABASE = argv[2];

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.statusCode = 404;
  res.end();
});

app.listen(1245);

module.exports = app;
